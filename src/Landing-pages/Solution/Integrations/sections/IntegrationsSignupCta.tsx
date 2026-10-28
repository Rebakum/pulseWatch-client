import { Smartphone } from 'lucide-react';
import Link from 'next/link';

import Container from '@/components/common/Container';

export default function IntegrationsSignupCta() {
  return (
    <section className="bg-[var(--background)] py-14 text-center text-[var(--foreground)] sm:py-20">
      <Container>
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
          Get your FREE account now, 50 monitors included!
        </h2>
        <Link
          href="/register"
          className="mt-5 inline-flex min-h-11 items-center rounded-full bg-[image:var(--background-image-brand-gradient)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition-transform hover:-translate-y-0.5"
        >
          Start monitoring in 30 seconds
        </Link>
        <p className="mt-3 text-xs text-[var(--muted)]">No credit card required!</p>
        <p className="mt-6 text-xs text-[var(--muted)]">Available also on:</p>
        <div className="mt-3 flex flex-wrap justify-center gap-3">
          <Link
            href="/mobile-app"
            className="inline-flex min-h-10 items-center gap-2 rounded-md bg-black px-3 py-2 text-left text-white"
          >
            <span className="text-lg">▶</span>
            <span className="text-[9px] leading-tight">
              GET IT ON<strong className="block text-xs">Google Play</strong>
            </span>
          </Link>
          <Link
            href="/mobile-app"
            className="inline-flex min-h-10 items-center gap-2 rounded-md bg-black px-3 py-2 text-left text-white"
          >
            <Smartphone aria-hidden="true" className="size-5" />
            <span className="text-[9px] leading-tight">
              Download on the<strong className="block text-xs">App Store</strong>
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
