'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState, type ComponentType } from 'react';

import { INSIGHT_TABS, type InsightId } from './insights.constants';
import { IncidentPreview } from './previews/IncidentPreview';
import { MaintenancePreview } from './previews/MaintenancePreview';
import { MultiLocationPreview } from './previews/MultiLocationPreview';
import { ResponseTimePreview } from './previews/ResponseTimePreview';
import { TeamAccessPreview } from './previews/TeamAccessPreview';

const PREVIEWS: Record<InsightId, ComponentType> = {
  'multi-location': MultiLocationPreview,
  'response-time': ResponseTimePreview,
  incidents: IncidentPreview,
  'team-access': TeamAccessPreview,
  maintenance: MaintenancePreview,
};

export function InsightsTabs() {
  const [activeId, setActiveId] = useState<InsightId>(INSIGHT_TABS[0].id);

  return (
    <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
      <ul className="border-l border-[var(--border)]">
        {INSIGHT_TABS.map((tab) => {
          const isActive = tab.id === activeId;

          return (
            <li key={tab.id} className="relative">
              {isActive ? (
                <span
                  aria-hidden="true"
                  className="absolute -left-px top-0 h-full w-0.5 bg-brand-gradient"
                />
              ) : null}

              <button
                type="button"
                onClick={() => setActiveId(tab.id)}
                aria-expanded={isActive}
                aria-controls={`insight-${tab.id}`}
                className={`flex w-full items-center gap-3 py-3 pl-6 pr-2 text-left text-lg font-semibold transition-colors sm:text-xl ${
                  isActive
                    ? 'text-[var(--foreground)]'
                    : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                }`}
              >
                {tab.title}
                {tab.isComingSoon ? (
                  <span className="rounded-full bg-status-warning/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-status-warning">
                    Soon
                  </span>
                ) : null}
              </button>

              <div
                id={`insight-${tab.id}`}
                inert={isActive ? undefined : true}
                className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
                  isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pb-4 pl-6 pr-2">
                    <p className="max-w-md leading-relaxed text-[var(--muted)]">
                      {tab.description}
                    </p>
                    <Link
                      href={tab.href}
                      className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:underline"
                    >
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div aria-hidden="true" className="relative">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gradient opacity-15 blur-3xl dark:opacity-25" />
        <span className="absolute right-0 top-0 text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">
          Sample data
        </span>

        <div className="relative grid pt-6">
          {INSIGHT_TABS.map((tab) => {
            const Preview = PREVIEWS[tab.id];
            const isActive = tab.id === activeId;

            return (
              <div
                key={tab.id}
                className={`col-start-1 row-start-1 transition-[translate,opacity] duration-500 motion-reduce:transition-none ${
                  isActive
                    ? 'translate-y-0 opacity-100'
                    : 'pointer-events-none translate-y-3 opacity-0'
                }`}
              >
                <Preview />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
