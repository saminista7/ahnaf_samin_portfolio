import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  cover?: string;
  readingMinutes: number;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function filenameToTitle(slug: string): string {
  return slug
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function extractExcerpt(content: string, maxLength = 160): string {
  const stripped = content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]+`/g, " ")
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
    .replace(/\[[^\]]+]\([^)]*\)/g, "$1")
    .replace(/[#>*_\-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!stripped) return "";
  if (stripped.length <= maxLength) return stripped;
  return `${stripped.slice(0, maxLength - 3).trim()}...`;
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllPostsMeta(): BlogPostMeta[] {
  return getAllPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      date: post.date,
      tags: post.tags,
      cover: post.cover,
      readingMinutes: post.readingMinutes,
    }));
}

export function getPostBySlug(slug: string): BlogPost {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);
  const normalizedContent = content.trim();
  const fallbackTitle = filenameToTitle(slug);
  const fallbackExcerpt = extractExcerpt(normalizedContent);

  return {
    slug,
    title: String(data.title ?? fallbackTitle),
    excerpt: String(data.excerpt ?? fallbackExcerpt),
    date: String(data.date ?? new Date().toISOString()),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    cover: typeof data.cover === "string" ? data.cover : undefined,
    readingMinutes: Math.max(1, Math.ceil(stats.minutes)),
    content: normalizedContent,
  };
}
