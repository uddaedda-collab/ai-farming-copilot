import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — AI Farming Copilot" },
      { name: "description", content: "Free, Pro and Enterprise plans for farms of every size. Regional payment methods supported worldwide." },
      { property: "og:title", content: "Pricing — AI Farming Copilot" },
      { property: "og:description", content: "Honest pricing for every farm. Start free." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const tiers = [
  { name: "Free", price: "$0", cadence: "forever", desc: "For smallholders getting started.", features: ["5 crop scans / day", "Basic weather forecast", "Community support", "1 farm, up to 2 acres"], cta: "Get Started", highlight: false },
  { name: "Pro", price: "$19", cadence: "per month", desc: "For growing farms.", features: ["Unlimited crop & pest scans", "Smart irrigation scheduling", "Yield forecasting", "Satellite NDVI monitoring", "Voice assistant in 10+ languages", "Priority email support"], cta: "Start Pro Trial", highlight: true },
  { name: "Enterprise", price: "Custom", cadence: "talk to us", desc: "For cooperatives & agri-business.", features: ["Unlimited farms & users", "Custom AI model training", "API & ERP integrations", "Dedicated agronomy partner", "SLA + 24/7 support"], cta: "Contact Sales", highlight: false },
];

const regions = [
  { region: "India", methods: ["UPI", "Razorpay", "Paytm", "PhonePe"] },
  { region: "United States", methods: ["Stripe", "Apple Pay", "Google Pay"] },
  { region: "China", methods: ["Alipay", "WeChat Pay"] },
  { region: "Australia", methods: ["PayPal", "Stripe"] },
  { region: "Europe", methods: ["Stripe", "SEPA"] },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-hero py-24 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Pricing</p>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl font-bold">Honest pricing for <span className="text-gradient">every farm</span></h1>
          <p className="mt-5 text-muted-foreground">Start free. Upgrade only when you see results.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid gap-6 lg:grid-cols-3">
          {tiers.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className={"relative rounded-3xl border p-8 shadow-soft hover:-translate-y-1 transition-all " + (p.highlight ? "border-primary bg-card shadow-glow ring-1 ring-primary/30" : "border-border bg-card")}
            >
              {p.highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-glow">Most popular</span>}
              <h2 className="font-display text-xl font-semibold">{p.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold">{p.price}</span>
                <span className="text-sm text-muted-foreground">/ {p.cadence}</span>
              </div>
              <ul className="mt-6 space-y-2.5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-primary" /><span>{f}</span></li>
                ))}
              </ul>
              <Button asChild className={"mt-8 w-full " + (p.highlight ? "bg-gradient-primary text-primary-foreground shadow-glow" : "")} variant={p.highlight ? "default" : "outline"}>
                <Link to="/contact">{p.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-5xl px-4">
          <h2 className="text-center font-display text-3xl font-bold">Pay your way, anywhere</h2>
          <p className="mt-3 text-center text-muted-foreground">Region-aware checkout shows only the payment methods relevant to you.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((r) => (
              <div key={r.region} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <h3 className="font-semibold">{r.region}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {r.methods.map((m) => (
                    <span key={m} className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground">{m}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
