import { marked } from "marked";

export async function markdownToHtml(markdown) {
  return marked(markdown);
}
