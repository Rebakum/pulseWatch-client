import Link from 'next/link';
import { Logo } from '@/components/common/Logo/Logo';

// Fixed at build time: Cache Components forbids new Date() during prerender.
const COPYRIGHT_YEAR = 2026;

const FOOTER_LINKS = [
  { label: 'Sign in', href: '/login' },
  { label: 'Create account', href: '/register' },
  { label: 'Dashboard', href: '/dashboard' },
] as const;

export const Footer = () => (
  <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
      <div className="space-y-2">
        <Logo />
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Every Check. Every Pulse. Always Aware.
        </p>
      </div>

      <nav aria-label="Footer">
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>

    <div className="border-t border-slate-200 py-4 dark:border-slate-800">
      <p className="mx-auto w-full max-w-6xl px-4 text-xs text-slate-400 sm:px-6 dark:text-slate-500">
        © {COPYRIGHT_YEAR} PulseWatch. All rights reserved.
      </p>
    </div>
  </footer>
);
