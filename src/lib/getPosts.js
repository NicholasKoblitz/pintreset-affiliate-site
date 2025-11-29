import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/posts");

export function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");

    const { data, content } = matter(fileContent);

    return {
      slug: filename.replace(".md", ""),
      ...data,
      content,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
}

export function getFeaturedPosts() {
  return getAllPosts().filter((p) => p.featured);
}

export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContent);

  return {
    slug,
    ...data,
    content,
  };
}
