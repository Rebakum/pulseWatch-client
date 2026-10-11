'use client';

import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState, useSyncExternalStore } from 'react';
import { Logo } from '@/components/common/Logo/Logo';
import { NavDropdown } from '@/components/common/Navbar/NavDropdown';
import { ThemeToggle } from '@/components/common/ThemeToggle/ThemeToggle';
import { Badge } from '@/components/ui/Badge/Badge';
import { Button } from '@/components/ui/Button/Button';
import { NAV_ITEMS } from '@/constants/navigation';

const SCROLL_THRESHOLD_PX = 8;

const LOGIN_LINK = { label: 'Log in', href: '/login' };
const REGISTER_LINK = { label: 'Get started free', href: '/register' };

const subscribeToScroll = (onStoreChange: () => void) => {
  window.addEventListener('scroll', onStoreChange, { passive: true });
  return () => window.removeEventListener('scroll', onStoreChange);
};

const getScrollSnapshot = () => window.scrollY > SCROLL_THRESHOLD_PX;

const getScrollServerSnapshot = () => false;

const PLAIN_TRIGGER_CLASSES =
  'inline-flex h-10 items-center rounded-xl px-3 text-sm font-medium text-[var(--muted)] transition-colors hover:bg-brand-blue/10 hover:text-brand-blue';

export const Navbar = () => {
  const [openDropdownLabel, setOpenDropdownLabel] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openAccordionLabel, setOpenAccordionLabel] = useState<string | null>(null);

  const pathname = usePathname();
  const isScrolled = useSyncExternalStore(
    subscribeToScroll,
    getScrollSnapshot,
    getScrollServerSnapshot,
  );

  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpenDropdownLabel(null);
    setIsMenuOpen(false);
    setOpenAccordionLabel(null);
  }

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setOpenAccordionLabel(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const handleDropdownOpenStateChange = useCallback((label: string, isOpen: boolean) => {
    setOpenDropdownLabel((currentLabel) => {
      if (isOpen) {
        return label;
      }
      return currentLabel === label ? null : currentLabel;
    });
  }, []);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setOpenAccordionLabel(null);
  };

  const barClasses = [
    'relative rounded-2xl border border-[var(--border)] shadow-md backdrop-blur-md transition-colors',
    isScrolled ? 'bg-[color:var(--surface)]/95' : 'bg-[color:var(--surface)]/70',
  ].join(' ');

  return (
    <header className="sticky top-0 z-50 w-full pt-3 sm:pt-4">
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-4">
        <div className={barClasses}>
          <nav
            aria-label="Main"
            className="flex h-14 w-full items-center justify-between gap-3 px-4 sm:px-5 lg:h-16"
          >
            <Logo />

            <ul className="relative hidden items-center gap-0.5 lg:flex">
              {NAV_ITEMS.map((item) =>
                item.groups ? (
                  <NavDropdown
                    key={item.label}
                    item={item}
                    isOpen={openDropdownLabel === item.label}
                    onOpenStateChange={handleDropdownOpenStateChange}
                  />
                ) : (
                  <li key={item.label}>
                    <Link href={item.href ?? '#'} className={PLAIN_TRIGGER_CLASSES}>
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button
                href={LOGIN_LINK.href}
                variant="ghost"
                size="sm"
                className="max-lg:hidden"
              >
                {LOGIN_LINK.label}
              </Button>
              <Button href={REGISTER_LINK.href} size="sm" className="max-lg:hidden">
                {REGISTER_LINK.label}
              </Button>

              <button
                type="button"
                onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[var(--muted)] transition-colors hover:bg-brand-blue/10 hover:text-brand-blue lg:hidden"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Menu className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </nav>
        </div>

        {isMenuOpen ? (
          <div
            id="mobile-menu"
            className="mt-2 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl border border-[var(--border)] bg-[color:var(--surface)]/95 p-4 shadow-xl backdrop-blur-md lg:hidden"
          >
            <ul className="space-y-1">
              {NAV_ITEMS.map((item) => {
                if (!item.groups) {
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href ?? '#'}
                        onClick={closeMobileMenu}
                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-brand-blue/10 hover:text-brand-blue"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                const isAccordionOpen = openAccordionLabel === item.label;
                const accordionId = `mobile-${item.label.toLowerCase()}`;

                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      aria-expanded={isAccordionOpen}
                      aria-controls={accordionId}
                      onClick={() =>
                        setOpenAccordionLabel(isAccordionOpen ? null : item.label)
                      }
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-brand-blue/10 hover:text-brand-blue"
                    >
                      {item.label}
                      <ChevronDown
                        aria-hidden="true"
                        className={[
                          'h-4 w-4 shrink-0 transition-transform',
                          isAccordionOpen ? 'rotate-180' : '',
                        ].join(' ')}
                      />
                    </button>

                    {isAccordionOpen ? (
                      <div
                        id={accordionId}
                        className="ml-3 space-y-4 border-l border-[var(--border)] py-2 pl-4"
                      >
                        {[...item.groups]
                          .sort((a, b) => a.column - b.column)
                          .map((group) => (
                            <div key={group.title ?? `column-${group.column}-links`}>
                              {group.title ? (
                                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                                  {group.icon ? (
                                    <span
                                      aria-hidden="true"
                                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-brand-blue/10 text-brand-blue"
                                    >
                                      <group.icon className="h-3 w-3" />
                                    </span>
                                  ) : null}
                                  {group.title}
                                </p>
                              ) : null}
                              <ul className={group.title ? 'mt-1.5 space-y-0.5' : 'space-y-0.5'}>
                              {group.links.map((link) => {
                                const linkClasses = [
                                  'flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm transition-colors',
                                  link.isComingSoon
                                    ? 'cursor-not-allowed text-[var(--muted)] opacity-60'
                                    : 'text-[var(--foreground)] hover:bg-brand-blue/10 hover:text-brand-blue',
                                ].join(' ');

                                const linkContent = (
                                  <>
                                    {link.icon ? (
                                      <link.icon
                                        aria-hidden="true"
                                        className="h-4 w-4 shrink-0 text-brand-blue"
                                      />
                                    ) : null}
                                    <span className="min-w-0 flex-1">{link.label}</span>
                                    {link.isComingSoon ? (
                                      <Badge
                                        variant="neutral"
                                        className="shrink-0 border border-[var(--border)]"
                                      >
                                        Soon
                                      </Badge>
                                    ) : null}
                                  </>
                                );

                                return (
                                  <li key={link.label}>
                                    {link.isComingSoon ? (
                                      <span aria-disabled="true" className={linkClasses}>
                                        {linkContent}
                                      </span>
                                    ) : (
                                      <Link
                                        href={link.href}
                                        onClick={closeMobileMenu}
                                        className={linkClasses}
                                      >
                                        {linkContent}
                                      </Link>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 space-y-2 border-t border-[var(--border)] pt-4">
              <Button href={LOGIN_LINK.href} variant="secondary" className="w-full">
                {LOGIN_LINK.label}
              </Button>
              <Button href={REGISTER_LINK.href} className="w-full">
                {REGISTER_LINK.label}
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
};
