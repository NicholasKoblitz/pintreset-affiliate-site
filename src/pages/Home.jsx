import BlogCard from "../components/BlogCard";
import { getFeaturedPosts } from "../lib/getPosts";

export default function Home() {
  const posts = getFeaturedPosts();

  return (
    <div>
      <h1>Featured Posts</h1>

      <div className="grid">
        {posts.map((p) => (
          <BlogCard key={p.slug} post={p} />
        ))}
      </div>
    </div>
  );
}
