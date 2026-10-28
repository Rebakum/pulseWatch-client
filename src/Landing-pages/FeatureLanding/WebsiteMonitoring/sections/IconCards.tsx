import Container from '@/components/common/Container';
import type { IconCardIcon, IconCardsSectionData } from '@/types/landing';
import {
  Activity,
  Clock,
  Code,
  Globe,
  KeyRound,
  List,
  Monitor,
  Network,
  Puzzle,
  Radio,
  ShieldCheck,
  Target,
  TrendingUp,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SplitHeader from './SplitHeader';

const ICONS: Record<IconCardIcon, LucideIcon> = {
  website: Monitor,
  keyword: KeyRound,
  ping: Target,
  packetLoss: Network,
  port: Network,
  cron: Clock,
  dns: List,
  api: Code,
  udp: Radio,
  tcp: Activity,
  clock: Clock,
  network: Network,
  thirdParty: Puzzle,
  responseTime: TrendingUp,
  sslExpiry: ShieldCheck,
  domainExpiry: Globe,
};

interface IconCardsProps {
  data: IconCardsSectionData;
}

export default function IconCards({ data }: IconCardsProps) {
  return (
    <section className="bg-[var(--background)] py-10 text-[var(--foreground)]">
      <Container>
        <SplitHeader title={data.title} description={data.description} />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {data.items.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 transition-colors hover:border-brand-blue/50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand-blue/50 border-r-transparent text-brand-blue">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold">{item.label}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
