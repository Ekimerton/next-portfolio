import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { parse } from "date-fns";

const postsDirectory = path.join(process.cwd(), "src/app/blog/posts");

export async function loadPost(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data: frontMatter, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    frontMatter,
    content: contentHtml,
  };
}

export async function getStaticPaths() {
  // Read filenames from the posts directory
  const filenames = fs.readdirSync(postsDirectory);

  // Generate paths with `slug` parameter based on filenames
  const paths = filenames.map((filename) => {
    return {
      params: {
        slug: filename.replace(/\.md$/, ""),
      },
    };
  });

  return {
    paths,
    fallback: false, // Can be set to 'blocking' if you want server-side rendering for non-pre-generated paths
  };
}

export async function loadAllPosts() {
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data: frontMatter, content } = matter(fileContents);

    // Extract the first 150 characters of the content, stripping any Markdown formatting.
    const plainText = content.replace(/\[(.+?)\]\(.+?\)|[*_`#>]/g, "$1");
    const preview = plainText.slice(0, 150);

    return {
      slug,
      frontMatter,
      preview,
    };
  });

  posts.sort((a, b) => {
    // Parse the string dates to Date objects before comparison using date-fns
    const dateA = parse(a.frontMatter.date, "MMMM do, yyyy", new Date());
    const dateB = parse(b.frontMatter.date, "MMMM do, yyyy", new Date());

    if (dateA < dateB) {
      return 1;
    } else if (dateA > dateB) {
      return -1;
    } else {
      return 0;
    }
  });

  return posts;
}
