import LogoMarquee from '../../HomePage/LogoMarquee/LogoMarquee';
import CommunityIntegrations from './sections/CommunityIntegrations';
import IntegrationReviews from './sections/IntegrationReviews';
import IntegrationsHero from './sections/IntegrationsHero';
import IntegrationsMobileApp from './sections/IntegrationsMobileApp';
import IntegrationsShowcase from './sections/IntegrationsShowcase';
import IntegrationsSignupCta from './sections/IntegrationsSignupCta';
import PersonalNotificationChannels from './sections/PersonalNotificationChannels';
import ThirdPartyIntegrations from './sections/ThirdPartyIntegrations';

export default function IntegrationsPage() {
  return (
    <main aria-label="PulseWatch integrations">
      <IntegrationsHero />
      <LogoMarquee />
      <IntegrationsShowcase />
      <PersonalNotificationChannels />
      <ThirdPartyIntegrations />
      <IntegrationReviews />
      <IntegrationsSignupCta />
      <IntegrationsMobileApp />
      <CommunityIntegrations />
    </main>
  );
}
