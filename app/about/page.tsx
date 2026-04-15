import type { Metadata } from "next";
import { SectionLabel } from "@/components/section-label";

export const metadata: Metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <SectionLabel>About</SectionLabel>
      <div className="prose-content text-ink/84">
        <p>
          Tong Pan is building a long-term notebook for work, questions, places, and small experiments. This site is
          less a portfolio than a record of thinking in public.
        </p>
        <p>
          The system is intentionally calm. Notes can stay unfinished. Projects can pause. Travel logs can hold plans
          as well as memories. The goal is not polish at all times, but continuity.
        </p>
        <p>
          Over time, the garden should become more useful by staying simple: markdown files, clear categories, and a
          reading experience that feels closer to a book than a dashboard.
        </p>
      </div>
    </div>
  );
}
