import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Scan,
  Bug,
  CloudSun,
  Droplets,
  BarChart3,
  Mic,
  Satellite,
  Languages,
  Sparkles,
  ShieldCheck,
  Leaf,
  TrendingUp,
  Play,
  CheckCircle2,
  ArrowRight,
  Activity,
  Wallet,
  CloudRain,
  AlertTriangle,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ForestScene } from "@/components/site/forest-scene";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Farming Copilot — AI Crop, Pest & Irrigation Intelligence" },
      {
        name: "description",
        content:
          "Detect crop diseases, save water, predict yields, and grow more profitably with AI Farming Copilot — built for every farmer.",
      },
      { property: "og:title", content: "AI Farming Copilot — AI for Every Farmer" },
      { property: "og:description", content: "Detect crop diseases, save water, and predict yields with AI." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

const trustBadges = [
  { value: "MVP", label: "In active development" },
  { value: "10+", label: "AI farming workflows" },
  { value: "24/7", label: "AI advisory vision" },
  { value: "2026", label: "Public launch target" },
];

const problems = [
  { icon: Leaf, title: "Crop Disease", desc: "Undetected blight, rust and mildew silently destroy harvests." },
  { icon: Droplets, title: "Water Waste", desc: "Over-irrigation drains profits and aquifers alike." },
  { icon: Bug, title: "Pest Attacks", desc: "Late detection means heavy losses and excess pesticide." },
  { icon: CloudRain, title: "Climate Risk", desc: "Unpredictable weather wipes out months of planning." },
  { icon: Activity, title: "Low Yield", desc: "Soil, seed and nutrient mismatches cap your output." },
  { icon: Wallet, title: "Rising Costs", desc: "Inputs keep climbing while market prices stay volatile." },
  { icon: GraduationCap, title: "Lack of Guidance", desc: "Expert agronomists are rare, expensive and far away." },
];

const features = [
  { icon: Scan, title: "AI Crop Scanner", desc: "Snap a photo, get instant disease ID with treatment plans." },
  { icon: Bug, title: "Pest Detection Engine", desc: "Identify 1,200+ pests and the right organic or chemical response." },
  { icon: CloudSun, title: "Weather Intelligence", desc: "Hyperlocal 14-day forecasts tuned to your field." },
  { icon: Droplets, title: "Smart Irrigation", desc: "Cut water use up to 30% with soil-moisture-aware scheduling." },
  { icon: TrendingUp, title: "Yield Forecasting", desc: "Predict harvest tonnage weeks in advance." },
  { icon: BarChart3, title: "Farm Analytics", desc: "Profit-per-acre dashboards across crops and seasons." },
  { icon: Mic, title: "Voice Assistant", desc: "Ask in your language. Get answers, hands-free." },
  { icon: Languages, title: "Multi-Language", desc: "Available in 10+ languages with regional crop knowledge." },
  { icon: Satellite, title: "Satellite Monitoring", desc: "NDVI and field health from space, refreshed weekly." },
  { icon: Sparkles, title: "AI Farm Assistant", desc: "Conversational AI that knows your fields, crops and history." },
];

const steps = [
  { n: "01", title: "Upload Crop Photo", desc: "Snap a leaf, fruit or plant with any phone." },
  { n: "02", title: "AI Analysis", desc: "Our models scan in seconds, with 95% accuracy." },
  { n: "03", title: "Receive Recommendations", desc: "Get treatment, dosage, timing — in your language." },
  { n: "04", title: "Increase Yield", desc: "Track outcomes, save costs, grow more, sustainably." },
];

const testimonials = [
  {
    quote:
      "We saved 28% on water in our first season and caught early leaf blight on three plots. The ROI was immediate.",
    name: "Anita Sharma",
    role: "Wheat farmer · Punjab, India",
  },
  {
    quote:
      "It's like having an agronomist in my pocket. The voice assistant works perfectly in Marathi.",
    name: "Rajesh Patil",
    role: "Sugarcane farmer · Maharashtra",
  },
  {
    quote:
      "Yield prediction was within 4% of actual. We hedged contracts confidently and grew margins.",
    name: "Lucía Fernández",
    role: "Cooperative manager · Andalusia, Spain",
  },
];

const stats = [
  { value: "MVP", label: "Product stage" },
  { value: "10+", label: "Core AI tools" },
  { value: "India", label: "Initial market" },
  { value: "2026", label: "Launch target" },
];

const pricing = [
  {
    name: "Free",
    price: "$0",
    cadence: "forever",
    desc: "For smallholders getting started with AI.",
    features: ["5 crop scans / day", "Basic weather forecast", "Community support", "1 farm, up to 2 acres"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$19",
    cadence: "per month",
    desc: "For growing farms that want every advantage.",
    features: [
      "Unlimited crop & pest scans",
      "Smart irrigation scheduling",
      "Yield forecasting",
      "Satellite NDVI monitoring",
      "Voice assistant in 10+ languages",
      "Priority email support",
    ],
    cta: "Start Pro Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "talk to us",
    desc: "For cooperatives, agri-businesses and governments.",
    features: [
      "Unlimited farms & users",
      "Custom AI model training",
      "API & ERP integrations",
      "Dedicated agronomy partner",
      "SLA + 24/7 support",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-hero">
        <ForestScene />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-32 lg:pt-32 lg:pb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-foreground">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              Building AI farming intelligence for India and emerging markets
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground">
              AI Farming Intelligence
              <br />
              <span className="text-gradient">For Every Farmer</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Detect crop diseases before they destroy your harvest. Improve yield, reduce water waste,
              optimize fertilizer usage, and make smarter decisions with AI.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-95 h-12 px-7 text-base">
                <Link to="/contact">
                  Start Free Analysis <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-7 text-base">
                <Link to="/how-it-works"><Play className="mr-2 h-4 w-4" /> Watch Demo</Link>
              </Button>
            </div>

            <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
              {trustBadges.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  className="glass rounded-2xl px-4 py-4"
                >
                  <div className="font-display text-2xl font-bold text-gradient">{b.value}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{b.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">The reality</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
              Farming is harder than ever
            </h2>
            <p className="mt-4 text-muted-foreground">
              Seven pain points cost the global agriculture industry over $400B every year. AI fixes most of them.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-muted text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-colors">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-semibold text-foreground">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION DASHBOARD PREVIEW */}
      <section className="py-24 lg:py-32 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">The copilot</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
              One dashboard. <span className="text-gradient">Every decision.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Crop health, weather, irrigation and yield — unified and explained in plain language.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="mt-14">
            <DashboardPreview />
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Capabilities</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Ten AI tools, one app</h2>
            <p className="mt-4 text-muted-foreground">Everything a modern farm needs — nothing it doesn't.</p>
          </motion.div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 5) * 0.04, duration: 0.5 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 lg:py-32 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">How it works</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">From photo to harvest, in four steps</h2>
          </motion.div>

          <div className="relative mt-16">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary to-transparent lg:block" />
            <div className="grid gap-10 lg:grid-cols-4">
              {steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.1, duration: 0.55 }}
                  className="relative rounded-2xl border border-border bg-card p-7 shadow-soft text-center"
                >
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground font-display text-lg font-bold shadow-glow animate-pulse-ring">
                    {s.n}
                  </div>
                  <h3 className="mt-5 font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Loved by growers</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Built around real farming problems.</h2>
          </motion.div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="rounded-2xl border border-border bg-card p-7 shadow-soft"
              >
                <blockquote className="text-base leading-relaxed text-foreground">"{t.quote}"</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-primary-foreground font-semibold">
                    {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft"
              >
                <div className="font-display text-3xl sm:text-4xl font-bold text-gradient">{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 lg:py-32 bg-muted/40" id="pricing">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Pricing</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Honest pricing for every farm</h2>
            <p className="mt-4 text-muted-foreground">Start free. Upgrade when you see results. Cancel anytime.</p>
          </motion.div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {pricing.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                className={
                  "relative rounded-3xl border p-8 shadow-soft transition-all hover:-translate-y-1 " +
                  (p.highlight
                    ? "border-primary bg-card shadow-glow ring-1 ring-primary/30"
                    : "border-border bg-card")
                }
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-glow">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold">{p.price}</span>
                  <span className="text-sm text-muted-foreground">/ {p.cadence}</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={
                    "mt-8 w-full " +
                    (p.highlight
                      ? "bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-95"
                      : "")
                  }
                  variant={p.highlight ? "default" : "outline"}
                >
                  <Link to="/contact">{p.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            Regional payment methods supported: UPI, Razorpay, Paytm, PhonePe (India) · Stripe, Apple Pay, Google Pay (US) · Alipay, WeChat Pay (China) · PayPal, SEPA (EU & AU).
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 lg:p-16 text-center shadow-glow"
          >
            <div className="absolute inset-0 opacity-20" aria-hidden>
              <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-white blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-accent blur-3xl" />
            </div>
            <div className="relative">
              <AlertTriangle className="mx-auto h-8 w-8 text-primary-foreground" />
              <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold text-primary-foreground">
                Don't let one disease ruin a whole season
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90">
                Get your first crop analysis in under 60 seconds. Free, forever.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button asChild size="lg" variant="secondary" className="h-12 px-7 text-base bg-background text-foreground hover:bg-background/90">
                  <Link to="/contact">Start Free Analysis <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 px-7 text-base bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  <Link to="/features">Explore features</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function DashboardPreview() {
  return (
    <div className="rounded-3xl border border-border bg-card p-3 shadow-soft">
      <div className="rounded-2xl bg-background p-5 sm:p-7">
        {/* top bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="ml-3 text-xs text-muted-foreground">copilot.aifarmingcopilot.space</span>
          </div>
          <span className="text-xs text-muted-foreground hidden sm:inline">Live · Updated 2 min ago</span>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {/* Crop health */}
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Crop Health Score</span>
              <Leaf className="h-4 w-4 text-primary" />
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-4xl font-bold text-gradient">94</span>
              <span className="text-xs text-muted-foreground">/ 100</span>
            </div>
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-muted">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "94%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-full bg-gradient-primary"
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Excellent. Continue current schedule.</p>
          </div>

          {/* Disease alert */}
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Disease Detection</span>
              <Scan className="h-4 w-4 text-primary" />
            </div>
            <div className="mt-3">
              <div className="text-sm font-semibold">Early Leaf Spot · Block B</div>
              <div className="text-xs text-muted-foreground">Confidence 96%</div>
            </div>
            <div className="mt-4 rounded-lg bg-muted p-3 text-xs">
              <div className="font-medium text-foreground">Recommendation</div>
              <div className="mt-1 text-muted-foreground">Apply copper-based fungicide within 48 hours.</div>
            </div>
          </div>

          {/* Weather */}
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Weather · 7 days</span>
              <CloudSun className="h-4 w-4 text-primary" />
            </div>
            <div className="mt-3 grid grid-cols-7 gap-1.5">
              {[28, 31, 30, 27, 29, 32, 30].map((t, i) => (
                <div key={i} className="flex flex-col items-center gap-1 rounded-md bg-muted py-2">
                  <span className="text-[10px] text-muted-foreground">{["M","T","W","T","F","S","S"][i]}</span>
                  <span className="text-xs font-semibold">{t}°</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Rain expected Sat — skip irrigation Fri.</p>
          </div>

          {/* Yield Forecast */}
          <div className="rounded-xl border border-border bg-card p-5 lg:col-span-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Yield Forecast (tons / acre)</span>
              <TrendingUp className="h-4 w-4 text-primary" />
            </div>
            <svg viewBox="0 0 400 110" className="mt-4 h-28 w-full">
              <defs>
                <linearGradient id="yf" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                d="M0,80 C40,70 70,40 110,45 C150,50 180,20 230,30 C280,40 320,10 400,15 L400,110 L0,110 Z"
                fill="url(#yf)"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              />
              <motion.path
                d="M0,80 C40,70 70,40 110,45 C150,50 180,20 230,30 C280,40 320,10 400,15"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: "easeOut" }}
              />
            </svg>
            <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
              <span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
              <span className="font-semibold text-gradient">+20% YoY</span>
            </div>
          </div>

          {/* Water savings */}
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Water Saved</span>
              <Droplets className="h-4 w-4 text-primary" />
            </div>
            <div className="mt-3">
              <div className="font-display text-4xl font-bold text-gradient">2,840L</div>
              <div className="text-xs text-muted-foreground">this week · 31% vs schedule</div>
            </div>
            <div className="mt-4 grid grid-cols-7 gap-1">
              {[40, 60, 35, 80, 55, 70, 90].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 4 }}
                  whileInView={{ height: h * 0.5 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.6 }}
                  className="rounded bg-gradient-primary"
                  style={{ height: `${h * 0.5}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
