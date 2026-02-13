import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  if (!getAllPostSlugs().includes(slug)) {
    notFound();
  }

  const post = getPostBySlug(slug);
  return (
    <main className="min-h-screen bg-[#05060a] text-white">
      <article className="container-width py-14">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white">
          <ArrowLeft size={14} />
          Back to Blog
        </Link>
        <header className="mt-8 border-b border-white/10 pb-8">
          <p className="text-xs uppercase tracking-wider text-blue-200/80">{new Date(post.date).toDateString()}</p>
          <h1 className="mt-2 text-4xl font-bold">{post.title}</h1>
          <p className="mt-3 max-w-2xl text-white/75">{post.excerpt}</p>
          <p className="mt-4 text-sm text-white/50">{post.readingMinutes} min read</p>
        </header>
        <div className="prose prose-invert prose-headings:text-white prose-p:text-white/85 prose-a:text-blue-200 prose-strong:text-white mt-8 max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
