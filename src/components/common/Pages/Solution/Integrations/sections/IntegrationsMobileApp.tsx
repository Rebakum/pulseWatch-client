import { ArrowUpRight, Smartphone } from 'lucide-react';
import Link from 'next/link';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../../ForDevelopers/DeveloperGradientText';

export default function IntegrationsMobileApp() {
  return (
    <section className="bg-[var(--background)] py-12 text-[var(--foreground)] sm:py-16">
      <Container className="text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
          Stay <DeveloperGradientText>notified</DeveloperGradientText> on the go.
        </h2>
        <p className="mt-4 text-base text-[var(--muted)] sm:text-xl">
          Don&apos;t forget to download our mobile app for your Android or iOS.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/mobile-app"
            className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#101827] px-4 py-2 text-left text-white transition-transform hover:scale-[1.03]"
          >
            <span className="grid size-8 place-items-center rounded-md bg-white text-brand-blue">
              <ArrowUpRight aria-hidden="true" className="size-5" />
            </span>
            <span className="text-[10px] leading-tight">
              GET IT ON
              <strong className="block text-sm">Google Play</strong>
            </span>
          </Link>
          <Link
            href="/mobile-app"
            className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#101827] px-4 py-2 text-left text-white transition-transform hover:scale-[1.03]"
          >
            <span className="grid size-8 place-items-center rounded-md bg-white text-[#101827]">
              <Smartphone aria-hidden="true" className="size-5" />
            </span>
            <span className="text-[10px] leading-tight">
              Download on the
              <strong className="block text-sm">App Store</strong>
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
