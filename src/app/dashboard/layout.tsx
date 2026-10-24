import type { ReactNode } from 'react';
import { Sidebar } from '@/components/common/Sidebar/Sidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Sidebar />

      <div className="flex min-h-screen flex-col md:pl-64">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-[var(--border)] bg-[color:var(--surface)]/80 pl-16 pr-4 text-[var(--foreground)] backdrop-blur md:pl-6">
          <p className="text-sm font-medium">
            PulseWatch Dashboard
          </p>

          <div className="ml-auto flex items-center gap-3">
            <span className="hidden text-xs text-[var(--muted)] sm:inline">
              Preview build
            </span>
            {/* Decorative placeholder avatar — the account menu arrives with the auth task. */}
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700 dark:bg-brand-900/40 dark:text-brand-300"
            >
              PW
            </span>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
