import Container from '@/components/common/Container';
import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';
import { statusBenefitCards } from './SupportData';

export default function SupportBenefits() {
  return (
    <section className="bg-[#f4f6f8] py-16 sm:py-20">
      <Container>
        <h2 className="text-center text-[clamp(2.1rem,3vw,3.2rem)] font-black leading-[0.96] tracking-[-0.06em] text-slate-900">
          How can status page benefit <DeveloperGradientText>support?</DeveloperGradientText>
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {statusBenefitCards.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-[1.5rem] border border-slate-200 bg-[#f8fafb] p-5 shadow-[0_18px_25px_rgba(15,23,42,0.04)]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-[1.12rem] font-semibold text-slate-900">{title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
