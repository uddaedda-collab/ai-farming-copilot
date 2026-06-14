import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalMeta } from "@/components/site/legal-page";

export const Route = createFileRoute("/legal/privacy")({
  head: () => legalMeta("Privacy Policy", "How AI Farming Copilot collects, uses, stores and protects your personal and farm data.", "/legal/privacy"),
  component: () => (
    <LegalPage title="Privacy Policy" updated="June 10, 2026">
      <p>This Privacy Policy explains how AI Farming Copilot Technologies Pvt. Ltd. ("AI Farming Copilot", "we", "us", or "our") collects, uses, discloses, and safeguards information when you use our website, mobile applications, and services (collectively, the "Services").</p>
      <h2>1. Information We Collect</h2>
      <p>We collect information you provide directly (name, email, phone, billing details, farm location, crop types, photographs and notes you upload). We also collect information automatically when you use our Services, including device identifiers, IP address, browser type, language, time zone, pages viewed, and approximate geolocation derived from your IP.</p>
      <h2>2. How We Use Information</h2>
      <ul>
        <li>To provide, maintain, and improve the Services, including AI-powered crop, pest, irrigation, weather, and yield analysis.</li>
        <li>To personalise recommendations based on your farm, region, and history.</li>
        <li>To process payments and prevent fraud.</li>
        <li>To communicate with you about updates, security alerts, and (with consent) marketing.</li>
        <li>To comply with applicable laws and respond to lawful requests.</li>
      </ul>
      <h2>3. Lawful Basis (EU/UK Users)</h2>
      <p>We process personal data on the basis of contract performance, legitimate interest, your consent, and legal obligation, as applicable under the GDPR and UK GDPR.</p>
      <h2>4. Sharing of Information</h2>
      <p>We do not sell your personal data. We share information only with: (a) service providers acting on our behalf under written confidentiality obligations (hosting, payment processors, analytics); (b) authorities when required by law; and (c) successors in the event of a corporate transaction, subject to equivalent protections.</p>
      <h2>5. International Transfers</h2>
      <p>Your data may be processed in countries other than your own. Where required, we rely on Standard Contractual Clauses or other approved mechanisms to ensure adequate protection.</p>
      <h2>6. Data Retention</h2>
      <p>We retain personal data only as long as necessary for the purposes set out in this Policy or as required by law. See our <a href="/legal/data-retention">Data Retention Policy</a> for specifics.</p>
      <h2>7. Your Rights</h2>
      <p>Depending on your jurisdiction, you may have the right to access, correct, delete, or port your data, restrict or object to processing, and withdraw consent. Contact <a href="mailto:admin@aifarmingcopilot.space">admin@aifarmingcopilot.space</a> to exercise these rights.</p>
      <h2>8. Security</h2>
      <p>We use encryption in transit and at rest, access controls, vendor due diligence, and regular security reviews. No method of transmission or storage is 100% secure; we work continuously to protect your information.</p>
      <h2>9. Children</h2>
      <p>Our Services are not directed to children under 13 (or the applicable age in your jurisdiction). See our <a href="/legal/children-privacy">Children's Privacy Policy</a>.</p>
      <h2>10. Changes</h2>
      <p>We may update this Policy from time to time. Material changes will be notified through the Services or by email.</p>
      <h2>11. Contact</h2>
      <p>AI Farming Copilot Technologies Pvt. Ltd., Innovation Tower, Sector 62, Noida, Uttar Pradesh 201309, India · <a href="mailto:admin@aifarmingcopilot.space">admin@aifarmingcopilot.space</a></p>
    </LegalPage>
  ),
});
