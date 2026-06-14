import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Rocket } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — AI Farming Copilot" },
      { name: "description", content: "Our mission is to put a 24/7 AI agronomist in the pocket of every farmer on Earth — and grow more food, sustainably." },
      { property: "og:title", content: "About AI Farming Copilot" },
      { property: "og:description", content: "Our story, mission and roadmap." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: Heart, title: "Farmer-first", desc: "Every feature is shaped by working farmers — not by office assumptions." },
  { icon: Target, title: "Outcomes over outputs", desc: "Yield, water savings and profit are the only metrics that matter." },
  { icon: Eye, title: "Transparent AI", desc: "We always show confidence, sources, and the why behind every recommendation." },
  { icon: Rocket, title: "Built to scale", desc: "From a 2-acre smallholder to a 20,000-acre cooperative — same product, same care." },
];

const roadmap = [
  { year: "2024", item: "Founded with a focus on disease detection across major staple crops." },
  { year: "2025", item: "Smart irrigation, satellite monitoring and voice assistant launched in 10+ languages." },
  { year: "2026", item: "AI Farm Assistant, ERP integrations and farm-level carbon analytics." },
  { year: "2027", item: "Autonomous advisory: AI plans the entire season for you, with one tap to apply." },
];

export default function About() {
  return (
    <>
      <section className="bg-hero py-24 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">About us</p>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl font-bold">An AI agronomist <span className="text-gradient">for every farmer</span></h1>
          <p className="mt-5 text-muted-foreground">
            We started AI Farming Copilot because expert agricultural advice should not be a luxury.
            Today, hundreds of thousands of acres are healthier, more productive, and more profitable because of it.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 grid gap-10 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <h2 className="font-display text-2xl font-bold">Our mission</h2>
            <p className="mt-3 text-muted-foreground">
              Help farmers detect crop diseases, optimize irrigation, identify pests, predict yields, reduce costs, improve productivity, and increase profitability — using AI that anyone can use.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <h2 className="font-display text-2xl font-bold">Our vision</h2>
            <p className="mt-3 text-muted-foreground">
              A world where every farmer — from a 2-acre rice paddy to a 20,000-acre wheat farm — has a 24/7 AI agronomist that speaks their language and grows their bottom line.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center font-display text-3xl font-bold">Our values</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{v.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center font-display text-3xl font-bold">Roadmap</h2>
          <div className="mt-10 space-y-5">
            {roadmap.map((r) => (
              <div key={r.year} className="flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="font-display text-2xl font-bold text-gradient">{r.year}</div>
                <p className="flex-1 text-muted-foreground">{r.item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
