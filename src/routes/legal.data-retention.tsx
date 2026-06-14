import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalMeta } from "@/components/site/legal-page";

export const Route = createFileRoute("/legal/data-retention")({
  head: () => legalMeta("Data Retention Policy", "How long AI Farming Copilot keeps your personal and farm data, and when it is deleted.", "/legal/data-retention"),
  component: () => (
    <LegalPage title="Data Retention Policy" updated="June 10, 2026">
      <p>We retain personal and farm data only for as long as is necessary to provide the Services, comply with legal obligations, resolve disputes, and enforce our agreements.</p>
      <h2>1. Retention Periods</h2>
      <ul>
        <li><strong>Account data:</strong> retained for the life of your account and up to 90 days after closure.</li>
        <li><strong>Crop scans & farm content:</strong> retained for up to 5 years to enable historical analysis; deletable on request at any time.</li>
        <li><strong>Billing records:</strong> retained for 7 years to comply with tax and accounting laws in India and other jurisdictions where required.</li>
        <li><strong>Support communications:</strong> retained for 3 years.</li>
        <li><strong>Backups:</strong> retained on a rolling 35-day cycle, after which they are securely overwritten.</li>
      </ul>
      <h2>2. Anonymised Data</h2>
      <p>We may retain anonymised, aggregated data indefinitely for product improvement and research, as anonymised data is no longer personal data.</p>
      <h2>3. Deletion Requests</h2>
      <p>You may request deletion of your account and associated personal data at any time by contacting <a href="mailto:admin@aifarmingcopilot.space">admin@aifarmingcopilot.space</a>. We will fulfil such requests within 30 days unless we are required to retain data by law.</p>
      <h2>4. Secure Disposal</h2>
      <p>Data slated for deletion is removed from primary systems immediately and from backups during the next retention cycle.</p>
    </LegalPage>
  ),
});
