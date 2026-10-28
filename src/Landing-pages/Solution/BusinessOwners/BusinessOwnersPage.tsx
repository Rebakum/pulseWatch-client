import LogoMarquee from '../../HomePage/LogoMarquee/LogoMarquee';
import BusinessOwnersAlerts from './sections/BusinessOwnersAlerts';
import BusinessOwnersBenefits from './sections/BusinessOwnersBenefits';
import BusinessOwnersCta from './sections/BusinessOwnersCta';
import BusinessOwnersFaq from './sections/BusinessOwnersFaq';
import BusinessOwnersFeatures from './sections/BusinessOwnersFeatures';
import BusinessOwnersHero from './sections/BusinessOwnersHero';
import BusinessOwnersMonitors from './sections/BusinessOwnersMonitors';
import BusinessOwnersReviews from './sections/BusinessOwnersReviews';

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
