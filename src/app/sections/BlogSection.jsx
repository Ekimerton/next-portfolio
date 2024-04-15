import Link from "next/link";
import { loadAllPosts } from "../blog/loadPosts";

export default async function BlogSection({}) {
  const posts = await loadAllPosts();
  return (
    <>
      <h2>Blog Posts</h2>
      {posts.map(({ slug, frontMatter, preview }) => (
        <>
          <Link key={slug} href={`/blog/${slug}`}>
            <h3 className="">{frontMatter.title}</h3>
          </Link>
          <p className="">{preview}...</p>
        </>
      ))}
      <Link href="/blog" className="text-center">
        <p className="text-sm">See More</p>
      </Link>
    </>
  );
}
