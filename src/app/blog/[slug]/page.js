import Hero from "@/app/components/Hero";
import { loadPost } from "../loadPosts";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const { frontMatter } = await loadPost(slug);

  const keywordsArray = frontMatter.keywords
    .split(",")
    .map((keyword) => keyword.trim());

  return {
    title: frontMatter.title,
    description: frontMatter.description,
    keywords: keywordsArray,
  };
}

export default async function Post({ params }) {
  const { slug } = params;
  const { frontMatter, content } = await loadPost(slug);

  return (
    <div className="">
      {/*<Hero />*/}
      <div className="flex justify-center dark:bg-stone-950 bg-stone-50">
        <article className="prose prose-stone dark:prose-invert dark:prose-p:text-stone-400 prose-p:text-stone-600 dark:prose-blockquote:text-stone-400 prose-blockquote:text-stone-600 max-w-3xl w-full px-6 py-12 min-h-screen">
          <p className="text-sm">{frontMatter.date}</p>
          <h1 className="">{frontMatter.title}</h1>
          <div id="author-info" className="flex gap-4 mb-12 items-center">
            <div className="h-12 w-12 dark:bg-stone-200 bg-stone-800 rounded-sm"></div>
            <div>
              <p className="m-0 text-sm text-stone-950 dark:text-stone-50">
                {frontMatter.author}
              </p>
              <a
                className="m-0 text-sm"
                href={frontMatter.authorSocial.url}
                target="_blank"
              >
                {frontMatter.authorSocial.handle}
              </a>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </div>
    </div>
  );
}
