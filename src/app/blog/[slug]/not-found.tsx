import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#05060a] text-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Post not found</h1>
        <p className="mt-3 text-white/70">This blog entry does not exist yet.</p>
        <Link href="/blog" className="mt-5 inline-block rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10">
          Return to Blog
        </Link>
      </div>
    </main>
  );
}
