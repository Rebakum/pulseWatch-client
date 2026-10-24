import Container from '@/components/common/Container';
import type { SetupShowcaseSectionData } from '@/types/landing';
import Link from 'next/link';
import SetupMonitorMock from './SetupMonitorMock';
import SplitHeader from './SplitHeader';

interface SetupShowcaseProps {
  data: SetupShowcaseSectionData;
}

export default function SetupShowcase({ data }: SetupShowcaseProps) {
  return (
    <section className="bg-[var(--background)] py-10 text-[var(--foreground)]">
      <Container>
        <SplitHeader title={data.title} description={data.description} />

        <div className="mt-12">
          <SetupMonitorMock />
        </div>

        <div className="mt-10 flex justify-center">
          <Link href={data.cta.href} className="outline-btn">
            {data.cta.label}
          </Link>
        </div>
      </Container>
    </section>
  );
}
