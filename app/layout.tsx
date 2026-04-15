import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { navigation, siteMeta } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: siteMeta.title,
    template: `%s | ${siteMeta.owner}`
  },
  description: siteMeta.description,
  metadataBase: new URL(siteMeta.url)
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="px-5 py-8 md:px-8 md:py-10">
        <div className="mx-auto max-w-[720px] rounded-[28px] border border-line/70 bg-paper/90 px-6 py-6 shadow-page md:px-10 md:py-8">
          <header className="mb-12 flex flex-col gap-8 border-b border-line pb-6">
            <div className="flex flex-col gap-3">
              <Link href="/" className="w-fit font-serif text-2xl tracking-[0.02em] text-ink">
                {siteMeta.owner}
              </Link>
              <p className="max-w-[34rem] text-sm leading-7 text-ink/72">
                A digital garden of writing, maps, and experiments.
              </p>
            </div>
            <nav aria-label="Primary" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink/72">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="transition-colors hover:text-moss">
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
