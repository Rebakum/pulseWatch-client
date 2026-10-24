import {
  Activity,
  Check,
  ChevronDown,
  FileText,
  MessageCircle,
  Plug,
  Plus,
  Siren,
  Trash2,
  Users,
  Wrench,
} from 'lucide-react';

const METHODS = ['HEAD', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'] as const;
const ACTIVE_METHOD = 'GET';

const NAV_ITEMS = [
  { label: 'Monitoring', Icon: Activity, active: true },
  { label: 'Incidents', Icon: Siren, active: false },
  { label: 'Status pages', Icon: FileText, active: false },
  { label: 'Maintenance', Icon: Wrench, active: false },
  { label: 'Team members', Icon: Users, active: false },
  { label: 'Integrations & API', Icon: Plug, active: false },
] as const;

/**
 * CSS-only recreation of the create-monitor screen (stands in for a product
 * screenshot — no image asset required).
 */
export default function SetupMonitorMock() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl">
      <div className="grid lg:grid-cols-[11rem_1fr_11rem]">
        <aside className="hidden border-r border-[var(--border)] bg-[color:var(--background)] p-4 sm:block">
          <div className="flex items-center gap-2">
            <span className="grid h-6 w-6 place-items-center rounded-md bg-brand-gradient text-[10px] font-bold text-white">
              P
            </span>
            <span className="text-xs font-bold tracking-tight">PulseWatch</span>
          </div>

          <nav className="mt-5 space-y-1">
            {NAV_ITEMS.map(({ label, Icon, active }) => (
              <span
                key={label}
                className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] ${
                  active
                    ? 'bg-[var(--color-status-up)]/10 font-semibold text-[var(--color-status-up)]'
                    : 'text-[var(--muted)]'
                }`}
              >
                <Icon className="h-3.5 w-3.5 shrink-0" />
                {label}
              </span>
            ))}
          </nav>

          <div className="mt-8 flex items-center gap-2 border-t border-[var(--border)] pt-3">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-blue/30 text-[10px] font-bold">
              K
            </span>
            <span className="text-[11px] font-semibold">Kristián</span>
            <ChevronDown className="ml-auto h-3 w-3 text-[var(--muted)]" />
          </div>
        </aside>

        <div className="p-5 sm:p-6">
          <h3 className="text-sm font-bold">HTTP method</h3>
          <p className="mt-1 text-[10px] leading-relaxed text-[var(--muted)]">
            {`We're using ${ACTIVE_METHOD} as the easiest default — pick the method this monitor sends.`}
          </p>

          <div className="mt-3 flex flex-wrap gap-1 rounded-lg border border-[var(--border)] bg-[color:var(--background)] p-1">
            {METHODS.map((method) => (
              <span
                key={method}
                className={`rounded-md px-2.5 py-1 text-[10px] ${
                  method === ACTIVE_METHOD
                    ? 'bg-[var(--surface)] font-bold text-[var(--foreground)] shadow'
                    : 'font-semibold text-[var(--muted)]'
                }`}
              >
                {method}
              </span>
            ))}
          </div>

          <p className="mt-4 text-[11px] font-semibold">Request body</p>
          <div className="mt-1.5 rounded-md border border-[var(--border)] bg-[color:var(--background)] px-3 py-6 text-[10px] text-[var(--muted)]">
            Enter request body…
          </div>

          <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold">
            <span className="grid h-3.5 w-3.5 shrink-0 place-items-center rounded-[4px] bg-[var(--color-status-up)]">
              <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
            </span>
            Send as JSON (application/json)
          </div>
          <p className="mt-1 text-[9px] leading-relaxed text-[var(--muted)]">
            Data will be sent as a standard POST (application/x-www-form-urlencoded) unless you check
            the JSON option.
          </p>

          <p className="mt-4 text-[11px] font-semibold">Request headers</p>
          <div className="mt-1.5 flex gap-2">
            <div className="h-7 flex-1 rounded-md border border-[var(--border)] bg-[color:var(--background)] px-2 text-[10px] leading-[1.6rem] text-[var(--muted)]">
              X-Header/Value
            </div>
            <div className="h-7 flex-1 rounded-md border border-[var(--border)] bg-[color:var(--background)] px-2 text-[10px] leading-[1.6rem] text-[var(--muted)]">
              Value
            </div>
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-[var(--color-status-down)]/40 text-[var(--color-status-down)]">
              <Trash2 className="h-3.5 w-3.5" />
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-[11px] font-semibold">Meta fields</p>
            <span className="text-[10px] text-[var(--muted)]">Clear</span>
          </div>
          <p className="text-[9px] text-[var(--muted)]">
            Optional, key:value pairs for grouping, filtering and masking alerts.
          </p>
          <div className="mt-1.5 flex gap-2">
            <div className="h-7 flex-1 rounded-md border border-[var(--border)] bg-[color:var(--background)] px-2 text-[10px] leading-[1.6rem] text-[var(--muted)]">
              Meta key
            </div>
            <div className="h-7 flex-1 rounded-md border border-[var(--border)] bg-[color:var(--background)] px-2 text-[10px] leading-[1.6rem] text-[var(--muted)]">
              Value
            </div>
          </div>
          <div className="mt-2 flex items-center gap-1 text-[10px] font-semibold">
            <Plus className="h-3 w-3" />
            Add meta field
          </div>

          <button
            type="button"
            className="mt-5 rounded-md bg-brand-blue px-4 py-2 text-[11px] font-semibold text-white"
          >
            Create monitor
          </button>
        </div>

        <aside className="hidden border-l border-[var(--border)] p-4 lg:block">
          <p className="text-[11px] font-bold text-brand-blue">Monitor details</p>
          <p className="mt-3 text-[11px] text-[var(--muted)]">Integrations &amp; Teams</p>
          <p className="mt-2 text-[11px] text-[var(--muted)]">Maintenance info</p>
        </aside>
      </div>

      <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] bg-[color:var(--background)] shadow-lg">
        <MessageCircle className="h-4 w-4 text-[var(--muted)]" />
      </span>
    </div>
  );
}
