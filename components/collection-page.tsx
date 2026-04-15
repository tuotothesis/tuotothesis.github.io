import { EntryCard } from "@/components/entry-card";
import type { Entry } from "@/lib/content";
import { SectionLabel } from "./section-label";

type CollectionPageProps = {
  title: string;
  description: string;
  entries: Entry[];
};

export function CollectionPage({ title, description, entries }: Readonly<CollectionPageProps>) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <SectionLabel>{title}</SectionLabel>
        <div className="space-y-3">
          <h1 className="font-serif text-4xl leading-tight text-ink">{title}</h1>
          <p className="max-w-[38rem] text-sm leading-7 text-ink/74">{description}</p>
        </div>
      </div>

      <div className="space-y-4">
        {entries.map((entry) => (
          <EntryCard key={entry.slug} entry={entry} />
        ))}
      </div>
    </div>
  );
}
