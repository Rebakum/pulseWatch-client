import type { FooterSection } from './footer-data';

const linkClass = 'text-xs text-slate-300 transition hover:text-white';

export default function FooterColumn({ title, links }: FooterSection) {
  return (
    <nav aria-label={title}>
      <h3 className="text-[15px] font-semibold tracking-tight text-slate-200">
        {title}
        <span className="text-brand-blue/70">.</span>
      </h3>

      <ul className="mt-3 space-y-3">
        {links.map((item) =>
          'group' in item ? (
            <li key={item.group[0].label} className="text-xs text-slate-500">
              {item.group.map((l, i) => (
                <span key={l.label}>
                  {i > 0 && <span className="mx-1">/</span>}
                  <a href={l.href} className={linkClass}>
                    {l.label}
                  </a>
                </span>
              ))}
            </li>
          ) : (
            <li key={item.label}>
              <a href={item.href} className={linkClass}>
                {item.label}
              </a>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}
