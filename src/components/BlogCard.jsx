import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <Link to={`/post/${post.slug}`}>
      <div className="blog-card">
        <img src={post.image} alt="" />
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
      </div>
    </Link>
  );
}
