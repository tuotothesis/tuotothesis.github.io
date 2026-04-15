import type { Metadata } from "next";
import { SectionLabel } from "@/components/section-label";

export const metadata: Metadata = {
  title: "Colophon"
};

export default function ColophonPage() {
  return (
    <div className="space-y-8">
      <SectionLabel>Colophon</SectionLabel>
      <div className="prose-content text-ink/84">
        <p>
          This digital garden is built with Next.js App Router, Tailwind CSS, and a file-based markdown system. It is
          statically exported so it can live on GitHub Pages without a backend or database.
        </p>

        <h2>System Shape</h2>
        <p>
          Content lives in four stable collections: <code>/content/projects</code>, <code>/content/thoughts</code>,{" "}
          <code>/content/trails</code>, and <code>/content/garden</code>. Each markdown file carries the same small
          frontmatter contract: title, date, tags, and status.
        </p>

        <h2>Design Direction</h2>
        <p>
          The interface is intentionally quiet: warm paper background, soft dark text, muted green accents, serif for
          long-form reading, sans-serif for navigation and framing. The aim is a calm notebook rather than a product
          dashboard.
        </p>

        <h2>Evolution Rules</h2>
        <p>
          Markdown remains the source of truth. New entries are added as files, not database rows. The route structure
          stays small, so the system can grow in content without demanding a rewrite. Imperfect notes are valid here;
          this garden is meant to evolve in public.
        </p>
      </div>
    </div>
  );
}
