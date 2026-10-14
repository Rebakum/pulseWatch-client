import { Info } from 'lucide-react';

import CellValue from './CellValue';
import { GRID, sections as allSections } from './data';
import { Section } from './types';

export default function ComparisonSection({ section }: { section?: Section }) {
  const sections = section ? [section] : allSections;

  return (
    <>
      {sections.map((s) => (
        <div key={s.title} className="mt-12 mx-auto sm:px-4">
          <h3 className="mb-3 text-xl font-bold">{s.title}</h3>

          <div>
            {s.rows.map((r) => (
              <div
                key={r.label}
                className={`${GRID} items-center border-b border-[var(--border)] pb-3 text-center text-xs text-[var(--muted)] sm:text-sm lg:pb-0 ${
                  r.highlight ? 'rounded-md bg-[var(--surface)]' : ''
                }`}
              >
                <div className="col-span-4 flex items-center gap-1.5 px-2 pt-3 text-left text-sm font-semibold text-[var(--foreground)] min-w-0 break-words lg:col-span-1 lg:py-4">
                  <span>{r.label}</span>
                  {r.info && (
                    <span title={r.label} className="text-[var(--muted)]">
                      <Info className="h-3.5 w-3.5" />
                    </span>
                  )}
                </div>

                {r.values.map((value, i) => (
                  <div key={i} className="min-w-0 break-words px-1 pt-2 lg:py-4">
                    <CellValue value={value} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
