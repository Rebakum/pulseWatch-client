import BusinessOwnersHero from './sections/BusinessOwnersHero';
import BusinessOwnersFeatures from './sections/BusinessOwnersFeatures';
import BusinessOwnersAlerts from './sections/BusinessOwnersAlerts';
import BusinessOwnersBenefits from './sections/BusinessOwnersBenefits';
import BusinessOwnersMonitors from './sections/BusinessOwnersMonitors';
import BusinessOwnersReviews from './sections/BusinessOwnersReviews';
import BusinessOwnersFaq from './sections/BusinessOwnersFaq';
import BusinessOwnersCta from './sections/BusinessOwnersCta';
import LogoMarquee from '../../Home/LogoMarquee';

export default function BusinessOwnersPage() {
  return (
    <main aria-label="Uptime monitoring for business owners">
      <BusinessOwnersHero />
      <LogoMarquee />
      <BusinessOwnersFeatures />
      <BusinessOwnersAlerts />
      <BusinessOwnersBenefits />
      <BusinessOwnersMonitors />
      <BusinessOwnersReviews />
      <BusinessOwnersFaq />
      <BusinessOwnersCta />
    </main>
  );
}
