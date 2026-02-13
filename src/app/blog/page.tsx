import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getAllPostsMeta } from "@/lib/blog";

export const metadata = {
  title: "Blog | Ahnaf Samin",
  description: "Personal and professional writings by Ahnaf Samin.",
};

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <main className="min-h-screen bg-[#05060a] text-white">
      <div className="container-width py-14">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white">
          <ArrowLeft size={14} />
          Back to Portfolio
        </Link>

        <header className="mt-8">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-200/80">Blog</p>
          <h1 className="mt-2 text-4xl font-bold">Thoughts on AI, career, and life</h1>
          <p className="mt-3 max-w-2xl text-white/75">
            Publish by adding markdown files in <code>content/blog</code>. This gives you full ownership and fast publishing.
          </p>
        </header>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-2xl border border-white/15 bg-white/[0.03] p-6">
              <p className="text-xs uppercase tracking-wider text-white/50">{new Date(post.date).toDateString()}</p>
              <h2 className="mt-2 text-2xl font-semibold">{post.title}</h2>
              <p className="mt-3 text-sm text-white/75">{post.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/20 px-2 py-0.5 text-xs text-white/75">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between text-sm text-white/65">
                <span>{post.readingMinutes} min read</span>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1.5 font-semibold text-blue-200 hover:text-white">
                  Read post <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
