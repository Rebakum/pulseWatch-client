import Container from '@/components/common/Container';
import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';
import { FAQS } from './BusinessOwnersData';

export default function BusinessOwnersFaq() {
  return (
    <section className="bg-[#101827] pb-12 text-white sm:pb-16">
      <Container>
        <div className="mx-auto max-w-4xl border-t border-white/15 pt-8">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Frequently asked <DeveloperGradientText>questions.</DeveloperGradientText>
          </h2>
          <div className="mt-6 divide-y divide-white/15">
            {FAQS.map(({ question, answer }, index) => (
              <details key={question} open={index === 0} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold">
                  {question}
                  <span className="text-lg leading-none text-brand-blue-light group-open:hidden">
                    +
                  </span>
                  <span className="hidden text-lg leading-none text-brand-blue-light group-open:inline">
                    −
                  </span>
                </summary>
                <p className="max-w-3xl pt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
