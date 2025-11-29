import matter from "gray-matter";

// Use Vite's import.meta.glob to import all markdown files
const postFiles = import.meta.glob('../posts/*.md', { as: 'raw', eager: true });

export function getAllPosts() {
  const posts = Object.entries(postFiles).map(([path, content]) => {
    // Extract slug from file path
    const slug = path.split('/').pop().replace('.md', '');
    
    // Parse frontmatter and content using gray-matter
    const { data, content: markdown } = matter(content);
    
    return {
      slug,
      ...data,
      content: markdown,
    };
  });

  // Sort by date, newest first
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getFeaturedPosts() {
  return getAllPosts().filter((post) => post.featured);
}

export function getPostBySlug(slug) {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}