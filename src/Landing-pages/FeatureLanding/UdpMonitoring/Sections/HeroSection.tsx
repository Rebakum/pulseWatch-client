import Container from '@/components/common/Container';
import type { HeroSectionData } from '@/types/landing';
import Link from 'next/link';
import HeroPreview from './HeroPreview';

interface HeroSectionProps {
  data: HeroSectionData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  const lines = data.title.split(/(?<=\.)\s+/);

  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-10 text-[var(--foreground)]">
      <div className="pointer-events-none absolute left-[62%] top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple/25 blur-[150px]" />
      <div className="pointer-events-none absolute left-[46%] top-[28%] h-72 w-72 rounded-full bg-brand-blue/20 blur-[130px]" />

      <Container>
        <div className="relative grid items-center gap-0 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] lg:gap-16">
          <div className="relative z-10">
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-5xl lg:text-[3rem] xl:text-[3.5rem]">
              {lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <span className="mt-1 block w-fit bg-brand-gradient bg-clip-text pb-1 text-transparent">
                {data.highlight}
              </span>
            </h1>

            <p className="mt-7 max-w-[32rem] text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              {data.description}
            </p>

            {data.cta ? (
              <Link
                href={data.cta.href}
                className="mt-10 inline-flex items-center justify-center rounded-full bg-brand-gradient px-8 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_36px_-12px_var(--color-brand-purple)] transition hover:brightness-110 active:scale-[0.97]"
              >
                {data.cta.label}
              </Link>
            ) : null}
          </div>

          <HeroPreview />
        </div>
      </Container>
    </section>
  );
}
