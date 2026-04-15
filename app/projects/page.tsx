import type { Metadata } from "next";
import { CollectionPage } from "@/components/collection-page";
import { getCollectionEntries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects"
};

export default async function ProjectsPage() {
  const entries = await getCollectionEntries("projects");

  return (
    <CollectionPage
      title="Projects"
      description="Long-term work, active threads, and the things still gathering shape."
      entries={entries}
    />
  );
}
