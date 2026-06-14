import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalMeta } from "@/components/site/legal-page";

export const Route = createFileRoute("/legal/disclaimer")({
  head: () => legalMeta("Disclaimer", "AI Farming Copilot recommendations are decision-support tools, not professional advice.", "/legal/disclaimer"),
  component: () => (
    <LegalPage title="Disclaimer" updated="June 10, 2026">
      <h2>1. General Information Only</h2>
      <p>The content, recommendations, and analyses provided by AI Farming Copilot ("Services") are for general informational and decision-support purposes only. They are not a substitute for professional agronomic, veterinary, legal, financial, or scientific advice.</p>
      <h2>2. AI Outputs</h2>
      <p>Outputs from our AI models are probabilistic. While we work hard to maintain high accuracy, no model is infallible. Confidence scores indicate model certainty but do not guarantee outcomes.</p>
      <h2>3. Weather & Satellite Data</h2>
      <p>Weather forecasts and satellite imagery are obtained from third-party sources. We do not warrant their accuracy, timeliness, or completeness.</p>
      <h2>4. No Liability for Decisions</h2>
      <p>You are solely responsible for decisions you make based on outputs from the Services, including the use of fertilisers, pesticides, water, and other inputs. Always consult a qualified expert for material decisions.</p>
      <h2>5. No Endorsement</h2>
      <p>Mention of any product, brand, or technique does not constitute endorsement. We are independent and do not receive commissions from input suppliers.</p>
      <h2>6. External Links</h2>
      <p>Our Services may contain links to third-party websites. We are not responsible for the content or practices of those sites.</p>
      <h2>7. Changes</h2>
      <p>This Disclaimer may change without notice. Continued use of the Services constitutes acceptance.</p>
    </LegalPage>
  ),
});
