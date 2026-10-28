import LogoMarquee from '../../HomePage/LogoMarquee/LogoMarquee';
import PortEasySetupSteps from './Sections/PortEasySetupSteps';
import PortMonitoringHero from './Sections/PortMonitoringHero';
import PortReliabilitySection from './Sections/PortReliabilitySection';
import StatusPagesSection from './Sections/PortStatusPagesSection';
import TeamMembersSection from './Sections/PortTeamMembersSection';

export default function PortMonitoringPage() {
  return (
    <div>
      <PortMonitoringHero />
      <LogoMarquee />
      <PortReliabilitySection />
      <PortEasySetupSteps />
      <StatusPagesSection />
      <TeamMembersSection />
    </div>
  );
}
