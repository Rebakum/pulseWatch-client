'use client';

import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
import { ChevronDown, Play, Search } from 'lucide-react';
import MonitorAlertCard from './MonitorAlertCard';

const FILTER_TAGS = ['PROD', 'AWS-East', 'Critical', 'Shopify', 'Staging'] as const;

const MONITORS = [
  {
    name: 'api.example.com',
    url: 'https://api.example.com/health',
    tags: ['PROD', 'Critical'],
    uptime: '99.98%',
    down: false,
  },
  {
    name: 'shop.example.com',
    url: 'https://shop.example.com',
    tags: ['Shopify', 'PROD'],
    uptime: '99.95%',
    down: false,
  },
  {
    name: 'backend-v2',
    url: 'https://backend.example.com:5432',
    tags: ['AWS-East'],
    uptime: '98.20%',
    down: true,
  },
  {
    name: 'cdn.example.com',
    url: 'https://cdn.example.com/ping',
    tags: ['Staging'],
    uptime: '100%',
    down: false,
  },
  {
    name: 'mail.example.net',
    url: 'https://mail.example.net',
    tags: ['PROD'],
    uptime: '99.91%',
    down: false,
  },
  {
    name: 'invoice-cron',
    url: 'Heartbeat monitor',
    tags: ['Critical'],
    uptime: '99.99%',
    down: false,
  },
] as const;

const UPTIME_BARS = Array.from({ length: 18 }, (_, i) => i);

const LEGEND = [
  { label: 'Down', count: 0, dot: 'bg-status-down' },
  { label: 'Up', count: 5, dot: 'bg-status-up' },
  { label: 'Paused', count: 0, dot: 'bg-status-paused' },
] as const;

const TEAMS = [
  { initial: 'A', name: 'Acme team' },
  { initial: 'M', name: 'Moo team' },
] as const;

export default function HeroPreview() {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>(0.25);

  const motion = isVisible
    ? 'translate-x-0 opacity-100'
    : 'translate-x-16 opacity-0 lg:translate-x-24';

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="relative mt-10 lg:mt-0 lg:h-[560px] lg:overflow-hidden lg:[-webkit-mask-composite:source-in] lg:[mask-composite:intersect] lg:[mask-image:linear-gradient(to_right,black_12%,transparent_100%),linear-gradient(to_bottom,transparent_0%,black_12%,black_48%,transparent_100%)]"
    >
      {/* 900x620 stage, scaled + tilted on desktop, kept inside this clipped column */}
      <div
        className={`relative transition-[translate,opacity] duration-1000 ease-out motion-reduce:translate-x-0 motion-reduce:opacity-100 motion-reduce:transition-none lg:absolute lg:left-16 lg:top-1/2 lg:-mt-[310px] lg:h-[620px] lg:w-[900px] lg:origin-left lg:[transform:perspective(1600px)_rotateX(50deg)_rotateZ(-40deg)_scale(0.86)] xl:lg:[transform:perspective(1600px)_rotateX(50deg)_rotateZ(-20deg)_scale(0.86)] ${motion}`}
      >
        <div className="pointer-events-none absolute -left-10 top-10 h-72 w-72 rounded-full bg-brand-purple/30 blur-[110px]" />

        {/* Dashboard (back) */}
        <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5  lg:absolute lg:left-[16%] lg:top-0 lg:w-[84%]">
          <div className="flex items-center justify-between gap-3">
            <div className="flex h-8 w-[46%] items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 text-[10px] text-[var(--muted)]">
              <Search className="h-3 w-3" />
              Search by name or url
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-[10px] font-medium text-[var(--muted)]">
                Down first
              </span>
              <span className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-[10px] font-medium text-[var(--muted)]">
                View incidents
              </span>
              <span className="rounded-lg bg-brand-gradient px-3 py-1.5 text-[10px] font-semibold text-white">
                New monitor
              </span>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1 rounded-md border border-[var(--border)] bg-[var(--background)] px-2.5 py-1 text-[9px] font-semibold text-[var(--muted)]">
              All tags <ChevronDown className="h-2.5 w-2.5" />
            </span>
            {FILTER_TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-[var(--border)] bg-[var(--background)] px-2 py-1 text-[9px] font-semibold text-[var(--muted)]"
              >
                {tag} ×
              </span>
            ))}
          </div>

          <div className="mt-3 space-y-2">
            {MONITORS.map((m) => (
              <div
                key={m.name}
                className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--background)]/70 px-3 py-2.5"
              >
                <span
                  className={`h-2 w-2 shrink-0 rounded-full ${
                    m.down ? 'bg-status-down' : 'bg-[#1479c0]'
                  }`}
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11px] font-semibold text-[var(--foreground)]">
                    {m.name}
                  </p>
                  <p className="truncate text-[9px] text-[var(--muted)]">{m.url}</p>
                </div>
                <div className="hidden gap-1 sm:flex">
                  {m.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-[var(--border)] px-1.5 py-0.5 text-[8px] font-semibold text-[var(--muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-[2px]">
                  {UPTIME_BARS.map((i) => (
                    <span
                      key={i}
                      className={`h-3.5 w-[3px] rounded-full ${
                        m.down && i >= 15 ? 'bg-status-down' : 'bg-[#1479c0]/80'
                      }`}
                    />
                  ))}
                </div>
                <span className="w-10 text-right text-[10px] font-semibold text-[var(--foreground)]">
                  {m.uptime}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Alert cards (front) */}
        <div className="relative z-20 -mt-10 space-y-3 sm:ml-8 lg:absolute lg:left-0 lg:top-[6%] lg:ml-0 lg:mt-0 lg:w-[46%] lg:space-y-4">
          <MonitorAlertCard status="down" message="Down monitor detected!" time="5 min" />
          <MonitorAlertCard status="up" message="Monitor is back up!" />
        </div>

        {/* Status + team (front) */}
        <div className="relative z-20 mt-3 w-fit lg:absolute lg:left-[3%] lg:top-[50%] lg:mt-0 lg:w-[50%]">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[0_24px_48px_-20px_rgba(0,0,0,0.75)]">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-status-up ring-[6px] ring-status-up/25">
                <Play className="h-4 w-4 fill-white text-white" />
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[var(--foreground)]">Current status</p>
                <ul className="mt-1.5 space-y-1">
                  {LEGEND.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center gap-2 text-[11px] text-[var(--muted)]"
                    >
                      <i className={`h-1.5 w-1.5 rounded-full ${item.dot}`} />
                      <span>{item.label}</span>
                      <b className="ml-auto pl-8 font-semibold text-[var(--foreground)]">
                        {item.count}
                      </b>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-3 border-t border-[var(--border)] pt-3 text-[11px] text-[var(--muted)]">
              Latest alert{' '}
              <span className="font-semibold text-[var(--foreground)]">example.com is up</span> now
            </div>
          </div>

          <div className="ml-10 mt-3 flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.75)] lg:ml-[22%]">
            <div className="space-y-1.5">
              {TEAMS.map((t) => (
                <div
                  key={t.name}
                  className="flex items-center gap-2 text-[10px] text-[var(--muted)]"
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand-gradient text-[8px] font-bold text-white">
                    {t.initial}
                  </span>
                  {t.name}
                </div>
              ))}
            </div>
            <span className="ml-auto rounded-full bg-brand-gradient px-3.5 py-1.5 text-[10px] font-semibold text-white shadow-[0_8px_20px_-8px_var(--color-brand-purple)]">
              Upgrade now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
