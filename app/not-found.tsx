import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-5 py-8">
      <p className="text-xs uppercase tracking-[0.22em] text-moss">404</p>
      <h1 className="font-serif text-3xl text-ink">This page has not grown here yet.</h1>
      <p className="max-w-[32rem] text-sm leading-7 text-ink/72">
        The route may be old, moved, or still unwritten. The garden structure is stable, but not every path is filled
        in.
      </p>
      <Link href="/" className="text-sm text-moss hover:text-ink">
        Return home
      </Link>
    </div>
  );
}
