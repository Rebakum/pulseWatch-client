import Container from '@/components/common/Container';
import { Star } from 'lucide-react';
import Link from 'next/link';
import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';
import { REVIEWS } from './BusinessOwnersData';

export default function BusinessOwnersReviews() {
  return (
    <section
      id="reviews"
      className="relative isolate overflow-hidden bg-[#101827] py-12 text-white sm:py-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 -z-10 size-[28rem] -translate-y-1/2 rounded-full bg-brand-blue/10 blur-3xl"
      />
      <Container>
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Why <DeveloperGradientText>business owners</DeveloperGradientText> use PulseWatch.
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map(({ name, title, text }) => (
            <article
              key={name}
              className="rounded-xl border border-white/10 bg-white/[0.05] p-5 transition-colors hover:bg-white/[0.08]"
            >
              <p className="text-[10px] text-slate-400">{name}</p>
              <div
                className="mt-2 flex items-center gap-0.5 text-amber-400"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} aria-hidden="true" className="size-3 fill-current" />
                ))}
              </div>
              <h3 className="mt-2 text-xs font-bold">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">{text}</p>
              <Link
                href="#reviews"
                className="mt-3 inline-block text-[10px] font-semibold text-brand-blue-light underline underline-offset-2"
              >
                Reviewed on
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
