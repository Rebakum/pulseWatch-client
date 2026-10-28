import Container from '@/components/common/Container';
import ShaderButton from '@/components/shader-button/ShaderButton';

import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';

export default function ApiCta() {
  return (
    <section className="bg-[var(--background)] py-14 text-center text-[var(--foreground)] sm:py-20">
      <Container>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Ready to <DeveloperGradientText>build?</DeveloperGradientText>
        </h2>
        <p className="mt-3 text-sm text-[var(--muted)]">
          Get your API key and start creating with the PulseWatch API in just a few clicks.
        </p>
        <div className="mt-6 flex justify-center">
          <ShaderButton href="/api-docs">Start building with API</ShaderButton>
        </div>
      </Container>
    </section>
  );
}
