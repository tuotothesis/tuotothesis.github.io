import type { Metadata } from "next";
import { CollectionPage } from "@/components/collection-page";
import { getCollectionEntries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Garden"
};

export default async function GardenPage() {
  const entries = await getCollectionEntries("garden");

  return (
    <CollectionPage
      title="Garden"
      description="Unfinished experiments, drafts, and ideas that are still looking for their form."
      entries={entries}
    />
  );
}
