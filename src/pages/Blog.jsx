import BlogCard from "../components/BlogCard";
import { getAllPosts } from "../lib/getPosts";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div>
      <h1>Blog</h1>

      <div className="grid">
        {posts.map((p) => (
          <BlogCard key={p.slug} post={p} />
        ))}
      </div>
    </div>
  );
}
