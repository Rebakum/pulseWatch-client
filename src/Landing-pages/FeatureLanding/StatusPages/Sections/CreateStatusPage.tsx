'use client';
import { ArrowRight, Globe, Monitor, Palette } from 'lucide-react';
import { useState } from 'react';

/* =====================================================================
   How to Create a Status Page - Interactive 3-Step Component
   Theme: Modern Blue/Indigo (No green colors used)
===================================================================== */

const STEPS = [
  {
    id: 1,
    title: 'Create a status page',
    subtitle: 'Name it, pick a layout, and (optionally) add a custom domain.',
    icon: Globe,
  },
  {
    id: 2,
    title: 'Add your monitors',
    subtitle: 'Choose which monitors to display, one by one or in bulk.',
    icon: Monitor,
  },
  {
    id: 3,
    title: 'Customize design',
    subtitle: 'Update logo, pick a design template, and refine the font and colors.',
    icon: Palette,
  },
];

export default function CreateStatusPageHero() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="bg-[#0b0f17] px-4 py-16 text-slate-100 sm:px-8">
      <div className="mx-auto max-w-[1240px]">
        {/* Header Section */}
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-white">
              How to create a status page in <span className="text-blue-400">3 steps</span>?
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-slate-400">
            Level up your incident communication. Turn unfortunate incidents in your favour. Set up
            a status page.
          </p>
        </div>

        {/* 3 Step Interactive Cards */}
        <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {STEPS.map((step) => {
            const IconComponent = step.icon;
            const isActive = activeStep === step.id;
            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'border-blue-500 bg-slate-900/90 shadow-[0_0_25px_rgba(59,130,246,0.15)]'
                    : 'border-white/[0.08] bg-slate-900/40 hover:border-white/20'
                }`}
              >
                {/* Step indicator bar on top of card */}
                <div className="absolute left-0 right-0 top-0 h-1 bg-slate-800">
                  <div
                    className={`h-full bg-blue-500 transition-all duration-500 ${isActive ? 'w-full' : 'w-0'}`}
                  />
                </div>

                <div className="mb-3 flex items-center gap-3">
                  <div
                    className={`grid size-9 place-items-center rounded-xl ${isActive ? 'bg-blue-500/20 text-blue-400' : 'bg-white/5 text-slate-400'}`}
                  >
                    <IconComponent size={20} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    Step {step.id}
                  </span>
                </div>

                <h3 className="mb-2 text-lg font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{step.subtitle}</p>
              </div>
            );
          })}
        </div>

        {/* Progress Bar & Status Viewport Container */}
        <div className="relative rounded-3xl border border-white/[0.08] bg-slate-950/80 p-6 shadow-2xl sm:p-8">
          {/* Progress Bar Line */}
          <div className="mb-8">
            <div className="mb-2 flex justify-between text-xs font-semibold uppercase tracking-wider text-slate-400">
              <span>Progress: Step {activeStep} of 3</span>
              <span className="text-blue-400">{Math.round((activeStep / 3) * 100)}% Completed</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-500"
                style={{ width: `${(activeStep / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* Dynamic Content Based on Active Step */}
          <div className="min-h-[320px] transition-all duration-300">
            {activeStep === 1 && (
              <div className="space-y-6">
                <div className="border-b border-white/[0.06] pb-4">
                  <h4 className="text-xl font-bold text-white">Create status page settings</h4>
                  <p className="text-sm text-slate-400">
                    Configure your primary domain and branding titles.
                  </p>
                </div>
                <div className="max-w-2xl space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">
                      Name of the status page
                    </label>
                    <input
                      type="text"
                      defaultValue="ACME corp"
                      className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">
                      Custom domain
                    </label>
                    <input
                      type="text"
                      defaultValue="status.acme.com"
                      className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="space-y-6">
                <div className="border-b border-white/[0.06] pb-4">
                  <h4 className="text-xl font-bold text-white">Add your monitors</h4>
                  <p className="text-sm text-slate-400">
                    Select servers, APIs, or endpoints to track.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    'api.core-backend-v2',
                    'checkout.myshop.com',
                    'mail.companymail.net',
                    'monitor-01.internal',
                  ].map((monitor, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/60 p-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className="size-2.5 rounded-full bg-blue-400" />
                        <span className="text-sm font-medium text-white">{monitor}</span>
                      </div>
                      <span className="rounded-lg bg-blue-500/10 px-2.5 py-1 text-xs font-semibold text-blue-400">
                        Connected
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div className="space-y-6">
                <div className="border-b border-white/[0.06] pb-4">
                  <h4 className="text-xl font-bold text-white">Customize design & templates</h4>
                  <p className="text-sm text-slate-400">
                    Tailor color schemes, logos, and layout structures.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {['Wide Layout', 'Compact View', 'Dark Mode Default'].map((layout, idx) => (
                    <div
                      key={idx}
                      className="cursor-pointer rounded-xl border border-white/10 bg-slate-900 p-5 text-center transition-all hover:border-blue-500"
                    >
                      <div className="mb-3 grid h-20 place-items-center rounded-lg bg-slate-800 text-xs text-slate-400">
                        Preview {idx + 1}
                      </div>
                      <span className="text-sm font-medium text-white">{layout}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Action Navigation */}
          <div className="mt-8 flex items-center justify-between border-t border-white/[0.06] pt-6">
            <button
              onClick={() => setActiveStep((prev) => (prev > 1 ? prev - 1 : 1))}
              disabled={activeStep === 1}
              className="rounded-full border border-white/10 px-6 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/5 disabled:opacity-40"
            >
              Back
            </button>
            <button
              onClick={() => setActiveStep((prev) => (prev < 3 ? prev + 1 : 3))}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-500"
            >
              {activeStep === 3 ? 'Finish setup' : 'Next step'} <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-8 py-4 font-semibold text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all hover:bg-blue-500/20">
            Create status page now <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
