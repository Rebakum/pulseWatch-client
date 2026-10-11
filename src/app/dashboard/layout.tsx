import type { ReactNode } from 'react';
import { Sidebar } from '@/components/common/Sidebar/Sidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Sidebar />

      <div className="flex min-h-screen flex-col md:pl-64">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-slate-200 bg-white/80 pl-16 pr-4 backdrop-blur md:pl-6 dark:border-slate-800 dark:bg-slate-900/80">
          <p className="text-sm font-medium text-slate-900 dark:text-white">
            PulseWatch Dashboard
          </p>

          <div className="ml-auto flex items-center gap-3">
            <span className="hidden text-xs text-slate-500 sm:inline dark:text-slate-400">
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
