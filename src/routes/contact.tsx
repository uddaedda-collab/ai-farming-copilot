import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Clock, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AI Farming Copilot" },
      { name: "description", content: "Get in touch with AI Farming Copilot. Sales, support, partnerships — we typically respond within 24 hours." },
      { property: "og:title", content: "Contact AI Farming Copilot" },
      { property: "og:description", content: "Email, address, business hours and contact form." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

export default function Contact() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);
    const subject = encodeURIComponent(`AI Farming Copilot enquiry from ${name}`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:admin@aifarmingcopilot.space?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success("Opening your email client…");
      setSending(false);
    }, 400);
  }

  return (
    <>
      <section className="bg-hero py-24 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</p>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl font-bold">Let's <span className="text-gradient">talk</span></h1>
          <p className="mt-5 text-muted-foreground">Sales, support or partnership — we typically reply within 24 hours.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-5">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <Mail className="h-5 w-5 text-primary" />
              <h2 className="mt-3 font-semibold">Email</h2>
              <a href="mailto:admin@aifarmingcopilot.space" className="mt-1 block text-sm text-muted-foreground hover:text-foreground whitespace-pre-wrap">
                admin@aifarmingcopilot{"\n\n"}
              </a>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <Phone className="h-5 w-5 text-primary" />
              <h2 className="mt-3 font-semibold">Phone</h2>
              <a href="tel:+918279201101" className="mt-1 block text-sm text-muted-foreground hover:text-foreground">
                +91 82792 01101
              </a>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <MapPin className="h-5 w-5 text-primary" />
              <h2 className="mt-3 font-semibold">Office</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                AI Farming Copilot Technologies Pvt. Ltd.<br />
                Innovation Tower, Sector 62<br />
                Noida, Uttar Pradesh 201309, India
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <Clock className="h-5 w-5 text-primary" />
              <h2 className="mt-3 font-semibold">Business hours</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Monday – Friday: 9:00 AM – 7:00 PM IST<br />
                Saturday: 10:00 AM – 4:00 PM IST<br />
                Sunday: Closed (AI assistant is 24/7)
              </p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 rounded-3xl border border-border bg-card p-8 shadow-soft">
            <h2 className="font-display text-2xl font-bold">Send us a message</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">We read every one.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Anita Sharma" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" required type="email" placeholder="you@farm.com" />
              </div>
            </div>
            <div className="mt-4 grid gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required rows={6} placeholder="Tell us about your farm and what you'd like to achieve…" />
            </div>
            <Button type="submit" disabled={sending} className="mt-6 bg-gradient-primary text-primary-foreground shadow-glow">
              {sending ? "Opening email…" : (<><Send className="mr-2 h-4 w-4" /> Send message</>)}
            </Button>
          </form>
        </div>

        <div className="mx-auto mt-16 max-w-6xl px-4">
          <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
            <iframe
              title="AI Farming Copilot office location, Sector 62 Noida"
              src="https://www.google.com/maps?q=Sector+62+Noida+Uttar+Pradesh+201309&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
