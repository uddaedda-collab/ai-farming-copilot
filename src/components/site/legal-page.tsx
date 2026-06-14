import type { ReactNode } from "react";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <section className="bg-hero py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Legal</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold">{title}</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: {updated}</p>
        </div>
      </section>
      <section className="py-16">
        <article className="mx-auto max-w-3xl px-4 prose-legal">
          <div className="space-y-6 text-[15px] leading-7 text-foreground/90 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-foreground [&_h3]:font-semibold [&_h3]:text-lg [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-muted-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-muted-foreground [&_ul]:space-y-1.5 [&_a]:text-primary [&_a]:underline-offset-2 hover:[&_a]:underline">
            {children}
          </div>
        </article>
      </section>
    </>
  );
}

export const legalMeta = (title: string, desc: string, path: string) => ({
  meta: [
    { title: `${title} — AI Farming Copilot` },
    { name: "description", content: desc },
    { property: "og:title", content: `${title} — AI Farming Copilot` },
    { property: "og:description", content: desc },
    { property: "og:url", content: path },
  ],
  links: [{ rel: "canonical", href: path }],
});
