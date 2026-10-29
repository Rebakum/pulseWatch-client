import LogoMarquee from '@/Pages/HomePage/LogoMarquee/LogoMarquee';
import StatusBadgesSection from './Sections/BadgesSection';
import CreateStatusPage from './Sections/CreateStatusPage';
import StatusPageArticles from './Sections/StatusPageArticles';
import StatusPageBusinessBenefits from './Sections/StatusPageBusinessBenefits';
import StatusPageCapabilities from './Sections/StatusPageCapabilities';
import StatusPageFaq from './Sections/StatusPageFaq';
import StatusPageFeaturesShowcase from './Sections/StatusPageFeaturesShowcase';
import StatusPageFinalCta from './Sections/StatusPageFinalCta';
import HostedStatusPageHero from './Sections/StatusPageHero';
import StatusPageMoreFeatures from './Sections/StatusPageMoreFeatures';
import StatusPagePopularUseCases from './Sections/StatusPagePopularUseCases';
import StatusPageTestimonials from './Sections/StatusPageTestimonials';

export default function StatusPagesPage() {
  return (
    <div>
      <HostedStatusPageHero />
      <LogoMarquee />
      <StatusPageBusinessBenefits />
      <CreateStatusPage />
      <StatusPageFeaturesShowcase />
      <StatusPageCapabilities />
      <StatusPageMoreFeatures />
      <StatusBadgesSection />
      <StatusPagePopularUseCases />
      <StatusPageTestimonials />
      <StatusPageFaq />
      <StatusPageArticles />
      <StatusPageFinalCta />
    </div>
  );
}
