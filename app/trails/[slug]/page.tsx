import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EntryPage } from "@/components/entry-page";
import { getCollectionEntries, getEntryBySlug } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const entries = await getCollectionEntries("trails");
  return entries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getEntryBySlug("trails", slug);

  return entry
    ? {
        title: entry.title,
        description: entry.summary
      }
    : {};
}

export default async function TrailEntryPage({ params }: Props) {
  const { slug } = await params;
  const entry = await getEntryBySlug("trails", slug);

  if (!entry) {
    notFound();
  }

  return <EntryPage entry={entry} collectionLabel="Trails" collectionHref="/trails" />;
}
