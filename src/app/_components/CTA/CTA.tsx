import { Button } from '@/components/ui/Button/Button';

export const CTA = () => (
  <section className="bg-slate-950">
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Know the moment your service drops.
        </h2>
        <p className="mt-4 text-slate-300">
          Set up your first monitor in minutes. PulseWatch keeps checking and keeps you
          informed — so you can keep building.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/register" size="lg">
            Create your free account
          </Button>
          <Button href="/login" size="lg" variant="secondary">
            I already have an account
          </Button>
        </div>
      </div>
    </div>
  </section>
);
