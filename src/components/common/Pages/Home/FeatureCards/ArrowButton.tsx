export function ArrowButton({ href = '#', label }: { href?: string; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid size-9 shrink-0 place-items-center rounded-full border border-brand-blue/40 bg-brand-blue/5 text-brand-blue transition hover:bg-brand-blue/15"
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
