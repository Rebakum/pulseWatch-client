import {
  ChevronDown,
  ChevronRight,
} from 'lucide-react';
import DeveloperGradientText from '../../ForDevelopers/DeveloperGradientText';
import Container from '@/components/common/Container';
import { faqItems } from '../SupportData';

export default function SupportFaq() {
  return (
<section className="bg-[#0f172a] px-5 pb-20 pt-2 text-white md:px-8 lg:px-10">
        <Container className="rounded-[1.5rem] border border-white/10 bg-[#101d31] p-6 shadow-[0_28px_60px_rgba(2,8,23,0.35)]">
          <h2 className="text-center text-[clamp(2.1rem,3vw,3.2rem)] font-black leading-[0.96] tracking-[-0.06em] text-white">
            Frequently asked <DeveloperGradientText>questions.</DeveloperGradientText>
          </h2>

          <div className="mt-8 space-y-4">
            {faqItems.map(({ question, answer, open }) => (
              <details
                key={question}
                open={open}
                className="group rounded-xl border border-white/10 bg-white/3 p-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-white">
                  <span>{question}</span>
                  <span className="text-brand-blue group-open:hidden">
                    <ChevronDown className="h-5 w-5" />
                  </span>
                  <span className="hidden text-brand-blue group-open:inline">
                    <ChevronRight className="h-5 w-5 rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 max-w-4xl text-base leading-7 text-slate-300">{answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
  );
}
