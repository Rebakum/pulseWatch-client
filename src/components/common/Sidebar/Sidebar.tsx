'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Logo } from '@/components/common/Logo/Logo';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Overview', href: '/dashboard' },
  { label: 'Monitors', href: '/dashboard/monitors' },
];

interface SidebarProps {
  className?: string;
  onNavigate?: () => void;
}

const NavList = ({
  pathname,
  onNavigate,
}: {
  pathname: string | null;
  onNavigate?: () => void;
}) => (
  <ul className="space-y-1">
    {NAV_ITEMS.map((item) => {
      const isActive = pathname === item.href;

      return (
        <li key={item.href}>
          <Link
            href={item.href}
            onClick={onNavigate}
            aria-current={isActive ? 'page' : undefined}
            className={[
              'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
              isActive
                ? 'bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white',
            ].join(' ')}
          >
            {item.label}
          </Link>
        </li>
      );
    })}
  </ul>
);

const SidebarBrand = () => <Logo className="mb-6 rounded px-2" />;

const MenuIcon = ({ isOpen }: { isOpen: boolean }) =>
  isOpen ? (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );

/**
 * Dashboard navigation shell: fixed rail on desktop, toggleable drawer on
 * mobile. This is the only Client Component of the dashboard shell — the
 * layout itself stays a Server Component.
 */
export const Sidebar = ({ className, onNavigate }: SidebarProps) => {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNav = () => setIsNavOpen(false);

  return (
    <>
      <button
        type="button"
        aria-label={isNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isNavOpen}
        aria-controls="mobile-sidebar"
        onClick={() => setIsNavOpen((open) => !open)}
        className={[
          'fixed left-3 top-3 z-50 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-sm md:hidden',
          className ?? '',
        ].join(' ')}
      >
        <MenuIcon isOpen={isNavOpen} />
      </button>

      <aside
        className={[
          'fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-[var(--border)] bg-[var(--surface)] p-4 text-[var(--foreground)] md:flex',
          className ?? '',
        ].join(' ')}
      >
        <SidebarBrand />
        <nav aria-label="Dashboard">
          <NavList pathname={pathname} onNavigate={onNavigate} />
        </nav>
        <p className="mt-auto px-2 text-xs text-[var(--muted)]">
          Every Check. Every Pulse. Always Aware.
        </p>
      </aside>

      {isNavOpen ? (
        <div id="mobile-sidebar" className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeNav}
            className="absolute inset-0 cursor-default bg-slate-900/50"
          />
          <aside className="absolute inset-y-0 left-0 flex w-64 flex-col border-r border-[var(--border)] bg-[var(--surface)] p-4 text-[var(--foreground)]">
            <SidebarBrand />
            <nav aria-label="Dashboard (mobile)">
              <NavList pathname={pathname} onNavigate={closeNav} />
            </nav>
          </aside>
        </div>
      ) : null}
    </>
  );
};
