import { Card } from './Card';
import { IntegrationsVisual } from './IntegrationsVisual';
import { MobileVisual } from './MobileVisual';

export default function FeatureCards() {
  return (
    <section className="dark bg-[var(--background)] py-16 text-[var(--foreground)]">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
        <Card
          visual={<IntegrationsVisual />}
          title="Integrations that keep your whole team in the loop."
          text="From chat to incident management, we integrate with 20+ services so your team never misses a critical update."
          href="/integrations"
        />
        <Card
          visual={<MobileVisual />}
          title="Monitor on the go. Stay in control anywhere."
          text="Get real-time alerts and manage all your monitors from anywhere. Check statuses, pause monitors, and resolve incidents instantly."
          href="/mobile"
        />
      </div>
    </section>
  );
}
