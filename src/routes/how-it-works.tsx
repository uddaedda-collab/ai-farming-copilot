import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Camera, Cpu, ClipboardCheck, Sprout, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it works — AI Farming Copilot" },
      { name: "description", content: "Four steps from a single crop photo to a higher yield: upload, AI analysis, recommendations, results." },
      { property: "og:title", content: "How AI Farming Copilot works" },
      { property: "og:description", content: "From photo to harvest in four simple steps." },
      { property: "og:url", content: "/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: HowItWorks,
});

const steps = [
  { icon: Camera, n: "01", title: "Upload a crop photo", desc: "Use any phone. Snap a leaf, fruit or plant — even with poor lighting. Our pre-processing handles the rest." },
  { icon: Cpu, n: "02", title: "AI analyzes in seconds", desc: "Models trained on 12M+ labelled crop images detect disease, pests, deficiencies and stage of growth — with 95% accuracy." },
  { icon: ClipboardCheck, n: "03", title: "Get clear recommendations", desc: "Receive treatment options, dosage, timing, and cost — in your language, ranked by efficacy and budget." },
  { icon: Sprout, n: "04", title: "Watch your yield grow", desc: "Track outcomes across seasons, refine practices, save inputs, and increase profit-per-acre." },
];

export default function HowItWorks() {
  return (
    <>
      <section className="bg-hero py-24 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">How it works</p>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl font-bold">From photo to harvest, <span className="text-gradient">in four steps</span></h1>
          <p className="mt-5 text-muted-foreground">No drones, no sensors, no setup. Just a phone and a few seconds.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <ol className="relative space-y-12 before:absolute before:left-6 sm:before:left-1/2 before:top-0 before:h-full before:w-px before:bg-border">
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                className={"relative grid gap-6 sm:grid-cols-2 sm:items-center " + (i % 2 ? "sm:[&>div:first-child]:order-2" : "")}
              >
                <div className="relative pl-16 sm:pl-0 sm:pr-10 sm:text-right">
                  <span className="absolute left-0 sm:left-auto sm:right-[-22px] top-0 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground font-display font-bold shadow-glow">
                    {s.n}
                  </span>
                  <h2 className="font-display text-2xl font-bold">{s.title}</h2>
                  <p className="mt-2 text-muted-foreground">{s.desc}</p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-8 shadow-soft sm:ml-10">
                  <s.icon className="h-10 w-10 text-primary" />
                  <p className="mt-4 text-sm text-muted-foreground">Step {s.n} · {s.title}</p>
                </div>
              </motion.li>
            ))}
          </ol>

          <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow">
              <Link to="/contact">Start free analysis <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
