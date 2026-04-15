import Link from "next/link";
import type { Entry } from "@/lib/content";
import { formatDate } from "@/lib/site";

type EntryPageProps = {
  entry: Entry;
  collectionLabel: string;
  collectionHref: string;
};

export function EntryPage({ entry, collectionLabel, collectionHref }: Readonly<EntryPageProps>) {
  return (
    <article className="space-y-8">
      <div className="space-y-4">
        <Link href={collectionHref} className="text-sm text-moss hover:text-ink">
          Back to {collectionLabel}
        </Link>
        <div className="space-y-3">
          <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs uppercase tracking-[0.18em] text-ink/50">
            <span>{formatDate(entry.date)}</span>
            <span>{entry.status}</span>
          </div>
          <h1 className="font-serif text-4xl leading-tight text-ink">{entry.title}</h1>
          <p className="max-w-[38rem] text-sm leading-7 text-ink/72">{entry.summary}</p>
          {entry.tags.length > 0 ? (
            <div className="flex flex-wrap gap-2 pt-2">
              {entry.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-line px-2.5 py-1 text-xs text-ink/65">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className="prose-content text-ink/86" dangerouslySetInnerHTML={{ __html: entry.html }} />
    </article>
  );
}
