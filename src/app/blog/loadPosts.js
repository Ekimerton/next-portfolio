import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

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
    if (a.frontMatter.date < b.frontMatter.date) {
      return 1;
    } else {
      return -1;
    }
  });

  return posts;
}
