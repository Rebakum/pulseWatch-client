import CtaSection from './Cta-section/CtaSection';
import DashboardPreview from './DashboardPreview/DashboardPreview';
import DowntimeFeatures from './DowntimeFeatures/DowntimeFeatures';
import { Enterprise } from './Enterprise/Enterprise';
import FaqSection from './FAQ/FaqSection';
import { GetStarted } from './GetStarted/GetStarted';
import Hero from './Hero/Hero';
import { Insights } from './Insights/Insights';
import FeatureCards from './IntegrationsMobileBanner/IntegrationsMobileBanner';
import LogoMarquee from './LogoMarquee/LogoMarquee';
import { StatusPages } from './StatusPages/StatusPages';
import { Testimonials } from './Testimonials/Testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <DashboardPreview />
      <DowntimeFeatures />
      <Enterprise />
      <Testimonials />
      <StatusPages />
      <GetStarted />
      <Insights />
      <FeatureCards />
      <FaqSection />
      <CtaSection />
    </>
  );
}
