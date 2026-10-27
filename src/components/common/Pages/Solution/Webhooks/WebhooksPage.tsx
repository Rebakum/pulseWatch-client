import WebhookAutomation from './sections/WebhookAutomation';
import WebhookCta from './sections/WebhookCta';
import WebhookDelivery from './sections/WebhookDelivery';
import WebhookEventTypes from './sections/WebhookEventTypes';
import WebhookFaq from './sections/WebhookFaq';
import WebhookFiltering from './sections/WebhookFiltering';
import WebhookHero from './sections/WebhookHero';
import WebhookIntegrations from './sections/WebhookIntegrations';
import WebhookObservability from './sections/WebhookObservability';
import WebhookOverview from './sections/WebhookOverview';
import WebhookPayload from './sections/WebhookPayload';
import WebhookQuickstart from './sections/WebhookQuickstart';
import WebhookRetries from './sections/WebhookRetries';
import WebhookScale from './sections/WebhookScale';
import WebhookSecurity from './sections/WebhookSecurity';
import WebhookUseCases from './sections/WebhookUseCases';

export default function WebhooksPage() {
  return (
    <main aria-label="Webhooks">
      <WebhookHero />
      <WebhookOverview />
      <WebhookEventTypes />
      <WebhookPayload />
      <WebhookUseCases />
      <WebhookDelivery />
      <WebhookSecurity />
      <WebhookRetries />
      <WebhookFiltering />
      <WebhookIntegrations />
      <WebhookAutomation />
      <WebhookQuickstart />
      <WebhookObservability />
      <WebhookScale />
      <WebhookFaq />
      <WebhookCta />
    </main>
  );
}
