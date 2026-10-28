import Container from '@/components/common/Container';
import ShaderButton from '@/components/shader-button/ShaderButton';
import { Check, ChevronRight } from 'lucide-react';
import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';
import { monitoredTiles } from './SupportData';

export default function SupportMonitoringFeatures() {
  return (
    <section className="bg-[#f4f6f8] pb-16 sm:pb-20">
      <Container>
        <h2 className="text-center text-[clamp(2.2rem,3vw,3.4rem)] font-black leading-[0.96] tracking-[-0.06em] text-slate-900">
          All you really care about{' '}
          <DeveloperGradientText>monitored in one place.</DeveloperGradientText>
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {monitoredTiles.map(({ icon: Icon, title, action }) => (
            <article
              key={title}
              className="rounded-[1.4rem] border border-slate-200 bg-[#f8fafb] p-6 shadow-[0_18px_25px_rgba(15,23,42,0.04)]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-[1.1rem] font-semibold text-slate-900">{title}</h3>
              <button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                {action}
                <ChevronRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>

        <div className="mt-14 border-t border-slate-300 pt-10">
          <h2 className="text-center text-[clamp(2rem,3vw,3rem)] font-black leading-[0.96] tracking-[-0.06em] text-slate-900">
            Explore more status page <DeveloperGradientText>features.</DeveloperGradientText>
          </h2>

          <div className="mx-auto mt-8 grid max-w-4xl gap-5 sm:grid-cols-2">
            {[
              'Change the look and density of your status page or use a dark theme.',
              'Create a CNAME DNS record to use your own domain name.',
              'Add your logo with a link to your homepage or any other website.',
              'Set password',
              'Modify the colors',
              'Adjust details',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl bg-transparent">
                <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-[0.95rem] leading-7 text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <ShaderButton className="px-6 py-3 text-sm font-semibold">
              Create FREE Status Page
            </ShaderButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
