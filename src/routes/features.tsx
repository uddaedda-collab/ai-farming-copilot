import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Scan, Bug, CloudSun, Droplets, TrendingUp, BarChart3, Mic, Languages, Satellite, Sparkles, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — AI Farming Copilot" },
      { name: "description", content: "Ten AI tools built for farmers: crop scanner, pest detection, smart irrigation, yield forecasting, weather intelligence, satellite monitoring and more." },
      { property: "og:title", content: "Features — AI Farming Copilot" },
      { property: "og:description", content: "Explore the AI tools powering modern farms." },
      { property: "og:url", content: "/features" },
    ],
    links: [{ rel: "canonical", href: "/features" }],
  }),
  component: Features,
});

const features = [
  { icon: Scan, title: "AI Crop Scanner", desc: "Detect 800+ crop diseases from a single photo with 95% accuracy. Receive treatment plans, dosage and timing — all in your language." },
  { icon: Bug, title: "Pest Detection Engine", desc: "Identify 1,200+ pests, get integrated pest management options (organic and chemical) ranked by efficacy and cost." },
  { icon: CloudSun, title: "Weather Intelligence", desc: "Hyperlocal 14-day forecasts and severe-weather alerts calibrated to your field's microclimate." },
  { icon: Droplets, title: "Smart Irrigation", desc: "Soil-moisture + weather-aware irrigation schedules that cut water use by up to 30% without yield loss." },
  { icon: TrendingUp, title: "Yield Forecasting", desc: "Tonnage predictions weeks before harvest, so you can negotiate contracts and plan logistics with confidence." },
  { icon: BarChart3, title: "Farm Analytics", desc: "Profit-per-acre dashboards across crops, fields and seasons. Find what's working — and what isn't." },
  { icon: Mic, title: "Voice Assistant", desc: "Hands-free, hands-dirty. Ask in your dialect and get answers instantly while you're in the field." },
  { icon: Languages, title: "Multi-Language Support", desc: "Available in English, Hindi, Chinese, Spanish, Arabic, French, German, Japanese, Russian and Portuguese — with regional crop knowledge." },
  { icon: Satellite, title: "Satellite Monitoring", desc: "Weekly NDVI and field-health imagery from space. Spot stress before it becomes a problem." },
  { icon: Sparkles, title: "AI Farm Assistant", desc: "A conversational agronomist that learns your fields, crops, and history. Ask anything — get answers, not generic tips." },
];

export default function Features() {
  return (
    <>
      <section className="bg-hero py-24 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Features</p>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl font-bold">
            Everything your farm needs.<br /><span className="text-gradient">Nothing it doesn't.</span>
          </h1>
          <p className="mt-5 text-muted-foreground">Ten production-ready AI tools, one beautifully simple app.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 4) * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-border bg-card p-7 shadow-soft hover:shadow-glow transition-all"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                <f.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 font-display text-xl font-semibold">{f.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow">
            <Link to="/contact">Try it free <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
