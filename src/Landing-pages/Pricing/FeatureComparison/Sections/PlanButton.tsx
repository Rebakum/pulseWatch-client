import ShaderButton from '@/components/shader-button/ShaderButton';
import { Plan } from './types';

export default function PlanButton({ plan }: { plan: Plan }) {
  if (plan.featured) {
    return <ShaderButton className="w-full px-3 py-2 text-xs sm:text-sm">{plan.cta}</ShaderButton>;
  }

  return (
    <button
      type="button"
      className="w-full rounded-full border border-[var(--color-brand-blue)]/60 px-3 py-2 text-xs font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--color-brand-blue)]/10 sm:text-sm"
    >
      {plan.cta}
    </button>
  );
}
