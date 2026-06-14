import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalMeta } from "@/components/site/legal-page";

export const Route = createFileRoute("/legal/terms")({
  head: () => legalMeta("Terms & Conditions", "The terms governing your use of the AI Farming Copilot website, apps and services.", "/legal/terms"),
  component: () => (
    <LegalPage title="Terms & Conditions" updated="June 10, 2026">
      <p>These Terms & Conditions ("Terms") govern your access to and use of the websites, mobile applications, APIs, and services (the "Services") of AI Farming Copilot Technologies Pvt. Ltd. ("AI Farming Copilot"). By using the Services, you agree to these Terms.</p>
      <h2>1. Eligibility & Accounts</h2>
      <p>You must be at least 18 years old (or the age of majority in your jurisdiction) to create an account. You are responsible for maintaining the confidentiality of your credentials and for all activity under your account.</p>
      <h2>2. Subscriptions & Billing</h2>
      <p>Paid plans (Pro, Enterprise) are billed in advance on a recurring basis until cancelled. Fees are non-refundable except as set out in our <a href="/legal/refund">Refund Policy</a> or as required by applicable law.</p>
      <h2>3. Acceptable Use</h2>
      <p>You agree to use the Services lawfully and in accordance with our <a href="/legal/acceptable-use">Acceptable Use Policy</a>. We may suspend or terminate accounts that violate these rules.</p>
      <h2>4. AI Outputs & No Professional Advice</h2>
      <p>AI Farming Copilot produces probabilistic recommendations based on machine-learning models, satellite imagery, weather data, and your inputs. Recommendations are decision-support, not professional agronomic, veterinary, legal or financial advice. You remain responsible for decisions made on your farm.</p>
      <h2>5. User Content</h2>
      <p>You retain ownership of photographs, notes, and other content you submit ("User Content"). You grant us a worldwide, non-exclusive, royalty-free licence to host, process, and use User Content solely to provide and improve the Services. With consent, anonymised User Content may be used to train our models.</p>
      <h2>6. Intellectual Property</h2>
      <p>The Services, including software, models, designs, and trademarks, are owned by AI Farming Copilot or its licensors and are protected by intellectual-property laws. We grant you a limited, non-exclusive, non-transferable licence to use the Services for their intended purpose.</p>
      <h2>7. Third-Party Services</h2>
      <p>The Services may integrate with third-party services (e.g., payment processors, satellite data providers). We are not responsible for their content, policies, or practices.</p>
      <h2>8. Disclaimers</h2>
      <p>To the maximum extent permitted by law, the Services are provided "as is" and "as available", without warranties of any kind, whether express, implied, statutory, or otherwise.</p>
      <h2>9. Limitation of Liability</h2>
      <p>To the maximum extent permitted by law, AI Farming Copilot shall not be liable for indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenues, data, or goodwill. Our aggregate liability for any claim shall not exceed the fees paid by you in the 12 months preceding the claim.</p>
      <h2>10. Indemnity</h2>
      <p>You agree to indemnify and hold AI Farming Copilot harmless from claims arising out of your use of the Services or violation of these Terms.</p>
      <h2>11. Termination</h2>
      <p>You may terminate your account at any time. We may suspend or terminate your access if you breach these Terms or as required by law.</p>
      <h2>12. Governing Law & Disputes</h2>
      <p>These Terms are governed by the laws of India. Subject to mandatory consumer-protection laws of your residence, the courts of Noida, Uttar Pradesh shall have exclusive jurisdiction.</p>
      <h2>13. Changes</h2>
      <p>We may update these Terms from time to time. Continued use of the Services after changes become effective constitutes acceptance.</p>
      <h2>14. Contact</h2>
      <p><a href="mailto:admin@aifarmingcopilot.space">admin@aifarmingcopilot.space</a></p>
    </LegalPage>
  ),
});
