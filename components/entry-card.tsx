import Link from "next/link";
import type { Entry } from "@/lib/content";
import { formatDate } from "@/lib/site";

export function EntryCard({ entry }: Readonly<{ entry: Entry }>) {
  return (
    <article className="rounded-2xl border border-line bg-white/35 p-5 transition-colors hover:border-moss/45">
      <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.18em] text-ink/50">
        <span>{formatDate(entry.date)}</span>
        <span>{entry.status}</span>
      </div>
      <h3 className="font-serif text-2xl leading-tight text-ink">
        <Link href={`/${entry.collection}/${entry.slug}`} className="hover:text-moss">
          {entry.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm leading-7 text-ink/74">{entry.summary}</p>
      {entry.tags.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-line px-2.5 py-1 text-xs text-ink/65">
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}
