import SupportHero from './sections/SupportHero';
import SupportBenefits from './sections/SupportBenefits';
import SupportMonitoringFeatures from './sections/SupportMonitoringFeatures';
import SupportResponseTime from './sections/SupportResponseTime';
import SupportCustomerReviews from './sections/SupportCustomerReviews';
import SupportCustomerUpdates from './sections/SupportCustomerUpdates';
import SupportAlertChannels from './sections/SupportAlertChannels';
import SupportTestimonials from './sections/SupportTestimonials';
import SupportFaq from './sections/SupportFaq';
import SupportCta from './sections/SupportCta';
import LogoMarquee from '../../Home/LogoMarquee';

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
