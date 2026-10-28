import LogoMarquee from '../../HomePage/LogoMarquee/LogoMarquee';
import ApiAutomation from './sections/ApiAutomation';
import ApiCommunityBuilds from './sections/ApiCommunityBuilds';
import ApiCommunitySpotlight from './sections/ApiCommunitySpotlight';
import ApiCta from './sections/ApiCta';
import ApiFaq from './sections/ApiFaq';
import ApiHero from './sections/ApiHero';
import ApiQuickstart from './sections/ApiQuickstart';
import ApiTechnicalHighlights from './sections/ApiTechnicalHighlights';

export default function ApiLandingPage() {
  return (
    <main aria-label="PulseWatch API">
      <ApiHero />
      <LogoMarquee />
      <ApiAutomation />
      <ApiTechnicalHighlights />
      <ApiCommunityBuilds />
      <ApiCommunitySpotlight />
      <ApiQuickstart />
      <ApiCta />
      <ApiFaq />
    </main>
  );
}
