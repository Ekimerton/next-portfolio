import { loadPost } from "../loadPosts";
import Image from "next/image";

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
        <article className="prose prose-stone dark:prose-invert dark:prose-p:text-stone-400 prose-p:text-stone-600 dark:prose-blockquote:text-stone-400 prose-blockquote:text-stone-600 max-w-4xl w-full px-6 py-12 min-h-screen prose-code:py-1 prose-code:px-2 prose-code:bg-stone-800 dark:prose-code:bg-stone-200 prose-code:text-stone-200 dark:prose-code:text-stone-800 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none prose-code:mx-0.5 prose-pre:bg-stone-800 dark:prose-pre:bg-stone-200 prose-code:break-words">
          <p className="text-sm">{frontMatter.date}</p>
          <h1 className="">{frontMatter.title}</h1>
          <div id="author-info" className="flex gap-4 mb-12 items-center">
            <Image
              id="headshot"
              className="h-14 w-14 rounded-md border-stone-700/10 border-2 m-0"
              src={frontMatter.author.imageUrl}
              width={50}
              height={50}
              alt="Headshot"
            />
            <div>
              <p className="m-0 text-sm text-stone-950 dark:text-stone-50">
                {frontMatter.author.name}
              </p>
              <a
                className="m-0 text-sm"
                href={frontMatter.author.url}
                target="_blank"
              >
                {frontMatter.author.handle}
              </a>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </div>
    </div>
  );
}
