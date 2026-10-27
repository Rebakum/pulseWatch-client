import Container from '@/components/common/Container';
import ShaderButton from '@/components/shader-button/ShaderButton';
import Image from 'next/image';

export default function BusinessOwnersCta() {
  return (
<section className="bg-[var(--background)] py-14 text-center text-[var(--foreground)] sm:py-20">
        <Container>
          <h2 className="text-lg font-bold tracking-tight sm:text-2xl">
            Get your FREE account now, 50 monitors included!
          </h2>
          <div className="mt-5 flex justify-center">
            <ShaderButton href="/register">Start monitoring in 30 seconds</ShaderButton>
          </div>
          <p className="mt-3 text-xs text-[var(--muted)]">No credit card required!</p>
          <p className="mt-6 text-xs text-[var(--muted)]">Available also on:</p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
              aria-label="Get it on Google Play"
              className="inline-flex h-10 items-center gap-2 rounded-md bg-black px-3 text-left text-white transition-transform hover:scale-[1.03]"
            >
              <Image src="/play-store.png" alt="" width={22} height={22} className="size-5 object-contain" />
              <span className="text-[9px] leading-tight">
                GET IT ON
                <strong className="block text-xs">Google Play</strong>
              </span>
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
              aria-label="Download on the App Store"
              className="inline-flex h-10 items-center gap-2 rounded-md bg-black px-3 text-left text-white transition-transform hover:scale-[1.03]"
            >
              <Image src="/apple.png" alt="" width={22} height={22} className="size-5 object-contain" />
              <span className="text-[9px] leading-tight">
                Download on the
                <strong className="block text-xs">App Store</strong>
              </span>
            </a>
          </div>
        </Container>
      </section>
  );
}
