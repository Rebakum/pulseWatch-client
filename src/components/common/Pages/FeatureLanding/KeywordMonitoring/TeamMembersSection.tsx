import { UserPlus, X } from 'lucide-react';
import Link from 'next/link';

/* Colors: only globals.css tokens
   --background / --surface / --border / --foreground / --muted
   brand-blue, brand-purple, status-up, status-warning
   Buttons: .outline-btn */

const monitorRows = [
  { dot: 'bg-status-warning', w: 'w-28' },
  { dot: 'bg-brand-blue', w: 'w-32' },
  { dot: 'bg-brand-blue', w: 'w-24' },
  { dot: 'bg-brand-blue', w: 'w-28' },
  { dot: 'bg-status-warning', w: 'w-32' },
];

function InviteMockup() {
  return (
    <div className="relative h-[300px] w-full md:h-[420px]">
      {/* brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[38%] top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            'radial-gradient(circle at center, color-mix(in srgb, var(--color-brand-blue) 38%, transparent) 0%, color-mix(in srgb, var(--color-brand-purple) 16%, transparent) 38%, transparent 68%)',
        }}
      />

      {/* dimmed dashboard behind */}
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-6 top-[88px] w-[420px] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] opacity-60 blur-[0.6px]"
      >
        <div className="flex h-full">
          <div className="w-14 space-y-3 border-r border-[var(--border)] p-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="block h-1.5 rounded bg-[var(--border)]" />
            ))}
          </div>
          <div className="flex-1 p-4">
            <p className="text-[10px] font-semibold text-[var(--foreground)]">Monitors</p>
            <div className="mt-3 flex gap-2">
              <span className="h-4 w-12 rounded bg-[var(--border)]" />
              <span className="h-4 w-16 rounded bg-[var(--border)]" />
              <span className="h-4 w-14 rounded bg-[var(--border)]" />
            </div>
            <div className="mt-4 space-y-3">
              {monitorRows.map((r, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${r.dot}`} />
                  <span className={`h-1.5 rounded bg-[var(--muted)]/50 ${r.w}`} />
                  <span className="ml-2 h-3 w-8 rounded bg-[var(--border)]" />
                  <span className="h-3 w-8 rounded bg-[var(--border)]" />
                  <span className="h-3 w-8 rounded bg-[var(--border)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* invite modal */}
      <div className="absolute left-[36%] top-[22%] w-[250px] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl shadow-black/30 dark:shadow-black/60 md:w-[260px]">
        <div className="relative px-4 pb-3 pt-4 text-center">
          <UserPlus className="mx-auto h-5 w-5 text-brand-blue" aria-hidden="true" />
          <p className="mt-1.5 text-[10px] font-bold text-[var(--foreground)]">
            Invite <span className="text-brand-blue">team member</span>
          </p>
          <X className="absolute right-3 top-3 h-3 w-3 text-[var(--muted)]" aria-hidden="true" />
        </div>

        <div className="space-y-3 border-y border-[var(--border)] bg-[var(--background)] px-4 py-3">
          <div>
            <p className="text-[8px] font-semibold text-[var(--foreground)]">E-mail</p>
            <p className="mt-1 text-[7px] leading-snug text-[var(--muted)]">
              User will receive an invitation e-mail that needs to be confirmed. If user does not
              have PulseWatch account, he will be invited to create one.
            </p>
            <div className="mt-2 rounded border border-[var(--border)] bg-[var(--surface)] px-2 py-1.5 text-[7px] text-[var(--foreground)]">
              teammate@example.com
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-[var(--border)] pt-3">
            <p className="text-[8px] font-semibold text-[var(--foreground)]">Phone number</p>
            <span className="rounded border border-[var(--border)] bg-[var(--surface)] px-5 py-1 text-[7px] text-[var(--foreground)]">
              Add
            </span>
          </div>
        </div>

        <div className="flex gap-2 px-4 py-3.5">
          <button
            type="button"
            className="flex-1 rounded border border-[var(--border)] bg-[var(--background)] py-1.5 text-[8px] font-medium text-[var(--foreground)]"
          >
            Cancel
          </button>
          <button
            type="button"
            className="flex-1 rounded bg-brand-gradient py-1.5 text-[8px] font-medium text-white"
          >
            Send invite
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Section — "Add your team members to keep them notified." ---------- */

export default function TeamMembersSection() {
  return (
    <section className="bg-[var(--background)] px-4 py-10 text-[var(--foreground)] md:px-6">
      <div className="mx-auto grid max-w-[1340px] items-center overflow-hidden rounded-[40px] border border-[var(--border)] md:rounded-[48px] lg:grid-cols-2">
        {/* left: mockup */}
        <InviteMockup />

        {/* right: copy */}
        <div className="px-8 pb-12 pt-4 md:px-12 lg:py-16 lg:pl-0">
          <h3 className="text-3xl font-semibold leading-[1.3] tracking-tight text-[var(--foreground)] md:text-[34px]">
            Add your team members
            <br />
            to keep them notified
            <span className="text-brand-blue">.</span>
          </h3>

          <p className="mt-6 max-w-[620px] text-lg leading-relaxed text-[var(--muted)]">
            You can invite all your team members to access your monitors, keep them notified and
            manage incidents. Choose from three levels of user access: read, write and notify-only.
          </p>

          <Link href="/incident-management" className="outline-btn mt-8">
            Explore incident management
          </Link>
        </div>
      </div>
    </section>
  );
}
