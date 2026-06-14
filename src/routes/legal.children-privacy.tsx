import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalMeta } from "@/components/site/legal-page";

export const Route = createFileRoute("/legal/children-privacy")({
  head: () => legalMeta("Children's Privacy Policy", "AI Farming Copilot does not knowingly collect personal information from children under 13.", "/legal/children-privacy"),
  component: () => (
    <LegalPage title="Children's Privacy Policy" updated="June 10, 2026">
      <p>AI Farming Copilot is intended for adults. Our Services are not directed to children under the age of 13 (or the equivalent minimum age in the relevant jurisdiction, such as 16 in parts of the EU).</p>
      <h2>1. No Knowing Collection</h2>
      <p>We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can delete it.</p>
      <h2>2. Parental Rights (COPPA)</h2>
      <p>If we learn that we have collected personal information from a child under 13 without verifiable parental consent, we will delete it as soon as reasonably possible. Parents may contact us at <a href="mailto:admin@aifarmingcopilot.space">admin@aifarmingcopilot.space</a> to review, request deletion, or refuse further collection of their child's information.</p>
      <h2>3. Educational Use</h2>
      <p>Where the Services are used in educational contexts that include minors, schools and parents are responsible for obtaining required consents.</p>
    </LegalPage>
  ),
});
