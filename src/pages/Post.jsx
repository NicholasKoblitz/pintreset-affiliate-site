import { useParams } from "react-router-dom";
import { getPostBySlug } from "../lib/getPosts";
import { marked } from "marked";

export default function Post() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  return (
    <div>
      <h1>{post.title}</h1>
      <img src={post.image} alt="" />

      <div
        className="post-body"
        dangerouslySetInnerHTML={{ __html: marked(post.content) }}
      />
    </div>
  );
}
