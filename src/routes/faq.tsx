import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What does AI Farming Copilot actually do?", a: "It's an AI-powered app for farmers. Snap a photo of a crop and our models identify diseases, pests, deficiencies and growth stage with 95% accuracy. We also provide smart irrigation scheduling, weather intelligence, yield forecasting, satellite NDVI monitoring and a voice-based AI farm assistant." },
  { q: "How accurate is the disease detection?", a: "Independent field trials place our top crop-disease models at 95% accuracy on common staple crops (rice, wheat, maize, cotton, sugarcane, tomato, potato, soybean and more). We always display a confidence score and ask for a second photo if confidence is low." },
  { q: "Do I need special hardware, sensors or drones?", a: "No. The core product works with any smartphone camera. Satellite monitoring uses public-domain ESA Sentinel imagery and does not require you to install anything. Optional soil-moisture sensors can be paired for even more accurate irrigation scheduling on Pro and Enterprise plans." },
  { q: "Which crops are supported?", a: "We support 60+ crops including rice, wheat, maize, cotton, sugarcane, soybean, tomato, potato, onion, chili, banana, mango, citrus, grape, coffee, tea, and many regional varieties. We add new crops every quarter." },
  { q: "Which languages do you support?", a: "Today: English, Hindi, Chinese (Simplified), Spanish, Arabic, French, German, Japanese, Russian, and Portuguese. The voice assistant also understands several regional Indian dialects." },
  { q: "Is there a free plan?", a: "Yes. The Free plan includes 5 crop scans per day, basic weather forecasts, and access to the community. It's perfect for smallholders or for trying us out before upgrading." },
  { q: "How much does Pro cost and what's included?", a: "Pro is $19 per month and includes unlimited crop and pest scans, smart irrigation, yield forecasting, satellite NDVI monitoring, the voice assistant in 10+ languages, and priority email support." },
  { q: "Can I pay in my local currency?", a: "Yes. Our checkout auto-detects your country and shows only the relevant payment methods — UPI / Razorpay / Paytm / PhonePe in India, Stripe / Apple Pay / Google Pay in the US, Alipay / WeChat Pay in China, PayPal / Stripe in Australia, Stripe / SEPA in Europe, and more." },
  { q: "Can I cancel anytime?", a: "Yes. There are no contracts. Cancel from your account dashboard and you'll keep access until the end of the billing period." },
  { q: "Do you offer refunds?", a: "We offer a 14-day refund on new Pro subscriptions if you're not satisfied. See our Refund Policy for full details." },
  { q: "How does smart irrigation save water?", a: "We combine soil-moisture estimates, hyperlocal weather forecasts, evapotranspiration data, and your crop's specific water needs to recommend a precise schedule. Farmers typically reduce water use by 20–30% with no yield loss." },
  { q: "Is my farm data private?", a: "Always. Your data belongs to you. We never sell it, never share it with third parties, and you can export or delete it at any time. See our Privacy Policy and GDPR pages for details." },
  { q: "Are you GDPR and CCPA compliant?", a: "Yes. We comply with GDPR (EU/UK), CCPA (California), India's DPDP Act, and equivalent regulations in every market we serve." },
  { q: "Does the app work offline?", a: "Yes. You can capture photos and queue scans offline; results sync and analyze as soon as you reconnect. Weather forecasts and satellite imagery require an internet connection." },
  { q: "How is the AI trained?", a: "Our models are trained on 12M+ labelled crop images contributed by agricultural universities, agronomy partners, and (with consent) our user community. We continuously retrain to improve accuracy and add new crops and diseases." },
  { q: "Do you sell pesticides or fertilizers?", a: "No — we are completely independent. Our recommendations are based on what works best for your crop and budget, never on what we earn commissions from." },
  { q: "Can my cooperative or farming organization sign up?", a: "Absolutely. Our Enterprise plan supports unlimited farms and users, custom AI model training, API and ERP integrations, and a dedicated agronomy partner. Contact sales to discuss." },
  { q: "Do you integrate with ERP and farm management software?", a: "Yes. Enterprise customers get a REST API plus pre-built integrations for major agricultural ERPs and FMS platforms. We can also build custom integrations on request." },
  { q: "What if the AI gets a recommendation wrong?", a: "We always display confidence and ask for a second photo when confidence is low. You can also escalate any scan to our agronomy team on Pro and Enterprise plans. Reported errors are reviewed and used to retrain the model." },
  { q: "How do I get started?", a: "Click 'Start Free Analysis' and create a free account in under 60 seconds. You can run your first crop scan immediately." },
  { q: "Do you offer training or onboarding?", a: "Yes. Free users get access to our knowledge base and community. Pro users get email onboarding and webinars. Enterprise users get a dedicated success manager." },
  { q: "Is there a mobile app?", a: "Yes — Android and iOS apps are available alongside the web app. All plans include both." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — AI Farming Copilot" },
      { name: "description", content: "Answers to the most common questions about AI Farming Copilot — accuracy, pricing, languages, privacy, refunds and more." },
      { property: "og:title", content: "FAQ — AI Farming Copilot" },
      { property: "og:description", content: "Frequently asked questions about AI Farming Copilot." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FAQ,
});

export default function FAQ() {
  return (
    <>
      <section className="bg-hero py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">FAQ</p>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl font-bold">Questions, <span className="text-gradient">answered</span></h1>
          <p className="mt-5 text-muted-foreground">Everything you need to know about AI Farming Copilot.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-border bg-card px-5 shadow-soft">
                <AccordionTrigger className="text-left font-medium hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
