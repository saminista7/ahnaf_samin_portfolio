import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  // Keep build happy; actual posts are disabled while under construction.
  return [];
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  await params; // keep signature used
  return (
    <main className="min-h-screen bg-[#05060a] text-white">
      <article className="container-width py-14">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white">
          <ArrowLeft size={14} />
          Back to Blog
        </Link>
        <header className="mt-8">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-200/80">Blog</p>
          <h1 className="mt-2 text-4xl font-bold">Blog Under Construction</h1>
          <p className="mt-3 max-w-2xl text-white/75">
            Individual posts are not available yet. I&apos;m preparing better long-form content for this section.
          </p>
        </header>
      </article>
    </main>
  );
}
