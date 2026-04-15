import Link from "next/link";
import { EntryCard } from "@/components/entry-card";
import { SectionLabel } from "@/components/section-label";
import { getCollectionEntries } from "@/lib/content";
import { nowItems } from "@/lib/site";

export default async function HomePage() {
  const [projects, thoughts, trails] = await Promise.all([
    getCollectionEntries("projects"),
    getCollectionEntries("thoughts"),
    getCollectionEntries("trails")
  ]);

  return (
    <div className="space-y-14">
      <section className="space-y-5">
        <p className="text-xs uppercase tracking-[0.22em] text-moss">Digital Garden OS</p>
        <div className="space-y-4">
          <h1 className="font-serif text-4xl leading-tight text-ink md:text-5xl">Tong Pan</h1>
          <p className="max-w-[34rem] font-serif text-xl leading-9 text-ink/82">
            A digital garden of writing, maps, and experiments.
          </p>
          <p className="max-w-[38rem] text-base leading-8 text-ink/74">
            This is a slow system for notes, projects, trails, and unfinished work. The structure is stable on
            purpose, so the content can keep changing.
          </p>
        </div>
      </section>

      <section className="space-y-5">
        <SectionLabel>Now</SectionLabel>
        <div className="rounded-2xl border border-line bg-white/30 p-5">
          <ul className="space-y-3 text-sm leading-7 text-ink/80">
            {nowItems.map((item) => (
              <li key={item} className="border-b border-line/60 pb-3 last:border-none last:pb-0">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <SectionLabel>Selected Projects</SectionLabel>
          <Link href="/projects" className="text-sm text-moss hover:text-ink">
            See all
          </Link>
        </div>
        <div className="space-y-4">
          {projects.slice(0, 2).map((entry) => (
            <EntryCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <SectionLabel>Trails Highlights</SectionLabel>
          <Link href="/trails" className="text-sm text-moss hover:text-ink">
            See all
          </Link>
        </div>
        <div className="space-y-4">
          {trails.slice(0, 1).map((entry) => (
            <EntryCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <SectionLabel>Recent Thoughts</SectionLabel>
          <Link href="/thoughts" className="text-sm text-moss hover:text-ink">
            See all
          </Link>
        </div>
        <div className="space-y-4">
          {thoughts.slice(0, 3).map((entry) => (
            <EntryCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </section>
    </div>
  );
}
