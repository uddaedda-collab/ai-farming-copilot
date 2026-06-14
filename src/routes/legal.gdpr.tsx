import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalMeta } from "@/components/site/legal-page";

export const Route = createFileRoute("/legal/gdpr")({
  head: () => legalMeta("GDPR Compliance", "How AI Farming Copilot complies with the EU and UK General Data Protection Regulation.", "/legal/gdpr"),
  component: () => (
    <LegalPage title="GDPR Compliance" updated="June 10, 2026">
      <p>AI Farming Copilot is committed to compliance with the EU General Data Protection Regulation (Regulation (EU) 2016/679) and the UK GDPR.</p>
      <h2>1. Roles</h2>
      <p>We act as a data controller in respect of account and billing information, and as a data processor in respect of farm content you upload, where applicable.</p>
      <h2>2. Lawful Basis</h2>
      <p>We rely on contract performance, legitimate interest, consent, and legal obligation as the lawful bases for processing.</p>
      <h2>3. Your Rights</h2>
      <ul>
        <li>Right of access</li>
        <li>Right to rectification</li>
        <li>Right to erasure ("right to be forgotten")</li>
        <li>Right to restriction of processing</li>
        <li>Right to data portability</li>
        <li>Right to object</li>
        <li>Right not to be subject to solely automated decisions with legal effect</li>
        <li>Right to withdraw consent at any time</li>
        <li>Right to lodge a complaint with your local supervisory authority</li>
      </ul>
      <h2>4. International Transfers</h2>
      <p>Where personal data is transferred outside the EEA or UK, we rely on Standard Contractual Clauses (SCCs) and supplementary measures as required.</p>
      <h2>5. Data Protection Officer</h2>
      <p>Our Data Protection contact can be reached at <a href="mailto:admin@aifarmingcopilot.space">admin@aifarmingcopilot.space</a>.</p>
      <h2>6. Data Processing Agreement</h2>
      <p>Enterprise customers may request a Data Processing Agreement (DPA) at any time.</p>
    </LegalPage>
  ),
});
