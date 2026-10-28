import Container from '@/components/common/Container';
import ShaderButton from '@/components/shader-button/ShaderButton';
import { Globe, Play } from 'lucide-react';
import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';

export default function SupportCta() {
  return (
    <section className="bg-[#f4f6f8] px-5 py-16 md:px-8 lg:px-10">
      <Container className="max-w-4xl text-center">
        <h2 className="text-[clamp(2.2rem,3vw,3.8rem)] font-black leading-[0.96] tracking-[-0.06em] text-slate-900">
          Get your <DeveloperGradientText>FREE</DeveloperGradientText> account now, 50 monitors
          included!
        </h2>

        <ShaderButton className="mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(18,121,193,0.35)]">
          Start monitoring in 30 seconds
        </ShaderButton>

        <p className="mt-4 text-sm text-slate-700">No credit card required!</p>

        <div className="mt-7 flex items-center justify-center gap-4">
          <button className="inline-flex items-center gap-2 rounded-xl bg-[#101827] px-5 py-3 text-sm font-semibold text-white shadow-lg">
            <Globe className="h-4 w-4" />
            Google Play
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl bg-[#101827] px-5 py-3 text-sm font-semibold text-white shadow-lg">
            <Play className="h-4 w-4" />
            App Store
          </button>
        </div>
      </Container>
    </section>
  );
}
