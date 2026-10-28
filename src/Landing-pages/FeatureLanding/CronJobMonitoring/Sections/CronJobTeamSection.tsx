import Container from '@/components/common/Container';
import { UserPlus, X } from 'lucide-react';
import Link from 'next/link';

function InviteMockup() {
  return (
    <div className="relative isolate flex min-h-[300px] w-full items-center justify-center p-4 md:min-h-[380px]">
      {/* Background ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-brand-blue)]/15 blur-3xl"
      />

      {/* Dimmed Background Dashboard Pane */}
      <div
        aria-hidden="true"
        className="absolute left-6 top-8 z-10 h-64 w-[360px] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] opacity-40 blur-[0.5px]"
      >
        <div className="flex h-full">
          <div className="w-12 space-y-2 border-r border-[var(--border)] p-2.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="block h-1.5 rounded bg-[var(--border)]" />
            ))}
          </div>
          <div className="flex-1 p-3">
            <span className="block h-2 w-16 rounded bg-[var(--border)]" />
            <div className="mt-4 space-y-2.5">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--color-brand-blue)]" />
                  <span className="h-1.5 w-24 rounded bg-[var(--border)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Invite Modal Foreground */}
      <div className="relative z-20 w-[270px] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl shadow-black/80">
        <div className="relative p-4 text-center border-b border-[var(--border)]">
          <UserPlus className="mx-auto h-5 w-5 text-[var(--color-brand-blue)]" aria-hidden="true" />
          <p className="mt-1.5 text-xs font-bold text-[var(--foreground)]">
            Invite <span className="text-[var(--color-brand-blue)]">team member</span>
          </p>
          <X
            className="absolute right-3.5 top-3.5 h-3.5 w-3.5 text-[var(--muted)] cursor-pointer"
            aria-hidden="true"
          />
        </div>

        <div className="space-y-3 bg-[var(--background)] p-4 text-left">
          <div>
            <p className="text-[10px] font-semibold text-[var(--foreground)]">E-mail</p>
            <p className="mt-1 text-[8px] leading-relaxed text-[var(--muted)]">
              User will receive an invitation e-mail that needs to be confirmed. If user does not
              have PulseWatch account, he will be invited to create one.
            </p>
            <div className="mt-2 rounded-md border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1.5 text-[10px] text-[var(--foreground)]">
              teammate@example.com
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-[var(--border)] pt-2.5">
            <p className="text-[10px] font-semibold text-[var(--foreground)]">Phone number</p>
            <span className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-[9px] font-medium text-[var(--foreground)]">
              + Add
            </span>
          </div>
        </div>

        <div className="flex gap-2 p-3 bg-[var(--surface)]">
          <button
            type="button"
            className="flex-1 rounded-lg border border-[var(--border)] bg-[var(--background)] py-1.5 text-[10px] font-medium text-[var(--foreground)]"
          >
            Cancel
          </button>
          <button
            type="button"
            className="flex-1 rounded-lg bg-brand-gradient py-1.5 text-[10px] font-semibold text-white shadow-lg"
          >
            Send invite
          </button>
        </div>
      </div>
    </div>
  );
}

export function CronJobTeamSection() {
  return (
    <section className="bg-[var(--background)] py-10 text-[var(--foreground)]">
      <Container>
        <div className="grid items-center overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] lg:grid-cols-2">
          {/* Left: Mockup UI */}
          <InviteMockup />

          {/* Right: Content Copy - Updated text from screenshot */}
          <div className="p-8 sm:p-10 lg:py-12 lg:pr-12">
            <h3 className="text-2xl font-bold leading-tight tracking-tight text-[var(--foreground)] sm:text-3xl">
              Add your team members
              <br />
              to keep them notified<span className="text-[var(--color-brand-blue)]">.</span>
            </h3>

            <p className="mt-5 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              You can invite all your team members to access your monitors, keep them notified and
              manage incidents. Choose from three levels of user access: read, write and
              notify-only.
            </p>

            <div className="mt-8">
              <Link href="/incident-management" className="outline-btn">
                Explore Incident management
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
