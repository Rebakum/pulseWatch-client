'use client';

import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from 'react';
import { Badge } from '@/components/ui/Badge/Badge';
import type { NavGroup, NavItem, NavLink } from '@/constants/navigation';

const DROPDOWN_CLOSE_DELAY_MS = 150;
const VIEWPORT_GUTTER_PX = 16;

const PANEL_WIDTH_BY_LABEL: Record<string, string> = {
  Features: 'w-[880px]',
  Solutions: 'w-[620px]',
  Resources: 'w-[860px]',
};

const DEFAULT_WIDTH_BY_COLUMNS: Record<2 | 3, string> = {
  2: 'w-[620px]',
  3: 'w-[880px]',
};

type PanelAlign = 'left' | 'center';

interface NavDropdownProps {
  item: NavItem;
  isOpen: boolean;
  onOpenStateChange: (label: string, isOpen: boolean) => void;
}

interface NavDropdownLinkProps {
  link: NavLink;
  onClose: () => void;
}

interface NavGroupBlockProps {
  group: NavGroup;
  onClose: () => void;
}

const NavDropdownLink = ({ link, onClose }: NavDropdownLinkProps) => {
  const rowClasses = [
    'flex w-full items-center justify-between gap-3 whitespace-nowrap rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors',
    link.isComingSoon
      ? 'pointer-events-none cursor-not-allowed text-[var(--muted)] opacity-60'
      : 'text-[var(--foreground)] hover:bg-brand-blue/10 hover:text-brand-blue dark:hover:text-[color:color-mix(in_oklab,var(--color-brand-blue)_75%,white)]',
  ].join(' ');

  const labelContent = (
    <span className="flex items-center">
      {link.icon ? (
        <link.icon aria-hidden="true" className="mr-3 h-5 w-5 shrink-0 text-brand-blue" />
      ) : null}
      <span>{link.label}</span>
    </span>
  );

  if (link.isComingSoon) {
    return (
      <span aria-disabled="true" className={rowClasses}>
        {labelContent}
        <Badge variant="neutral" className="shrink-0 border border-[var(--border)]">
          Soon
        </Badge>
      </span>
    );
  }

  return (
    <Link href={link.href} onClick={onClose} className={rowClasses}>
      {labelContent}
    </Link>
  );
};

const NavGroupBlock = ({ group, onClose }: NavGroupBlockProps) => (
  <div className={group.title ? undefined : 'pt-12'}>
    {group.title ? (
      <div className="mb-3 flex h-9 items-center gap-3">
        {group.icon ? (
          <span
            aria-hidden="true"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue"
          >
            <group.icon className="h-4 w-4" />
          </span>
        ) : null}
        <p className="text-base font-medium text-[var(--muted)]">{group.title}</p>
      </div>
    ) : null}
    <ul className="space-y-0.5">
      {group.links.map((link) => (
        <li key={link.label}>
          <NavDropdownLink link={link} onClose={onClose} />
        </li>
      ))}
    </ul>
  </div>
);

export const NavDropdown = ({ item, isOpen, onOpenStateChange }: NavDropdownProps) => {
  const [panelAlign, setPanelAlign] = useState<PanelAlign>('left');

  const rootRef = useRef<HTMLLIElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  const groups = item.groups ?? [];
  const columns = item.columns ?? (groups.length >= 3 ? 3 : 2);
  const panelId = `nav-dropdown-${item.label.toLowerCase()}`;
  const widthClass =
    PANEL_WIDTH_BY_LABEL[item.label] ?? DEFAULT_WIDTH_BY_COLUMNS[columns];
  const gridColumnClasses = columns === 3 ? 'grid-cols-3' : 'grid-cols-2';
  const columnIndexes = Array.from({ length: columns }, (_, index) => index + 1);

  useEffect(() => {
    const timerRef = closeTimerRef;
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const root = rootRef.current;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onOpenStateChange(item.label, false);
        triggerRef.current?.focus();
      }
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (root && !root.contains(event.target as Node)) {
        onOpenStateChange(item.label, false);
      }
    };
    const handleFocusOut = (event: FocusEvent) => {
      const nextTarget = event.relatedTarget;
      if (nextTarget instanceof Node && root?.contains(nextTarget)) {
        return;
      }
      if (nextTarget === null) {
        return;
      }
      onOpenStateChange(item.label, false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);
    root?.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
      root?.removeEventListener('focusout', handleFocusOut);
    };
  }, [isOpen, item.label, onOpenStateChange]);

  const cancelScheduledClose = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openDropdown = () => {
    const root = rootRef.current;
    const panel = panelRef.current;
    if (root && panel) {
      const rootRect = root.getBoundingClientRect();
      const wouldOverflow =
        rootRect.left + panel.offsetWidth > window.innerWidth - VIEWPORT_GUTTER_PX;
      setPanelAlign(wouldOverflow ? 'center' : 'left');
    }
    cancelScheduledClose();
    onOpenStateChange(item.label, true);
  };

  const scheduleClose = () => {
    cancelScheduledClose();
    closeTimerRef.current = window.setTimeout(
      () => onOpenStateChange(item.label, false),
      DROPDOWN_CLOSE_DELAY_MS,
    );
  };

  const closeDropdown = () => {
    cancelScheduledClose();
    onOpenStateChange(item.label, false);
  };

  const handleTriggerClick = () => {
    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };

  const handleTriggerKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== 'ArrowDown') {
      return;
    }
    event.preventDefault();
    openDropdown();
    requestAnimationFrame(() => {
      panelRef.current?.querySelector<HTMLAnchorElement>('a[href]')?.focus();
    });
  };

  const handlePanelKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      return;
    }
    const links = Array.from(
      panelRef.current?.querySelectorAll<HTMLAnchorElement>('a[href]') ?? [],
    );
    if (links.length === 0) {
      return;
    }
    event.preventDefault();
    const currentIndex = links.indexOf(document.activeElement as HTMLAnchorElement);
    let nextIndex = 0;
    if (event.key === 'ArrowDown') {
      nextIndex = currentIndex + 1 >= links.length ? 0 : currentIndex + 1;
    } else if (event.key === 'ArrowUp') {
      nextIndex = currentIndex <= 0 ? links.length - 1 : currentIndex - 1;
    } else if (event.key === 'End') {
      nextIndex = links.length - 1;
    }
    links[nextIndex]?.focus();
  };

  const handleMouseEnter = () => {
    openDropdown();
  };

  const handleMouseLeave = () => {
    scheduleClose();
  };

  const triggerClasses = [
    'inline-flex h-10 items-center gap-1 rounded-xl px-3 text-sm font-medium transition-colors',
    isOpen
      ? 'bg-brand-blue/10 text-brand-blue dark:text-[color:color-mix(in_oklab,var(--color-brand-blue)_75%,white)]'
      : 'text-[var(--muted)] hover:bg-brand-blue/10 hover:text-brand-blue',
  ].join(' ');

  const panelClasses = [
    'absolute top-full z-[60] pt-2 transition-[opacity,translate] duration-150 motion-reduce:transition-none',
    isOpen
      ? 'visible translate-y-0 opacity-100'
      : 'invisible pointer-events-none -translate-y-1 opacity-0',
    panelAlign === 'center' ? 'left-1/2 -translate-x-1/2' : 'left-0',
  ].join(' ');

  return (
    <li
      ref={rootRef}
      className="flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={panelId}
        onClick={handleTriggerClick}
        onKeyDown={handleTriggerKeyDown}
        className={triggerClasses}
      >
        {item.label}
        <ChevronDown
          aria-hidden="true"
          className={[
            'h-4 w-4 shrink-0 transition-transform',
            isOpen ? 'rotate-180' : '',
          ].join(' ')}
        />
      </button>

      <div ref={panelRef} id={panelId} className={panelClasses} onKeyDown={handlePanelKeyDown}>
        <div
          className={[
            'grid divide-x divide-[var(--border)] max-h-[calc(100vh-7rem)] max-w-[calc(100vw-3rem)] overflow-y-auto rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-2xl',
            widthClass,
            gridColumnClasses,
          ].join(' ')}
        >
          {columnIndexes.map((columnIndex) => (
            <div
              key={columnIndex}
              className="flex flex-col gap-8 px-6 first:pl-0 last:pr-0"
            >
              {groups
                .filter((group) => group.column === columnIndex)
                .map((group, groupIndex) => (
                  <NavGroupBlock
                    key={group.title ?? `group-${columnIndex}-${groupIndex}`}
                    group={group}
                    onClose={closeDropdown}
                  />
                ))}
            </div>
          ))}
        </div>
      </div>
    </li>
  );
};
