import { socials } from './footer-data';

const icons: Record<(typeof socials)[number]['name'], string> = {
  Facebook:
    'M13.5 21v-7.5H16l.5-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.5V4.4c-.3 0-1.2-.2-2.2-.2-2.3 0-3.9 1.4-3.9 4v2.3H8.5v3H11V21h2.5z',
  X: 'M17.5 3h3l-6.6 7.6L21.7 21h-6.1l-4.8-6.3L5.3 21h-3l7.1-8.1L1.9 3h6.3l4.3 5.7L17.5 3zm-1 16.2h1.7L7.6 4.7H5.8l10.7 14.5z',
  LinkedIn:
    'M4.5 9h3v10.5h-3V9zM6 4a1.7 1.7 0 110 3.4A1.7 1.7 0 016 4zm4 5h2.9v1.4h.1c.4-.8 1.4-1.7 3-1.7 3.1 0 3.700 2 3.700 4.700v6.100h-3v-5.400c0-1.300 0-3-1.800-3s-2.100 1.400-2.100 2.900v5.500H10V9z',
  Discord:
    'M19 5.5A15 15 0 0015.3 4.400l-.2.400a13 13 0 00-4.200 0l-.2-.4A15 15 0 006.900 5.500C4.500 9 3.900 12.400 4.200 15.700a15 15 0 004.600 2.300l1-1.600c-.5-.2-1-.4-1.400-.7l.3-.3a10.700 10.700 0 009.200 0l.3.3c-.5.3-.9.5-1.400.7l1 1.600a15 15 0 004.600-2.300c.4-3.800-.6-7.100-2.400-10.200zM9.700 13.600c-.8 0-1.400-.7-1.400-1.600s.6-1.600 1.400-1.600 1.400.7 1.400 1.600-.6 1.600-1.400 1.600zm5.100 0c-.8 0-1.400-.7-1.400-1.600s.6-1.600 1.400-1.600 1.400.7 1.400 1.600-.6 1.600-1.400 1.600z',
};

export default function SocialLinks() {
  return (
    <ul className="mt-4 flex gap-2.5">
      {socials.map(({ name, href }) => (
        <li key={name}>
          {href === '#' ? (
            <span
              aria-label={name}
              className="grid size-7 place-items-center rounded-full bg-slate-600/40 text-slate-400"
            >
              <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor" aria-hidden>
                <path d={icons[name]} />
              </svg>
            </span>
          ) : (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="grid size-7 place-items-center rounded-full bg-slate-600/40 text-slate-400 transition hover:bg-slate-500/50 hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor" aria-hidden>
                <path d={icons[name]} />
              </svg>
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}
