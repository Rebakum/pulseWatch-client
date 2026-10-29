import { ChevronDown, Globe, ImageIcon, UserPlus } from 'lucide-react';
import type { ReactNode } from 'react';

import Container from '@/components/common/Container';

/* =====================================================================
   Status page feature showcase (3 rows, matches the reference).
   Rows 1 and 3 sit on the shared tilted plane (skewY -18deg, skewX 33deg);
   row 2 is a flat dialog. Colours come from the project theme tokens.
===================================================================== */

const TAN_RISE = 0.325; // tan(18deg)
const TAN_LEAN = 0.65; // tan(33deg)

const UP = 'var(--color-brand-blue-light)';

const CARD =
  'rounded-[28px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.7)]';

const PLANE =
  'absolute left-0 origin-top-left [transform:scale(var(--s))_skewY(-18deg)_skewX(33deg)]';

const FIELD =
  'rounded-xl border border-[var(--border)] bg-[var(--background)] px-3.5 py-2.5 text-[12px] text-[var(--muted)]';

const BTN_GHOST =
  'rounded-xl border border-[var(--border)] px-5 py-2 text-[12px] font-medium text-[var(--muted)]';
const BTN_PRIMARY =
  'rounded-xl bg-[image:var(--background-image-brand-gradient)] px-5 py-2 text-[12px] font-semibold text-white';

function Glow() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple/15 blur-[110px]" />
  );
}

/** Stage for a tilted plane. w/h = design size of the main card. */
function PlaneStage({
  w,
  h,
  scale,
  children,
}: {
  w: number;
  h: number;
  scale: string;
  children: ReactNode;
}) {
  const rise = Math.round(TAN_RISE * w);
  const total = Math.round(h * (1 - TAN_LEAN * TAN_RISE) + rise) + 60;

  return (
    <div
      aria-hidden="true"
      className={`relative mx-auto w-full max-w-[34rem] ${scale}`}
      style={{ height: `calc(var(--s) * ${total}px)` }}
    >
      <Glow />
      <div className={PLANE} style={{ top: `calc(var(--s) * ${rise + 30}px)` }}>
        {children}
      </div>
    </div>
  );
}

/** dim status-page panel peeking out behind a dialog */
function DimStatusPanel({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  return (
    <div
      className="absolute rounded-[28px] border-2 border-[var(--border)] bg-[var(--surface)] opacity-50 [mask-image:linear-gradient(90deg,#000_30%,transparent_100%)]"
      style={{ left: x, top: y, width: w, height: h }}
    >
      <p className="absolute left-6 top-5 whitespace-nowrap text-[12px] font-semibold text-[var(--foreground)]">
        All systems operational
      </p>
      {['API', 'Dashboard', 'Website'].map((name, i) => (
        <div
          key={name}
          className="absolute left-6 flex items-center gap-3"
          style={{ top: 52 + i * 34 }}
        >
          <span className="w-20 text-[10px] text-[var(--muted)]">{name}</span>
          <span className="flex gap-[3px]">
            {Array.from({ length: 22 }, (_, b) => (
              <span key={b} className="h-3 w-[5px] rounded-full" style={{ background: UP }} />
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------------
   Row 1: Invite team member dialog (tilted)
--------------------------------------------------------------------- */
const INVITE_W = 470;
const INVITE_H = 390;

function InviteVisual() {
  return (
    <PlaneStage
      w={INVITE_W}
      h={INVITE_H}
      scale="[--s:0.5] sm:[--s:0.68] lg:[--s:0.6] xl:[--s:0.74]"
    >
      <DimStatusPanel x={300} y={230} w={440} h={190} />

      <div className={`${CARD} relative z-[2] p-8`} style={{ width: INVITE_W, height: INVITE_H }}>
        <div className="flex flex-col items-center">
          <span
            className="grid size-10 place-items-center rounded-xl bg-brand-blue/15"
            style={{ color: UP }}
          >
            <UserPlus size={22} aria-hidden="true" />
          </span>
          <p className="mt-2 text-[14px] font-bold text-[var(--foreground)]">
            Invite <span style={{ color: UP }}>team member</span>
          </p>
        </div>

        <p className="mt-5 text-[12px] font-semibold text-[var(--foreground)]">E-mail</p>
        <p className="mt-1 text-[10px] text-[var(--muted)]">
          We will send an invitation to this address to join your team.
        </p>
        <div className="mt-2 flex items-center gap-2">
          <div className={`${FIELD} flex-1`}>teammate@example.com</div>
          <span className="rounded-xl border border-[var(--border)] px-4 py-2.5 text-[12px] text-[var(--foreground)]">
            Add
          </span>
        </div>

        <p className="mt-4 text-[12px] font-semibold text-[var(--foreground)]">Phone number</p>

        <div className="mt-6 flex items-center justify-end gap-3">
          <span className={BTN_GHOST}>Cancel</span>
          <span className={BTN_PRIMARY}>Send invite</span>
        </div>
      </div>
    </PlaneStage>
  );
}

/* ---------------------------------------------------------------------
   Row 2: Add logo dialog (flat) with dim uptime bars on the left
--------------------------------------------------------------------- */
function AddLogoVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[34rem] py-6">
      <Glow />

      {/* dim uptime bars behind the dialog */}
      <div className="pointer-events-none absolute -left-2 bottom-6 hidden w-64 space-y-3 opacity-40 [mask-image:linear-gradient(90deg,#000,transparent)] sm:block">
        {[0, 1, 2, 3].map((r) => (
          <div key={r} className="flex gap-[3px]">
            {Array.from({ length: 24 }, (_, i) => (
              <span key={i} className="h-2.5 w-[5px] rounded-full" style={{ background: UP }} />
            ))}
          </div>
        ))}
      </div>

      <div className={`${CARD} relative mx-auto w-full max-w-[22rem] p-6 text-center`}>
        <span
          className="mx-auto grid size-9 place-items-center rounded-lg bg-brand-blue/15"
          style={{ color: UP }}
        >
          <ImageIcon size={18} />
        </span>
        <p className="mt-2 text-[13px] font-bold text-[var(--foreground)]">
          Add <span style={{ color: UP }}>logo</span>
        </p>

        <div className="mt-4 grid h-40 place-items-center rounded-2xl border border-[var(--border)] bg-[var(--background)]">
          <ImageIcon size={72} strokeWidth={1} className="text-[var(--muted)]" />
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <span className="rounded-lg border border-[var(--border)] bg-[var(--background)] py-2 text-[11px] text-[var(--muted)]">
            Cancel
          </span>
          <span className="rounded-lg bg-[image:var(--background-image-brand-gradient)] py-2 text-[11px] font-semibold text-white">
            Upload logo
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------
   Row 3: Language selector (tilted)
--------------------------------------------------------------------- */
const LANG_W = 440;
const LANG_H = 360;

const LANGUAGES = [
  { name: 'English', code: 'EN', color: '#4a9fe0' },
  { name: 'French', code: 'FR', color: '#6b7cc9' },
  { name: 'Portuguese', code: 'PT', color: '#85429a' },
  { name: 'German', code: 'DE', color: '#68308f' },
];

function LanguageVisual() {
  return (
    <PlaneStage w={LANG_W} h={LANG_H} scale="[--s:0.5] sm:[--s:0.68] lg:[--s:0.6] xl:[--s:0.74]">
      <DimStatusPanel x={260} y={240} w={440} h={190} />

      <div className={`${CARD} relative z-[2] p-7`} style={{ width: LANG_W, height: LANG_H }}>
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-[12px] font-semibold text-[var(--foreground)]">
          <Globe size={14} style={{ color: UP }} aria-hidden="true" />
          Language
          <ChevronDown size={14} className="text-[var(--muted)]" aria-hidden="true" />
        </div>

        <div className="mt-4 space-y-1.5 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-3">
          {LANGUAGES.map((lang) => (
            <div
              key={lang.name}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] font-medium text-[var(--foreground)]"
            >
              <span
                className="grid h-5 w-7 place-items-center rounded-[4px] text-[8px] font-bold text-white"
                style={{ background: lang.color }}
              >
                {lang.code}
              </span>
              {lang.name}
            </div>
          ))}
          <p className="px-3 text-[13px] text-[var(--muted)]">...</p>
        </div>
      </div>
    </PlaneStage>
  );
}

/* ---------------------------------------------------------------------
   Rows (text from the reference)
--------------------------------------------------------------------- */
const ROWS = [
  {
    title: 'Notify users about maintenance and incidents',
    description:
      "Set expectations with timely status updates and email notifications. When customers know what's impacted and what to do next, you avoid panic, reduce churn risk, and keep teams aligned.",
    Visual: InviteVisual,
  },
  {
    title: 'Customize your status page to match your brand',
    description:
      "Use your logo, colors, fonts, and layout so your status page looks like an extension of your product: even when things aren't perfect.",
    Visual: AddLogoVisual,
  },
  {
    title: 'Create status pages in 11 languages',
    description:
      'Switch your status page to 11 languages: English, Arabic, Chinese, Dutch, French, German, Hindi, Indonesian, Portuguese, Spanish, and Turkish. Create separate pages for each language to keep each audience informed in their preferred language.',
    Visual: LanguageVisual,
  },
] as const;

export default function StatusPageFeaturesShowcase() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-8 text-[var(--foreground)] sm:py-12">
      <Container>
        <div className="relative">
          {/* vertical divider (desktop) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-[var(--border)] lg:block"
          />

          {ROWS.map(({ title, description, Visual }, index) => {
            const reversed = index === 1;

            return (
              <div
                key={title}
                className={`relative grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20 ${
                  index > 0
                    ? "before:pointer-events-none before:absolute before:left-1/2 before:top-0 before:h-px before:w-screen before:-translate-x-1/2 before:bg-[var(--border)] before:content-['']"
                    : ''
                }`}
              >
                <div className={reversed ? 'lg:order-2 lg:pl-8' : 'lg:pr-8'}>
                  <h2 className="max-w-lg text-2xl font-bold leading-snug tracking-tight sm:text-[1.75rem]">
                    {title}
                    <span className="bg-brand-gradient bg-clip-text text-transparent">.</span>
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">
                    {description}
                  </p>
                </div>

                <div className={reversed ? 'lg:order-1' : undefined}>
                  <Visual />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
