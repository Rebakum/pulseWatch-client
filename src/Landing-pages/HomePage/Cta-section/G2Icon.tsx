export default function G2Icon({ className = 'size-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-label="G2" role="img">
      <circle cx="12" cy="12" r="11" fill="#ff492c" />
      <path
        d="M12 6.2a5.8 5.8 0 100 11.6 5.8 5.8 0 003.9-1.5l-1.7-1.8A3.4 3.4 0 1112 8.6h3.6V6.2H12z"
        fill="#fff"
      />
    </svg>
  );
}
