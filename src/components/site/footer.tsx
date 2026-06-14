import { Link } from "@tanstack/react-router";
import { Sprout, Mail, MapPin, Phone } from "lucide-react";

const cols = [
  {
    title: "Product",
    links: [
      { to: "/features", label: "Features" },
      { to: "/how-it-works", label: "How it works" },
      { to: "/pricing", label: "Pricing" },
      { to: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/legal/privacy", label: "Privacy Policy" },
      { to: "/legal/terms", label: "Terms & Conditions" },
      { to: "/legal/cookies", label: "Cookie Policy" },
      { to: "/legal/disclaimer", label: "Disclaimer" },
      { to: "/legal/acceptable-use", label: "Acceptable Use" },
      { to: "/legal/data-retention", label: "Data Retention" },
      { to: "/legal/refund", label: "Refund Policy" },
      { to: "/legal/gdpr", label: "GDPR" },
      { to: "/legal/ccpa", label: "CCPA" },
      { to: "/legal/children-privacy", label: "Children's Privacy" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <Sprout className="h-5 w-5" />
              </span>
              <span className="font-display text-lg">
                AI Farming <span className="text-gradient">Copilot</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              AI that helps every farmer detect crop diseases, save water, predict yields, and grow more — profitably and sustainably.
            </p>
            <div className="mt-5 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-primary" />
                <a href="mailto:admin@aifarmingcopilot.space" className="hover:text-foreground">admin@aifarmingcopilot.space</a>
              </p>
              <p className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-primary" />
                <a href="tel:+918279201101" className="hover:text-foreground">+91 82792 01101</a>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>Innovation Tower, Sector 62, Noida, Uttar Pradesh 201309, India</span>
              </p>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="text-sm font-semibold text-foreground">{c.title}</h3>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} AI Farming Copilot Technologies Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Made with care for farmers worldwide 🌱</p>
        </div>
      </div>
    </footer>
  );
}
