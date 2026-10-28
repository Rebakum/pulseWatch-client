import { Users } from 'lucide-react';

const USER_LEVELS = ['Read', 'Write', 'Notify-only'] as const;
const ACTIVE_LEVEL = 'Write';

const BEHIND_ROWS = [0, 1, 2, 3, 4] as const;

/** CSS-only "invite team member" modal mock over a faded member list. */
export default function TeamInviteMock() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[color:var(--background)] p-5 shadow-2xl sm:p-7">
      <div className="absolute -left-12 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-brand-blue/20 blur-3xl" />

      <div className="space-y-2.5 opacity-40" aria-hidden="true">
        {BEHIND_ROWS.map((row) => (
          <div key={row} className="flex items-center gap-3 rounded-lg bg-[var(--surface)] px-3 py-2.5">
            <span className="h-4 w-4 rounded-full bg-[var(--border)]" />
            <span className="h-2 flex-1 rounded-full bg-[var(--border)]" />
            <span className="h-2 w-12 rounded-full bg-[var(--border)]" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-[17.5rem] rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-2xl">
          <div className="flex items-center gap-2 border-b border-[var(--border)] pb-2.5">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-blue/25">
              <Users className="h-3 w-3" />
            </span>
            <span className="text-[11px] font-bold">Invite team member</span>
          </div>

          <p className="mt-3 text-[9px] font-semibold text-[var(--muted)]">Email</p>
          <div className="mt-1 rounded-md border border-[var(--border)] bg-[color:var(--background)] px-2 py-1.5 text-[9px]">
            name@company.com
          </div>

          <p className="mt-2 text-[9px] leading-relaxed text-[var(--muted)]">
            Invitees get visibility of the monitors you share and can join incident channels.
          </p>

          <p className="mt-2.5 text-[9px] font-semibold text-[var(--muted)]">User level</p>
          <div className="mt-1 flex gap-1">
            {USER_LEVELS.map((level) => (
              <span
                key={level}
                className={`rounded-md px-1.5 py-1 text-[8px] font-semibold ${
                  level === ACTIVE_LEVEL
                    ? 'bg-brand-blue/20 text-[var(--foreground)]'
                    : 'border border-[var(--border)] text-[var(--muted)]'
                }`}
              >
                {level}
              </span>
            ))}
          </div>

          <div className="mt-3 flex justify-end gap-2">
            <span className="rounded-md px-2 py-1 text-[9px] font-semibold text-[var(--muted)]">
              CANCEL
            </span>
            <span className="rounded-md bg-brand-blue px-2.5 py-1 text-[9px] font-semibold text-white">
              INVITE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
