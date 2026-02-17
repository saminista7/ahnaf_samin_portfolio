import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Blog | Ahnaf Samin",
  description: "Personal and professional writings by Ahnaf Samin.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#05060a] text-white">
      <div className="container-width py-14">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white">
          <ArrowLeft size={14} />
          Back to Portfolio
        </Link>

        <header className="mt-8">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-200/80">Blog</p>
          <h1 className="mt-2 text-4xl font-bold">Blog Under Construction</h1>
          <p className="mt-3 max-w-2xl text-white/75">
            I&apos;m currently rebuilding this section to better showcase long-form writing. Please check back soon.
          </p>
        </header>
      </div>
    </main>
  );
}
