import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalMeta } from "@/components/site/legal-page";

export const Route = createFileRoute("/legal/ccpa")({
  head: () => legalMeta("CCPA Compliance", "Your rights as a California resident under the California Consumer Privacy Act.", "/legal/ccpa"),
  component: () => (
    <LegalPage title="CCPA Compliance" updated="June 10, 2026">
      <p>This notice applies to California residents and is provided in accordance with the California Consumer Privacy Act, as amended by the CPRA ("CCPA").</p>
      <h2>1. Categories of Information Collected</h2>
      <p>Identifiers, commercial information, internet activity, geolocation (approximate), and user content (crop photos, notes). See our <a href="/legal/privacy">Privacy Policy</a> for details.</p>
      <h2>2. Purposes</h2>
      <p>We use this information to provide and improve the Services, process payments, communicate with you, and comply with law.</p>
      <h2>3. Sale or Sharing</h2>
      <p>We do not sell personal information and do not share it for cross-context behavioural advertising.</p>
      <h2>4. Your CCPA Rights</h2>
      <ul>
        <li>Right to know what personal information we collect and how we use it.</li>
        <li>Right to delete personal information we have collected from you.</li>
        <li>Right to correct inaccurate personal information.</li>
        <li>Right to opt-out of sale or sharing (not applicable — we do neither).</li>
        <li>Right to limit use of sensitive personal information.</li>
        <li>Right to non-discrimination for exercising these rights.</li>
      </ul>
      <h2>5. How to Exercise</h2>
      <p>Email <a href="mailto:admin@aifarmingcopilot.space">admin@aifarmingcopilot.space</a>. We will verify your request and respond within 45 days.</p>
      <h2>6. Authorised Agents</h2>
      <p>You may designate an authorised agent to act on your behalf, subject to verification.</p>
    </LegalPage>
  ),
});
