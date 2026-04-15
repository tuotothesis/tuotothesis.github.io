import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

export const collections = ["projects", "thoughts", "trails", "garden"] as const;

export type Collection = (typeof collections)[number];

type Frontmatter = {
  title: string;
  date: string;
  tags?: string[];
  status: string;
  summary?: string;
};

export type Entry = {
  slug: string;
  collection: Collection;
  title: string;
  date: string;
  tags: string[];
  status: string;
  summary: string;
  content: string;
  html: string;
};

const contentRoot = path.join(process.cwd(), "content");

function getCollectionPath(collection: Collection) {
  return path.join(contentRoot, collection);
}

function excerptFromMarkdown(content: string) {
  const plainText = content
    .replace(/^#+\s/gm, "")
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")
    .replace(/[*_`>-]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  return plainText.slice(0, 160);
}

async function markdownToHtml(content: string) {
  const result = await remark().use(remarkGfm).use(remarkHtml).process(content);
  return result.toString();
}

async function readEntry(collection: Collection, filename: string): Promise<Entry> {
  const slug = filename.replace(/\.md$/, "");
  const fullPath = path.join(getCollectionPath(collection), filename);
  const file = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(file);
  const frontmatter = data as Frontmatter;

  return {
    slug,
    collection,
    title: frontmatter.title,
    date: frontmatter.date,
    tags: frontmatter.tags ?? [],
    status: frontmatter.status,
    summary: frontmatter.summary ?? excerptFromMarkdown(content),
    content,
    html: await markdownToHtml(content)
  };
}

export async function getCollectionEntries(collection: Collection) {
  const files = await fs.readdir(getCollectionPath(collection));
  const entries = await Promise.all(files.filter((file) => file.endsWith(".md")).map((file) => readEntry(collection, file)));

  return entries.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getEntryBySlug(collection: Collection, slug: string) {
  try {
    return await readEntry(collection, `${slug}.md`);
  } catch {
    return null;
  }
}
