export function ArrowButton({ href = '#', label }: { href?: string; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid size-9 shrink-0 place-items-center rounded-full border border-emerald-400/30 bg-emerald-400/5 text-emerald-400 transition hover:bg-emerald-400/15"
    >
      <svg
        viewBox="0 0 20 20"
        className="size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M8 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
