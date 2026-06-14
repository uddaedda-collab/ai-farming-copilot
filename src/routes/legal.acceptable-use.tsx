import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalMeta } from "@/components/site/legal-page";

export const Route = createFileRoute("/legal/acceptable-use")({
  head: () => legalMeta("Acceptable Use Policy", "Rules for the lawful and respectful use of the AI Farming Copilot Services.", "/legal/acceptable-use"),
  component: () => (
    <LegalPage title="Acceptable Use Policy" updated="June 10, 2026">
      <p>This Acceptable Use Policy ("AUP") governs your use of the AI Farming Copilot Services. By using the Services, you agree to comply with this AUP.</p>
      <h2>1. Prohibited Activities</h2>
      <ul>
        <li>Violating any applicable law, regulation, or third-party right.</li>
        <li>Uploading content that is unlawful, defamatory, harassing, infringing, or harmful.</li>
        <li>Attempting to gain unauthorised access to the Services or related systems.</li>
        <li>Reverse engineering, decompiling, or scraping the Services or our models.</li>
        <li>Using the Services to develop a competing product or train competing models.</li>
        <li>Sending spam, malware, or denial-of-service traffic.</li>
        <li>Misrepresenting your identity, affiliation, or location.</li>
        <li>Using the Services in life-critical contexts without independent expert verification.</li>
      </ul>
      <h2>2. Fair Use</h2>
      <p>Plans with "unlimited" features are subject to reasonable use. Patterns indicative of automated or commercial-scale abuse may be rate-limited or suspended.</p>
      <h2>3. Reporting Abuse</h2>
      <p>Report violations to <a href="mailto:admin@aifarmingcopilot.space">admin@aifarmingcopilot.space</a>.</p>
      <h2>4. Enforcement</h2>
      <p>We may investigate, suspend, or terminate accounts that violate this AUP and may cooperate with law enforcement when required.</p>
    </LegalPage>
  ),
});
