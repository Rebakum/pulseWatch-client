import LogoMarquee from '../../HomePage/LogoMarquee/LogoMarquee';
import SupportAlertChannels from './sections/SupportAlertChannels';
import SupportBenefits from './sections/SupportBenefits';
import SupportCta from './sections/SupportCta';
import SupportCustomerReviews from './sections/SupportCustomerReviews';
import SupportCustomerUpdates from './sections/SupportCustomerUpdates';
import SupportFaq from './sections/SupportFaq';
import SupportHero from './sections/SupportHero';
import SupportMonitoringFeatures from './sections/SupportMonitoringFeatures';
import SupportResponseTime from './sections/SupportResponseTime';
import SupportTestimonials from './sections/SupportTestimonials';

export default function SupportPage() {
  return (
    <main aria-label="Support">
      <SupportHero />
      <LogoMarquee />
      <SupportBenefits />
      <SupportMonitoringFeatures />
      <SupportResponseTime />
      <SupportCustomerReviews />
      <SupportCustomerUpdates />
      <SupportAlertChannels />
      <SupportTestimonials />
      <SupportFaq />
      <SupportCta />
    </main>
  );
}
