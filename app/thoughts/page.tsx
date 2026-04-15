import type { Metadata } from "next";
import { CollectionPage } from "@/components/collection-page";
import { getCollectionEntries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Thoughts"
};

export default async function ThoughtsPage() {
  const entries = await getCollectionEntries("thoughts");

  return (
    <CollectionPage
      title="Thoughts"
      description="Short reflections, fragments, and small pieces of thinking that do not need to become essays."
      entries={entries}
    />
  );
}
