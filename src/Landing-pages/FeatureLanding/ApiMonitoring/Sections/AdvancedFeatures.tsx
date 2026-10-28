import Container from '@/components/common/Container';
import type { AdvancedFeaturesSectionData } from '@/types/landing';
import { Check } from 'lucide-react';
import Link from 'next/link';
import SegmentedTitle from './SegmentedTitle';

interface AdvancedFeaturesProps {
  data: AdvancedFeaturesSectionData;
}

export default function AdvancedFeatures({ data }: AdvancedFeaturesProps) {
  return (
    <section className="bg-[var(--background)] py-10 text-[var(--foreground)]">
      <Container>
        <SegmentedTitle
          segments={data.title}
          className="mx-auto max-w-2xl text-center text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl"
        />

        <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:gap-x-24">
          {data.items.map((item) => (
            <div key={item.title} className="flex gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" strokeWidth={2.5} />
              <div>
                <h3 className="text-base font-bold">{item.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href={data.cta.href} className="outline-btn">
            {data.cta.label}
          </Link>
        </div>
      </Container>
    </section>
  );
}
