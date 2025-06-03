/**
 * BlogContent defines the structure for representing different types
 * of content such as talks, podcasts, blog posts, and workshops within
 * a blog or content listing. It includes the title, content type, and
 * a URL to access the content.
 */

export type BlogContent = {
  title: string;
  type: "Talk" | "Podcast" | "Blog" | "Workshop";
  url: string; // Internal URL
};
