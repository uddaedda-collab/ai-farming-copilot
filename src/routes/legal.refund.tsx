import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalMeta } from "@/components/site/legal-page";

export const Route = createFileRoute("/legal/refund")({
  head: () => legalMeta("Refund Policy", "When and how AI Farming Copilot issues refunds for paid subscriptions.", "/legal/refund"),
  component: () => (
    <LegalPage title="Refund Policy" updated="June 10, 2026">
      <h2>1. 14-Day Refund on New Pro Subscriptions</h2>
      <p>If you are not satisfied with a new Pro subscription, you may request a full refund within 14 days of the initial purchase. Refunds are processed to the original payment method within 7–10 business days.</p>
      <h2>2. Renewals</h2>
      <p>Subscription renewals are non-refundable. You may cancel at any time from your account dashboard; cancellations take effect at the end of the current billing period.</p>
      <h2>3. Enterprise Agreements</h2>
      <p>Refunds for Enterprise plans are governed by the terms of the relevant Order Form or Master Services Agreement.</p>
      <h2>4. Exceptions</h2>
      <p>Refunds will not be issued where: (a) you have materially breached our <a href="/legal/terms">Terms</a> or <a href="/legal/acceptable-use">Acceptable Use Policy</a>; (b) the request is made outside the eligibility window; or (c) we are prohibited from issuing the refund by applicable law.</p>
      <h2>5. Statutory Rights</h2>
      <p>Nothing in this policy limits any non-waivable statutory consumer rights in your jurisdiction.</p>
      <h2>6. How to Request</h2>
      <p>Email <a href="mailto:admin@aifarmingcopilot.space">admin@aifarmingcopilot.space</a> with your account email and order reference.</p>
    </LegalPage>
  ),
});
