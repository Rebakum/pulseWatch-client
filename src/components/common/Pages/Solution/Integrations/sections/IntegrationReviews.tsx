import { Star } from 'lucide-react';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../../ForDevelopers/DeveloperGradientText';

const INTEGRATION_REVIEWS = [
  {
    name: 'Jen Cook',
    source: 'Trustpilot.com',
    title: 'The alerts come in to my phone as soon...',
    review:
      'The alerts come in to my phone as soon as I have a site outage. I don’t need to wait for anyone else to report issues with my site.',
  },
  {
    name: 'Sander',
    source: 'Trustpilot.com',
    title: 'Uptime Robot never let us down',
    review:
      'Uptime Robot never let us down. It’s super easy to create monitors and be alerted if something is not operating as it should.',
  },
  {
    name: 'Ashley H.',
    source: 'G2.com',
    title: 'Simple and impactful',
    review:
      'It’s very seamless to create any monitor we need and the integrations make it perfect for our team’s workflow.',
  },
] as const;

export default function IntegrationReviews() {
  return (
    <section className="relative isolate overflow-hidden bg-[#101827] py-12 text-white sm:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 -z-10 size-[28rem] -translate-y-1/2 rounded-full bg-brand-blue/10 blur-3xl"
      />
      <Container>
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Why users <DeveloperGradientText>trust</DeveloperGradientText> PulseWatch.
        </h2>
        <div className="mt-8 grid items-start gap-4 md:grid-cols-3">
          {INTEGRATION_REVIEWS.map(({ name, source, title, review }) => (
            <article key={name} className="rounded-xl border border-white/10 bg-white/[0.05] p-5">
              <p className="text-xs text-slate-400">{name}</p>
              <div className="mt-2 flex gap-0.5 text-orange-400" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} aria-hidden="true" className="size-3 fill-current" />
                ))}
              </div>
              <h3 className="mt-2 text-sm font-bold">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">{review}</p>
              <p className="mt-3 text-[10px] text-slate-400">
                Reviewed on <span className="text-brand-blue-light underline">{source}</span>
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
