import Link from 'next/link';
import { Activity, Bell, ChevronDown, Globe2, LayoutDashboard, Plus, Search, Settings2 } from 'lucide-react';

const navigation = [
  { label: 'My monitors', active: true },
  { label: 'Status pages', active: false },
  { label: 'Alert contacts', active: false },
  { label: 'Integrations', active: false },
  { label: 'Incident history', active: false },
];

export default function AlertSetupSection() {
  return (
    <section className="bg-[#111821] px-4 py-14 text-white sm:px-6 sm:py-18 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-3 sm:grid-cols-[1fr_0.8fr] sm:items-end">
          <h2 className="max-w-md text-2xl font-bold tracking-tight sm:text-3xl">
            Set up alerts in seconds
            <span className="bg-brand-gradient bg-clip-text text-transparent">.</span>
          </h2>
          <p className="max-w-md text-xs leading-relaxed text-slate-400 sm:justify-self-end">
            Be the first who knows that your website is down. Reliable monitoring warns you before
            any significant troubles and saves you money.
          </p>
        </div>

        <div className="mt-7 overflow-hidden rounded-xl border border-white/10 bg-[#151d28] shadow-2xl shadow-black/25">
          <div className="grid min-h-[350px] md:grid-cols-[150px_minmax(0,1fr)]">
            <aside className="hidden border-r border-white/[0.07] bg-[#121a24] p-4 md:block">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-white">
                <span className="size-2 rounded-full bg-gradient-to-br from-sky-400 to-violet-500" />
                PulseWatch
              </div>
              <nav className="mt-6 space-y-1">
                {navigation.map((item, index) => {
                  const Icon = [Activity, LayoutDashboard, Bell, Settings2, Globe2][index];
                  return (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2 rounded-md px-2 py-2 text-[9px] ${
                        item.active
                          ? 'bg-sky-400/10 text-sky-200'
                          : 'text-slate-500'
                      }`}
                    >
                      <Icon aria-hidden="true" className="size-3" />
                      {item.label}
                    </div>
                  );
                })}
              </nav>
              <div className="mt-9 border-t border-white/[0.07] pt-3 text-[9px] text-slate-500">
                Workspace settings
              </div>
            </aside>

            <div className="min-w-0 p-4 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] pb-4">
                <div>
                  <p className="text-[9px] text-slate-500">My monitors / New monitor</p>
                  <h3 className="mt-1 text-sm font-semibold">Add single monitor.</h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 rounded-md border border-white/10 px-2.5 py-1.5 text-[9px] text-slate-300"
                  >
                    <Search className="size-3" /> Help center
                  </button>
                </div>
              </div>

              <div className="mt-4 grid gap-3 lg:grid-cols-[minmax(0,1fr)_170px]">
                <div className="space-y-3">
                  <div className="rounded-lg border border-white/[0.08] bg-[#101721] p-3">
                    <p className="text-[9px] text-slate-400">Monitor type</p>
                    <div className="mt-2 flex items-center justify-between rounded-md border border-white/[0.08] bg-[#1a2431] px-3 py-2">
                      <span className="flex items-center gap-2 text-[10px] font-medium">
                        <Globe2 className="size-3.5 text-sky-300" />
                        Website monitoring
                      </span>
                      <ChevronDown className="size-3 text-slate-500" />
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="block rounded-lg border border-white/[0.08] bg-[#101721] p-3">
                      <span className="text-[9px] text-slate-400">Friendly name</span>
                      <span className="mt-2 block rounded-md border border-white/[0.08] bg-[#1a2431] px-2.5 py-2 text-[10px] text-white/80">
                        https://your-website.com
                      </span>
                    </label>
                    <label className="block rounded-lg border border-white/[0.08] bg-[#101721] p-3">
                      <span className="text-[9px] text-slate-400">URL or IP address</span>
                      <span className="mt-2 block rounded-md border border-white/[0.08] bg-[#1a2431] px-2.5 py-2 text-[10px] text-white/80">
                        https://your-website.com
                      </span>
                    </label>
                  </div>

                  <div className="rounded-lg border border-white/[0.08] bg-[#101721] p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] text-slate-400">Monitoring interval</span>
                      <span className="text-[9px] text-sky-300">More options</span>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      {[1, 5, 15, 30].map((minute) => (
                        <span
                          key={minute}
                          className={`rounded-md border px-2.5 py-1.5 text-[9px] ${
                            minute === 5
                              ? 'border-sky-400/60 bg-sky-400/10 text-sky-200'
                              : 'border-white/[0.08] text-slate-400'
                          }`}
                        >
                          {minute} min
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <aside className="rounded-lg border border-white/[0.08] bg-[#101721] p-3">
                  <div className="flex items-center gap-2 text-[10px] font-semibold">
                    <Bell className="size-3.5 text-sky-300" />
                    Alert contacts
                  </div>
                  <p className="mt-2 text-[9px] leading-relaxed text-slate-500">
                    Choose who should receive notifications when this monitor has an issue.
                  </p>
                  <div className="mt-3 rounded-md border border-white/[0.08] px-2.5 py-2 text-[9px] text-slate-400">
                    Default alert contact
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-[9px] text-sky-300">
                    <Plus className="size-3" />
                    Add alert contact
                  </div>
                </aside>
              </div>

              <div className="mt-4 flex justify-end border-t border-white/[0.07] pt-4">
                <button
                  type="button"
                  className="rounded-md bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-[9px] font-semibold text-white"
                >
                  Create monitor
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/register"
            className="inline-flex min-h-10 items-center rounded-full border border-sky-400/70 px-5 text-xs font-semibold text-sky-200 transition-colors hover:bg-sky-400/10"
          >
            Start monitoring in 30 seconds
          </Link>
        </div>
      </div>
    </section>
  );
}