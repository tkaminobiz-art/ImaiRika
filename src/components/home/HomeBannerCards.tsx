import Link from 'next/link';

const cards = [
  {
    href: '/policy',
    title: '政策',
    sub: 'Policy',
    variant: 'policy' as const,
  },
  {
    href: '/newsletter',
    title: 'いまいだより',
    sub: 'Newsletter',
    variant: 'newsletter' as const,
  },
  {
    href: '/support',
    title: '応援する',
    sub: 'Support',
    variant: 'support' as const,
  },
  {
    href: '/contact',
    title: 'お問い合わせ',
    sub: 'Contact',
    variant: 'contact' as const,
  },
];

const variantClass: Record<(typeof cards)[number]['variant'], string> = {
  policy: 'bg-v2-pink',
  newsletter: 'bg-v2-blue',
  support: 'bg-[#E07840]',
  contact: 'bg-[#2BA58E]',
};

export default function HomeBannerCards() {
  return (
    <div className="mx-auto max-w-v2 px-6 pb-0 pt-12 md:px-10">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {cards.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className={`banner-card-v2 group relative flex h-[120px] flex-col justify-between overflow-hidden rounded-xl p-4 text-white shadow-none transition duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-[1.015] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] md:h-[180px] md:rounded-[12px] md:p-6 ${variantClass[c.variant]}`}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-2 rotate-[-15deg] break-all font-en text-[20px] font-black leading-snug tracking-wide text-white/[0.08] md:text-[28px]"
            >
              CDP CDP CDP CDP CDP CDP CDP CDP CDP CDP CDP CDP CDP CDP CDP CDP
            </span>
            <span className="relative z-[1] font-sans text-lg font-bold leading-snug md:text-[22px]">
              {c.title}
            </span>
            <span className="relative z-[1] font-en text-[10px] font-medium uppercase tracking-[0.08em] text-white/70 md:text-[11px]">
              {c.sub}
            </span>
            <span className="absolute bottom-4 right-4 z-[1] md:bottom-[18px] md:right-5">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 stroke-white/70 transition group-hover:stroke-white md:h-6 md:w-6"
                fill="none"
                strokeWidth={2}
                aria-hidden
              >
                <path d="M7 7l10 10M17 7v10H7" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
