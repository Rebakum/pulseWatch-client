import Container from '@/components/common/Container';
import ShaderButton from '@/components/shader-button/ShaderButton';

import DeveloperGradientText from '../DeveloperGradientText';

export default function DeveloperCta() {
  return (
    <section className="bg-[var(--background)] py-12 text-center text-[var(--foreground)] sm:py-16">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
          Your next release starts here
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl">
          Keep building. We’ll <DeveloperGradientText>watch uptime.</DeveloperGradientText>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
          Start with 50 free monitors and get a clearer signal from production.
        </p>
        <div className="mt-6 flex justify-center">
          <ShaderButton href="/register">Start monitoring for free</ShaderButton>
        </div>
      </Container>
    </section>
  );
}
