'use client';
import { Button } from '@/components/ui/Button/Button';
import {
  AlertCircle,
  ArrowRight,
  Check,
  FileText,
  Server,
  ShieldCheck,
  Users,
  Wrench,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

const DURATION = 6000; // 6 seconds auto-cycle timer

const STEPS = [
  {
    id: 0,
    stepNumber: '01',
    title: 'Create a Website or Ping monitor',
    description: 'Enter the URL or IP you want to monitor. Enable response time monitoring.',
  },
  {
    id: 1,
    stepNumber: '02',
    title: 'See details in app',
    description:
      'Details regarding your SSL certificate are displayed on the right hand side of all monitoring pages within the app.',
  },
  {
    id: 2,
    stepNumber: '03',
    title: 'Get alerts',
    description:
      'Get notified of any impending SSL certificate expirations or disruptions via your preferred method.',
  },
] as const;

export default function SSLMonitoringWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const currentProgress = Math.min((elapsedTime / DURATION) * 100, 100);
      setProgress(currentProgress);
    }, 50);
    const timeout = setTimeout(() => {
      setProgress(0);
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, DURATION);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [activeStep, cycleKey]);

  return (
    <section className="min-h-screen bg-[var(--background)] py-12 px-4 font-sans text-[var(--foreground)] selection:bg-brand-blue selection:text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl w-full space-y-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--foreground)] leading-tight">
              Set up SSL monitoring in <br />
              seconds<span className="text-brand-blue">.</span>
            </h2>
          </div>
          <div>
            <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed max-w-lg">
              Be the first who knows that your website is down. Reliable monitoring warns you before
              any significant troubles and saves you money.
            </p>
          </div>
        </div>

        {/* 3 Step Card Grid System */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                type="button"
                key={step.id}
                aria-pressed={isActive}
                onClick={() => {
                  setProgress(0);
                  setActiveStep(idx);
                  setCycleKey((key) => key + 1);
                }}
                className={`group relative flex w-full cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border p-6 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue ${
                  isActive
                    ? 'border-brand-blue/80 bg-[var(--surface)] shadow-xl ring-1 ring-brand-blue/30'
                    : 'border-[var(--border)] bg-[var(--surface)] hover:border-brand-blue/50 hover:bg-[var(--background)]'
                }`}
              >
                <div>
                  <h3
                    className={`text-lg font-bold mb-2.5 transition-colors duration-200 ${
                      isActive
                        ? 'text-brand-blue'
                        : 'text-[var(--foreground)] group-hover:text-brand-blue'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Active Progress Line Bar */}
                <div className="w-full bg-[var(--border)] h-1.5 rounded-full mt-6 overflow-hidden">
                  {isActive ? (
                    <div
                      className="bg-brand-gradient h-full rounded-full transition-all duration-75 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  ) : (
                    <div className="bg-transparent h-full w-0" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Preview Mockup Container */}
        <div className="rounded-2xl border border-gray-800/80 bg-[#0B0E17] overflow-hidden shadow-2xl relative">
          <div className="flex flex-col lg:flex-row min-h-[540px]">
            {/* Left Sidebar */}
            <div className="w-full lg:w-64 bg-[#080B12] border-b lg:border-b-0 lg:border-r border-gray-800/80 p-4 flex flex-col justify-between shrink-0">
              <div className="space-y-6">
                <div className="flex items-center gap-2.5 px-2 pt-2">
                  <div className="w-3 h-3 rounded-full bg-brand-gradient animate-pulse"></div>
                  <span className="bg-brand-gradient bg-clip-text text-transparent">
                    PulseWatch
                  </span>
                </div>

                <nav className="space-y-1">
                  <SidebarItem icon={<Server size={16} />} label="Monitoring" active={true} />
                  <SidebarItem icon={<ShieldCheck size={16} />} label="SSL Certificates" />
                  <SidebarItem icon={<AlertCircle size={16} />} label="Incidents" />
                  <SidebarItem icon={<FileText size={16} />} label="Status pages" />
                  <SidebarItem icon={<Wrench size={16} />} label="Maintenance" />
                  <SidebarItem icon={<Users size={16} />} label="Team members" />
                </nav>
              </div>

              <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between px-2 text-xs text-gray-400">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-brand-blue/15 border border-brand-blue/40 flex items-center justify-center font-bold text-brand-blue text-xs">
                    K
                  </div>
                  <div>
                    <div className="truncate max-w-[100px] text-gray-200 font-semibold text-xs">
                      Kristian
                    </div>
                    <div className="text-[10px] text-gray-500">Admin</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Main Application Panel */}
            <div className="flex-1 bg-[#0F1422] p-5 sm:p-6 lg:p-8 flex flex-col">
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-800/80 pb-4">
                <div>
                  <span className="text-xs font-semibold text-gray-400 block mb-1 uppercase tracking-wider">
                    Add single monitor
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                    Add monitor<span className="text-brand-blue">.</span>
                  </h3>
                </div>
              </div>

              {/* Dynamic View Panels based on Active Step */}
              <div className="flex-1 relative">
                {activeStep === 0 && (
                  <div className="space-y-6">
                    <div className="bg-[#141A29] rounded-xl p-5 border border-gray-800">
                      <label className="text-xs font-semibold text-gray-400 block mb-2">
                        Monitor type
                      </label>
                      <div className="p-3 bg-[#0B0E17] border border-brand-blue rounded-lg text-white text-sm flex items-center justify-between">
                        <span>HTTP(S) / Website monitoring</span>
                        <span className="text-xs text-brand-blue font-medium">
                          SSL tracking included
                        </span>
                      </div>

                      <div className="mt-4">
                        <label className="text-xs font-semibold text-gray-400 block mb-2">
                          URL to monitor
                        </label>
                        <input
                          type="text"
                          readOnly
                          value="https://myclient-shop.com"
                          className="w-full bg-[#0B0E17] border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="space-y-4">
                    <div className="bg-[#141A29] border border-gray-800 rounded-xl p-5">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                        SSL Certificate Overview in App
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-3 bg-[#0E131F] border border-gray-800 rounded-lg">
                          <span className="text-[11px] text-gray-400 block">
                            Domain exp. valid until
                          </span>
                          <span className="text-sm font-bold text-white">12/07/2027</span>
                        </div>
                        <div className="p-3 bg-[#0E131F] border border-gray-800 rounded-lg">
                          <span className="text-[11px] text-gray-400 block">
                            SSL exp. in 14 days
                          </span>
                          <span className="text-sm font-bold text-amber-400">12/07/2026</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="space-y-4">
                    <div className="bg-[#141A29] border border-gray-800 rounded-xl p-5 space-y-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                        Notification Channels & Expiry Alerts
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <AlertContactBox
                          title="Email"
                          subtitle="kristian@company.com"
                          status="Instant alert"
                        />
                        <AlertContactBox
                          title="SMS message"
                          subtitle="+421 915 222 345"
                          status="Active"
                        />
                        <AlertContactBox
                          title="Push app"
                          subtitle="iOS & Android"
                          status="Instant alert"
                        />
                        <AlertContactBox
                          title="Webhook"
                          subtitle="Custom endpoint"
                          status="Configured"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-center pt-2">
          <Button size="lg" type="button" className="gap-2.5">
            <span>Start monitoring in 30 seconds</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}

interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
}

function SidebarItem({ icon, label, active = false }: SidebarItemProps) {
  return (
    <div
      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium cursor-pointer transition-all ${
        active
          ? 'bg-brand-blue/15 text-brand-blue border border-brand-blue/20'
          : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-200'
      }`}
    >
      <span className={active ? 'text-brand-blue' : 'text-gray-500'}>{icon}</span>
      <span className="truncate">{label}</span>
    </div>
  );
}

interface AlertContactBoxProps {
  title: string;
  subtitle: string;
  status: string;
}

function AlertContactBox({ title, subtitle, status }: AlertContactBoxProps) {
  return (
    <div className="p-3 bg-[#0E131F] border border-gray-800 rounded-lg flex items-center justify-between">
      <div>
        <div className="text-xs font-semibold text-gray-200">
          {title} • <span className="text-gray-400 font-normal">{subtitle}</span>
        </div>
        <div className="text-[11px] text-brand-blue mt-0.5">{status}</div>
      </div>
      <Check size={14} className="text-brand-blue" />
    </div>
  );
}
