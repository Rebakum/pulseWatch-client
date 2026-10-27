'use client';

import Container from '@/components/common/Container';
import { Logo } from '@/components/common/Logo/Logo';
import { NavDropdown } from '@/components/common/Navbar/NavDropdown';
import { ThemeToggle } from '@/components/common/ThemeToggle/ThemeToggle';
import ShaderButton from '@/components/shader-button/ShaderButton';
import { Badge } from '@/components/ui/Badge/Badge';
import { NAV_ITEMS } from '@/constants/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState, useSyncExternalStore } from 'react';

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
  'inline-flex h-10 items-center rounded-xl px-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-brand-blue/10 hover:text-brand-blue dark:hover:text-brand-blue-light';

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

    const desktopBreakpoint = window.matchMedia('(min-width: 1024px)');
    const handleBreakpointChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false);
        setOpenAccordionLabel(null);
      }
    };
    desktopBreakpoint.addEventListener('change', handleBreakpointChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      desktopBreakpoint.removeEventListener('change', handleBreakpointChange);
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
    'relative rounded-2xl border border-[var(--border)] text-[var(--foreground)] shadow-md backdrop-blur-md transition-colors',
    isScrolled ? 'bg-[color:var(--surface)]/95' : 'bg-[color:var(--surface)]/85',
  ].join(' ');

  return (
    <header className="sticky top-0 z-50 w-full pt-[5px] pb-0">
      <Container>
        <div className={barClasses}>
          <nav
            aria-label="Main"
            className="grid h-14 w-full grid-cols-[auto_1fr] items-center gap-3 px-4 sm:px-5 lg:h-16 lg:grid-cols-[1fr_auto_1fr]"
          >
            <div className="flex items-center justify-self-start">
              <Logo />
            </div>

            <ul className="relative hidden items-center justify-center gap-0.5 lg:flex">
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

            <div className="flex items-center justify-self-end gap-2">
              <ThemeToggle />

              {/* Desktop Login Link - 100% Fully Rounded */}
              <Link
                href={LOGIN_LINK.href}
                className="inline-flex h-9 items-center justify-center rounded-full border border-[var(--border)] px-4 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-brand-blue hover:text-brand-blue dark:hover:text-brand-blue-light max-lg:hidden"
              >
                {LOGIN_LINK.label}
              </Link>

              <ShaderButton href={REGISTER_LINK.href} className="h-9 px-4 text-sm max-lg:hidden">
                {REGISTER_LINK.label}
              </ShaderButton>

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
                      onClick={() => setOpenAccordionLabel(isAccordionOpen ? null : item.label)}
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
                                      ? 'pointer-events-none cursor-not-allowed text-[var(--muted)] opacity-60'
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

            <div className="mt-4 space-y-2 pt-4">
              {/* Mobile/Tab Login Link  */}
              <Link
                href={LOGIN_LINK.href}
                onClick={closeMobileMenu}
                className="flex w-full items-center justify-center rounded-full border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-brand-blue hover:text-brand-blue dark:hover:text-brand-blue-light"
              >
                {LOGIN_LINK.label}
              </Link>
              <ShaderButton href={REGISTER_LINK.href} className="w-full py-2.5 text-sm">
                {REGISTER_LINK.label}
              </ShaderButton>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
};
