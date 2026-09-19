import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">404</p>
      <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">Page not found.</h1>
      <p className="mt-4 text-slate-300">The page you requested does not exist, but the growth strategy still does.</p>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-400">
        Return home
      </Link>
    </main>
  );
}
