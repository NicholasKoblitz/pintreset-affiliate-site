// Use Vite's import.meta.glob to import all markdown files
const postFiles = import.meta.glob('../posts/*.md', { as: 'raw', eager: true });

// Simple frontmatter parser
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);
  
  if (!match) {
    return { data: {}, content };
  }
  
  const frontmatter = match[1];
  const markdown = match[2];
  
  const data = {};
  frontmatter.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) return;
    
    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();
    
    // Remove quotes
    value = value.replace(/^["']|["']$/g, '');
    
    // Convert booleans
    if (value === 'true') value = true;
    if (value === 'false') value = false;
    
    data[key] = value;
  });
  
  return { data, content: markdown };
}

export function getAllPosts() {
  const posts = Object.entries(postFiles).map(([path, content]) => {
    // Extract slug from file path
    const slug = path.split('/').pop().replace('.md', '');
    
    // Parse frontmatter and content
    const { data, content: markdown } = parseFrontmatter(content);
    
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