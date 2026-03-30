/**
 * Site-wide constants for the Imai Rika website
 */

export const SITE_COLORS = {
  primary: '#004098',      // CDP Blue
  yellow: '#FFE72F',       // Yellow accent
  red: '#FF3E4D',          // Red for profile
  purple: '#6321E0',       // Purple for policy
  cyan: '#009FAD',         // Cyan for newsletter
  orange: '#FF7F00',       // Orange for support
  textDark: '#151B1E',     // Dark text
  textBody: '#2F2F2F',     // Body text
  grayBg: '#F0F0F0',       // Gray background
} as const;

export const SNS_LINKS = {
  twitter: {
    url: 'https://twitter.com/imirk411',
    label: 'X (Twitter)',
    icon: 'twitter',
  },
  instagram: {
    url: 'https://www.instagram.com/imai_rika_0411/',
    label: 'Instagram',
    icon: 'instagram',
  },
} as const;

export const CONTACT_INFO = {
  phone: '080-8305-4364',
  email: 'rika.imai0411@gmail.com',
} as const;

export const SITE_METADATA = {
  title: '橿原市議会議員 今井りか',
  description: '奈良県橿原市議会議員 今井りかの公式サイト。子どもたち、地域、対話を大切にした市政活動を行っています。',
  url: 'https://imai-rika.com',
  locale: 'ja_JP',
} as const;

export const ACTIVITY_ICONS = [
  {
    id: 'assembly',
    label: '議会活動',
    color: 'text-cdp-red',
    bgColor: 'bg-cdp-red',
  },
  {
    id: 'community',
    label: '地域活動',
    color: 'text-cdp-purple',
    bgColor: 'bg-cdp-purple',
  },
  {
    id: 'roundtable',
    label: '座談会',
    color: 'text-cdp-cyan',
    bgColor: 'bg-cdp-cyan',
  },
  {
    id: 'sns',
    label: 'SNS発信',
    color: 'text-cdp-orange',
    bgColor: 'bg-cdp-orange',
  },
] as const;

export const COLOR_BANNERS = [
  {
    id: 'profile',
    title: 'プロフィール',
    titleEn: 'Profile',
    subtitle: 'どんな人？と思った方へ',
    bgColor: 'bg-cdp-red',
    href: '/profile',
  },
  {
    id: 'policy',
    title: '政策',
    titleEn: 'Policy',
    subtitle: 'こども・地域・対話',
    bgColor: 'bg-cdp-purple',
    href: '/policy',
  },
  {
    id: 'newsletter',
    title: 'ニュースレター',
    titleEn: 'Newsletter',
    subtitle: '市政のこと、わかりやすくお届け',
    bgColor: 'bg-cdp-cyan',
    href: '/newsletter',
  },
  {
    id: 'support',
    title: 'ご支援ください',
    titleEn: 'Support',
    subtitle: 'あたたかいお気持ちが力になります',
    bgColor: 'bg-cdp-orange',
    href: '/support',
  },
] as const;

export const FOOTER_LINKS = [
  {
    category: '今井りかについて',
    links: [
      { label: 'プロフィール', href: '/profile' },
      { label: 'インタビュー', href: '/interview' },
    ],
  },
  {
    category: '政策・活動',
    links: [
      { label: '3つの政策の柱', href: '/policy' },
      { label: 'いまいだより', href: '/newsletter' },
      { label: '議会動画', href: '/assembly' },
    ],
  },
  {
    category: 'つながる',
    links: [
      { label: 'ご支援', href: '/support' },
      { label: 'お問い合わせ', href: '/contact' },
    ],
  },
] as const;
