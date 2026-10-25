'use client';

import {
  AlertCircle,
  ArrowRight,
  Bell,
  Check,
  ChevronRight,
  Code,
  ExternalLink,
  FileText,
  Mail,
  Search,
  Server,
  ShieldCheck,
  Smartphone,
  Users,
  Wrench,
  Zap,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

const DURATION = 6000; // 6 seconds auto-cycle timer

const STEPS = [
  {
    id: 0,
    stepNumber: '01',
    title: 'Search the provider list.',
    description:
      "6,000+ providers, searchable by company or by product. Search for S3 and you'll get AWS.",
  },
  {
    id: 1,
    stepNumber: '02',
    title: 'Pick your alert contacts.',
    description: 'Use your existing alert contacts and integrations. No extra setup needed.',
  },
  {
    id: 2,
    stepNumber: '03',
    title: 'Select the parts you use.',
    description:
      'For instance, if you use Stripe for payments and webhooks, you can monitor those components without tracking the Stripe dashboard.',
  },
] as const;

export default function MonitoringFeatureShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

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
  }, [activeStep]);

  return (
    <div className="min-h-screen bg-[#080C14] text-gray-200 font-sans selection:bg-brand-blue selection:text-white py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
      <div className="max-w-6xl w-full space-y-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue-light text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-light animate-ping"></span>
              3rd Party Integrations
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              How Third party <br />
              monitoring works<span className="text-brand-blue-light">.</span>
            </h2>
          </div>
          <div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg">
              Add the services you want to monitor, choose the parts of each one you actually use,
              and get an alert when their status changes.
            </p>
          </div>
        </div>

        {/* 3 Step Card Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
                }}
                className={`group relative overflow-hidden cursor-pointer rounded-2xl border transition-all duration-300 p-6 flex flex-col justify-between text-left ${
                  isActive
                    ? 'border-brand-blue/80 bg-[#111726] shadow-xl shadow-brand-blue/10 ring-1 ring-brand-blue/30'
                    : 'border-gray-800/80 bg-[#0E1320]/70 hover:border-gray-700 hover:bg-[#111726]/50'
                }`}
              >
                <div>
                  {/* Top Card Badge & Status */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isActive
                          ? 'bg-brand-blue/20 text-brand-blue-light border border-brand-blue/30'
                          : 'bg-gray-800 text-gray-400'
                      }`}
                    >
                      STEP {step.stepNumber}
                    </span>
                    {isActive && (
                      <span className="text-[11px] font-medium text-brand-blue-light flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-brand-blue-light"></span>
                        Active
                      </span>
                    )}
                  </div>

                  <h3
                    className={`text-lg font-bold mb-2.5 transition-colors duration-200 ${
                      isActive ? 'text-brand-blue-light' : 'text-white group-hover:text-gray-200'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Active Progress Line Bar */}
                <div className="w-full bg-gray-800/80 h-1.5 rounded-full mt-6 overflow-hidden">
                  {isActive ? (
                    <div
                      className="bg-brand-blue-light h-full rounded-full transition-all duration-75 ease-linear shadow-[0_0_8px_rgba(74,159,224,0.8)]"
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
                {/* Brand Header */}
                <div className="flex items-center gap-2.5 px-2 pt-2">
                  <div className="w-3 h-3 rounded-full bg-brand-blue-light animate-pulse shadow-[0_0_10px_rgba(74,159,224,0.8)]"></div>
                  <span className="font-bold text-white text-base tracking-wide">UptimeRobot</span>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-1">
                  <SidebarItem icon={<Server size={16} />} label="Monitoring" />
                  <SidebarItem
                    icon={<ShieldCheck size={16} />}
                    label="Third party providers"
                    active={true}
                    badge="1"
                  />
                  <SidebarItem icon={<AlertCircle size={16} />} label="Incidents" />
                  <SidebarItem icon={<FileText size={16} />} label="Status pages" />
                  <SidebarItem icon={<Wrench size={16} />} label="Maintenance" />
                  <SidebarItem icon={<Users size={16} />} label="Team members" />
                  <SidebarItem icon={<Code size={16} />} label="Integrations & API" />
                </nav>
              </div>

              {/* Sidebar User Profile */}
              <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between px-2 text-xs text-gray-400">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center font-bold text-brand-blue-light text-xs">
                    K
                  </div>
                  <div>
                    <div className="truncate max-w-[100px] text-gray-200 font-semibold text-xs">
                      Kristian
                    </div>
                    <div className="text-[10px] text-gray-500">Admin</div>
                  </div>
                </div>
                <span className="text-gray-500 font-mono text-xs">v2.4</span>
              </div>
            </div>

            {/* Right Main Application Panel */}
            <div className="flex-1 bg-[#0F1422] p-5 sm:p-6 lg:p-8 flex flex-col">
              {/* Header & Steps Breadcrumb */}
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-800/80 pb-4">
                <div>
                  <span className="text-xs font-semibold text-gray-400 block mb-1 uppercase tracking-wider">
                    Add 3rd party services
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                    Add service<span className="text-brand-blue-light">.</span>
                  </h3>
                </div>

                {/* Interactive Multi-step Indicator */}
                <div className="flex items-center gap-3 text-xs bg-[#080B12] px-3.5 py-2 rounded-xl border border-gray-800">
                  <div
                    className={`flex items-center gap-2 ${activeStep === 0 ? 'text-brand-blue-light font-semibold' : 'text-gray-400'}`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                        activeStep === 0 ? 'bg-brand-blue text-white' : 'bg-gray-800 text-gray-400'
                      }`}
                    >
                      1
                    </span>
                    <span>Service provider</span>
                  </div>
                  <ChevronRight size={14} className="text-gray-600" />
                  <div
                    className={`flex items-center gap-2 ${activeStep >= 1 ? 'text-brand-blue-light font-semibold' : 'text-gray-400'}`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                        activeStep >= 1 ? 'bg-brand-blue text-white' : 'bg-gray-800 text-gray-400'
                      }`}
                    >
                      2
                    </span>
                    <span>Components & alerts</span>
                  </div>
                </div>
              </div>

              {/* Dynamic View Panels based on Active Step */}
              <div className="flex-1 relative">
                {/* STEP 1: PROVIDER SEARCH & GRID */}
                {activeStep === 0 && (
                  <div className="space-y-6">
                    <div className="bg-[#141A29] rounded-xl p-5 border border-gray-800">
                      <label className="text-xs font-semibold text-gray-400 block mb-2">
                        Find a provider • 6,000+ providers available
                      </label>
                      <div className="relative">
                        <Search
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                          size={18}
                        />
                        <input
                          type="text"
                          readOnly
                          value="Stripe"
                          className="w-full bg-[#0B0E17] border border-brand-blue/50 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none cursor-default shadow-inner"
                        />
                      </div>

                      <div className="mt-6">
                        <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase block mb-3">
                          Popular services
                        </span>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <ProviderCard
                            name="Stripe"
                            icon="S"
                            color="bg-indigo-600"
                            active={true}
                          />
                          <ProviderCard
                            name="Amazon Web Services"
                            icon="AWS"
                            color="bg-amber-600"
                          />
                          <ProviderCard name="GitHub" icon="GH" color="bg-gray-700" />
                          <ProviderCard name="Vercel" icon="▲" color="bg-black" />
                          <ProviderCard name="SendGrid" icon="SG" color="bg-blue-600" />
                          <ProviderCard name="Cloudflare" icon="CF" color="bg-orange-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: ALERT CONTACTS */}
                {activeStep === 1 && (
                  <div className="space-y-5">
                    <div className="bg-[#141A29] border border-gray-800 rounded-xl p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white text-sm">
                          S
                        </div>
                        <div>
                          <span className="font-semibold text-white text-sm block">Stripe</span>
                          <span className="text-[11px] text-gray-400">Selected Provider</span>
                        </div>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded bg-brand-blue/10 text-brand-blue-light border border-brand-blue/20 font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-light"></span>
                        Operational
                      </span>
                    </div>

                    <div className="bg-[#141A29] border border-gray-800 rounded-xl p-5 space-y-5">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                          Notification and alerts
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <AlertContactBox
                            icon={<Mail size={15} className="text-brand-blue-light" />}
                            title="Email"
                            subtitle="kristian@company.com"
                            status="No delay, no repeat"
                          />
                          <AlertContactBox
                            icon={<Smartphone size={15} className="text-brand-blue-light" />}
                            title="Push in app"
                            subtitle="iPhone 13"
                            status="No delay, no repeat"
                          />
                          <AlertContactBox
                            icon={<Zap size={15} className="text-brand-blue-light" />}
                            title="Slack Channel"
                            subtitle="#incidents-dev"
                            status="No delay, no repeat"
                          />
                          <AlertContactBox
                            icon={<Bell size={15} className="text-brand-blue-light" />}
                            title="Push in app"
                            subtitle="iPad Pro"
                            status="No delay, no repeat"
                          />
                        </div>
                      </div>

                      <div className="pt-3 border-t border-gray-800">
                        <span className="text-xs text-gray-400 block mb-2 font-medium">
                          Alert trigger preference
                        </span>
                        <div className="flex flex-wrap gap-4 text-xs text-gray-300">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="alert_when"
                              defaultChecked
                              className="accent-brand-blue"
                            />
                            <span>All incidents</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="alert_when" className="accent-brand-blue" />
                            <span>Only major incidents</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="alert_when" className="accent-brand-blue" />
                            <span>No incident notifications</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: GRANULAR COMPONENT SELECTOR */}
                {activeStep === 2 && (
                  <div className="space-y-4">
                    <div className="bg-[#141A29] border border-gray-800 rounded-xl p-5 space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          Components of the service to monitor
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-brand-blue-light font-medium">
                          <Check size={14} />
                          <span>Select All</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <ComponentCheckbox label="Stripe API" status="Operational" checked={true} />
                        <ComponentCheckbox
                          label="Dashboard & Webhooks"
                          status="Operational"
                          checked={true}
                        />
                        <ComponentCheckbox
                          label="Global payments"
                          status="Operational"
                          checked={true}
                        />
                        <ComponentCheckbox
                          label="Stripe core components"
                          status="Operational"
                          checked={true}
                        />
                        <ComponentCheckbox
                          label="Revenue and finance automation"
                          status="Operational"
                          checked={true}
                        />
                        <ComponentCheckbox
                          label="Acquiring & payment methods"
                          status="Operational"
                          checked={true}
                        />
                      </div>
                    </div>

                    <div className="pt-2 flex justify-start">
                      <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs px-5 py-2.5 rounded-lg transition-colors shadow-lg shadow-indigo-600/20">
                        Create 3rd party service
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-center pt-2">
          <button className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-brand-blue/80 bg-[#0E131F] text-white text-sm font-semibold hover:bg-brand-blue hover:text-white transition-all duration-300 shadow-lg shadow-brand-blue/10">
            <span>Start monitoring Third Party Services</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
  badge?: string;
}

function SidebarItem({ icon, label, active = false, badge }: SidebarItemProps) {
  return (
    <div
      className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium cursor-pointer transition-all ${
        active
          ? 'bg-brand-blue/15 text-brand-blue-light border border-brand-blue/20'
          : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-200'
      }`}
    >
      <div className="flex items-center gap-2.5">
        <span className={active ? 'text-brand-blue-light' : 'text-gray-500'}>{icon}</span>
        <span className="truncate">{label}</span>
      </div>
      {badge && (
        <span className="bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
          {badge}
        </span>
      )}
    </div>
  );
}

interface ProviderCardProps {
  name: string;
  icon: string;
  color: string;
  active?: boolean;
}

function ProviderCard({ name, icon, color, active = false }: ProviderCardProps) {
  return (
    <div
      className={`flex items-center justify-between p-3 rounded-lg border transition-all cursor-pointer ${
        active
          ? 'bg-[#1A2234] border-brand-blue/60 text-white shadow-md'
          : 'bg-[#0E131F]/80 border-gray-800 text-gray-400 hover:border-gray-700'
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-7 h-7 rounded ${color} flex items-center justify-center font-bold text-white text-xs`}
        >
          {icon}
        </div>
        <span className="text-xs font-medium">{name}</span>
      </div>
      <div
        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
          active ? 'border-brand-blue-light bg-brand-blue-light/20' : 'border-gray-700'
        }`}
      >
        {active && <div className="w-1.5 h-1.5 rounded-full bg-brand-blue-light" />}
      </div>
    </div>
  );
}

interface AlertContactBoxProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  status: string;
}

function AlertContactBox({ icon, title, subtitle, status }: AlertContactBoxProps) {
  return (
    <div className="p-3 bg-[#0E131F] border border-gray-800 rounded-lg flex items-start justify-between hover:border-gray-700 transition-colors">
      <div className="flex items-start gap-2.5">
        <div className="mt-0.5 p-1 bg-brand-blue/10 rounded border border-brand-blue/20">
          {icon}
        </div>
        <div>
          <div className="text-xs font-semibold text-gray-200">
            {title} • <span className="text-gray-400 font-normal">{subtitle}</span>
          </div>
          <div className="text-[11px] text-gray-500 mt-0.5">{status}</div>
        </div>
      </div>
      <ExternalLink size={12} className="text-gray-600 mt-1" />
    </div>
  );
}

interface ComponentCheckboxProps {
  label: string;
  status: string;
  checked: boolean;
}

function ComponentCheckbox({ label, status, checked }: ComponentCheckboxProps) {
  const [isSelected, setIsSelected] = useState(checked);

  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={() => setIsSelected((selected) => !selected)}
      className={`p-3 rounded-lg border cursor-pointer flex items-center justify-between transition-all ${
        isSelected
          ? 'bg-[#151D2F] border-brand-blue/50 text-white'
          : 'bg-[#0E131F] border-gray-800 text-gray-400 hover:border-gray-700'
      }`}
    >
      <div className="flex items-center gap-2.5">
        <div
          className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
            isSelected
              ? 'bg-brand-blue border-brand-blue text-white'
              : 'border-gray-600 bg-transparent'
          }`}
        >
          {isSelected && <Check size={12} strokeWidth={3} />}
        </div>
        <span className="text-xs font-medium">{label}</span>
      </div>
      <span className="text-[10px] px-2 py-0.5 rounded bg-brand-blue/10 text-brand-blue-light border border-brand-blue/20 font-medium">
        {status}
      </span>
    </button>
  );
}
