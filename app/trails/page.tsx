import type { Metadata } from "next";
import { CollectionPage } from "@/components/collection-page";
import { getCollectionEntries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Trails"
};

export default async function TrailsPage() {
  const entries = await getCollectionEntries("trails");

  return (
    <CollectionPage
      title="Trails"
      description="Travel notes, hiking plans, route sketches, and the geography of attention."
      entries={entries}
    />
  );
}
