import Image from 'next/image';

import Container from '@/components/common/Container';
import ShaderButton from '@/components/shader-button/ShaderButton';

export default function MarketersCta() {
  return (
    <section className="bg-[var(--background)] py-12 text-[var(--foreground)] sm:py-16">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Get your free account now, with 50 monitors included.
          </h2>
          <div className="mt-6">
            <ShaderButton href="/register">Start monitoring for free</ShaderButton>
          </div>
          <p className="mt-3 text-xs text-[var(--muted)]">No credit card required.</p>
          <div className="mt-8">
            <p className="text-xs font-medium text-[var(--muted)]">Available also on:</p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black px-3 py-1.5 text-left text-white transition hover:border-brand-blue"
              >
                <Image
                  src="/play-store.png"
                  alt=""
                  aria-hidden="true"
                  width={24}
                  height={24}
                  className="size-5 invert"
                />
                <span>
                  <span className="block text-[8px] leading-none text-slate-300">GET IT ON</span>
                  <span className="mt-1 block text-xs font-semibold leading-none">Google Play</span>
                </span>
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black px-3 py-1.5 text-left text-white transition hover:border-brand-blue"
              >
                <Image
                  src="/Apple_Store.webp"
                  alt=""
                  aria-hidden="true"
                  width={24}
                  height={24}
                  className="size-5 invert"
                />
                <span>
                  <span className="block text-[8px] leading-none text-slate-300">
                    Download on the
                  </span>
                  <span className="mt-1 block text-xs font-semibold leading-none">App Store</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
