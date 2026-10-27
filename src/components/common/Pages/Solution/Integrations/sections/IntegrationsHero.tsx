import Container from '@/components/common/Container';

import DeveloperGradientText from '../../ForDevelopers/DeveloperGradientText';

export default function IntegrationsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#101827] py-20 text-white sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-0 -z-10 size-[34rem] rounded-full bg-brand-blue/15 blur-3xl"
      />
      <Container className="text-center">
        <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          Downtime happens.
          <br />
          <DeveloperGradientText>Get notified!</DeveloperGradientText>
        </h1>
        <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-slate-300 sm:text-2xl">
          Everyone knows it happens. But it’s important to realize before customers do.
        </p>
      </Container>
    </section>
  );
}
