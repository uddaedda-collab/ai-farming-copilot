import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalMeta } from "@/components/site/legal-page";

export const Route = createFileRoute("/legal/cookies")({
  head: () => legalMeta("Cookie Policy", "How AI Farming Copilot uses cookies and similar technologies, and how you can control them.", "/legal/cookies"),
  component: () => (
    <LegalPage title="Cookie Policy" updated="June 10, 2026">
      <p>This Cookie Policy explains how AI Farming Copilot uses cookies and similar technologies on our websites and applications.</p>
      <h2>1. What Are Cookies?</h2>
      <p>Cookies are small text files stored on your device when you visit a website. They help the site remember information about your visit, such as language preference and login status.</p>
      <h2>2. Types of Cookies We Use</h2>
      <h3>Strictly necessary</h3>
      <p>Required for the Services to function (authentication, security, load balancing). These cannot be disabled.</p>
      <h3>Preference</h3>
      <p>Remember your settings such as theme (light/dark/system) and language.</p>
      <h3>Analytics</h3>
      <p>Help us understand aggregate usage so we can improve the Services. We use privacy-respecting analytics that do not identify individual users.</p>
      <h3>Marketing</h3>
      <p>Used (only with your consent in regions that require it) to measure the effectiveness of our campaigns.</p>
      <h2>3. Managing Cookies</h2>
      <p>You can manage cookies through your browser settings. Disabling certain cookies may affect the functionality of the Services.</p>
      <h2>4. Do Not Track</h2>
      <p>We honour browser-level "Global Privacy Control" signals where required by law.</p>
      <h2>5. Updates</h2>
      <p>We may update this Cookie Policy from time to time. The "Last updated" date above reflects the most recent revision.</p>
      <h2>6. Contact</h2>
      <p><a href="mailto:admin@aifarmingcopilot.space">admin@aifarmingcopilot.space</a></p>
    </LegalPage>
  ),
});
