import {
  Star,
} from 'lucide-react';
import DeveloperGradientText from '../../ForDevelopers/DeveloperGradientText';
import Container from '@/components/common/Container';
import { customerReviews } from '../SupportData';

export default function SupportTestimonials() {
  return (
<section className="bg-[#0f172a] px-5 pb-16 pt-2 text-white md:px-8 lg:px-10 lg:pb-20">
        <Container>
          <h2 className="text-center text-[clamp(2.1rem,3vw,3.2rem)] font-black leading-[0.96] tracking-[-0.06em] text-white">
            What users love about <DeveloperGradientText>UptimeRobot.</DeveloperGradientText>
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {customerReviews.map(({ name, text }) => (
              <article
                key={name}
                className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5 backdrop-blur-sm"
              >
                <div className="mb-4 flex items-center gap-1 text-[#ffd166]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={`${name}-${index}`} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-base leading-7 text-slate-200">{text}</p>
                <div className="mt-5 text-sm font-semibold text-slate-100">{name}</div>
              </article>
            ))}
          </div>
        </Container>
      </section>
  );
}
