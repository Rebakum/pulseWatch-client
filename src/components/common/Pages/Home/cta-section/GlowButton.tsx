export default function GlowButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-brand-gradient px-7 py-3 text-[15px] font-medium text-white shadow-[0_0_32px_rgba(133,66,154,.4)] transition hover:brightness-110 hover:shadow-[0_0_44px_rgba(133,66,154,.55)]"
    >
      {children}
    </a>
  );
}
