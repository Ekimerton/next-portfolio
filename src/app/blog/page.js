import Link from "next/link";
import { loadAllPosts } from "./loadPosts";

export default async function BlogHome() {
  const posts = await loadAllPosts();

  return (
    <main className="min-h-screen w-full dark:bg-stone-950 bg-stone-50 flex justify-center">
      <div className="prose prose-stone dark:prose-invert dark:prose-p:text-stone-400 prose-p:text-stone-600 max-w-3xl w-full px-6 py-12">
        <h1>Blog Posts</h1>
        {posts.map(({ slug, frontMatter, preview }) => (
          <>
            <Link key={slug} href={`/blog/${slug}`}>
              <h3 className="">{frontMatter.title}</h3>
            </Link>
            <p className="">{preview}...</p>
          </>
        ))}
        <p className="text-light text-center text-sm">More coming soon!</p>
      </div>
    </main>
  );
}
