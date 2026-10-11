import { CTA } from './constants';
import ResponseChart from './ResponseChart';

const nav = ['Monitoring', 'Incidents', 'Status pages', 'Maintenance'];

/** Decorative blurred dashboard, tilted, faded background */
export default function DashboardBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 select-none overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_5%,black_35%,black_60%,transparent_95%)]"
    >
      <div className="absolute left-[-6%] top-[26%] h-[420px] w-[112%] -rotate-[5deg] rounded-2xl border border-[var(--border)] bg-[var(--surface)] opacity-50 blur-[1.5px]">
        <div className="flex h-full">
          {/* sidebar */}
          <div className="w-52 shrink-0 space-y-3 border-r border-[var(--border)] p-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-[var(--foreground)]">
              <i className="size-1.5 rounded-full bg-brand-blue" />
              {CTA.brand}
            </p>
            <ul className="mt-6 space-y-3 text-xs text-[var(--muted)]">
              {nav.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>

          {/* main */}
          <div className="flex-1 p-6">
            <div className="flex items-start justify-between">
              <div>
                <span className="rounded-md border border-[var(--border)] px-2 py-1 text-[10px] text-[var(--muted)]">
                  ‹ Monitoring
                </span>
                <div className="mt-4 flex items-center gap-3">
                  <span className="size-10 rounded-full bg-status-up/20 ring-1 ring-status-up/40" />
                  <div>
                    <p className="text-lg font-semibold text-[var(--foreground)]">example.com</p>
                    <p className="text-[10px] text-[var(--muted)]">Up for 12 days</p>
                  </div>
                </div>
              </div>
              <span className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--foreground)]">
                Last 30 days ⌄
              </span>
            </div>

            <p className="mt-6 text-sm font-medium text-[var(--foreground)]">Response time</p>
            <div className="mt-2 h-40">
              <ResponseChart />
            </div>
            <div className="mt-3 flex justify-between text-[10px] text-[var(--muted)]">
              <span>May 13, &apos;23</span>
              <span>May 20, &apos;23</span>
              <span>May 28, &apos;23</span>
              <span className="text-[var(--foreground)]">1,546.96 ms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
