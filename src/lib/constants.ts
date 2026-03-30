/**
 * Site-wide constants — PROJECT_SPEC + セクション12
 */

export const SITE = {
  name: '今井りか',
  title: '橿原市議会議員 今井りか 公式サイト',
  slogan: '生活者の立場から、社会の矛盾を。',
  party: '立憲民主党',
  position: '橿原市議会議員',
} as const;

export const SITE_COLORS = {
  primary: '#004098',
  yellow: '#FFE72F',
  red: '#FF3E4D',
  purple: '#6321E0',
  cyan: '#009FAD',
  orange: '#FF7F00',
  textDark: '#151B1E',
  textBody: '#2F2F2F',
  grayBg: '#F0F0F0',
  linkBlue: '#1E88E5',
} as const;

export const SNS_LINKS = {
  twitter: {
    url: 'https://twitter.com/imirk411',
    label: 'X (Twitter)',
    handle: '@imirk411',
  },
  instagram: {
    url: 'https://www.instagram.com/imai_rika_0411/',
    label: 'Instagram',
    handle: '@imai_rika_0411',
  },
  youtube: {
    url: 'https://www.youtube.com/@user-jd2gw4qx2c',
    label: 'YouTube',
  },
} as const;

export const CONTACT_INFO = {
  phone: '080-8305-4364',
  email: 'rika.imai0411@gmail.com',
} as const;

export const SUPPORT_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScZ5j3m9Wh9xPpTvGYVrHxQfECrBn8mFGBST6r_1lFY7k1c4Q/viewform';

export const SITE_METADATA = {
  title: SITE.title,
  description:
    '橿原市議会議員 今井りかの公式サイト。こども・子育て、地域、対話と発信の3つの柱で橿原市の発展に取り組みます。',
  url: 'https://imai-rika.com',
  locale: 'ja_JP',
} as const;

/** 上部バー「応援する」まわり（セクション2.1） */
export const TOPBAR_LINKS = [
  { label: '後援会', href: '/support' },
  { label: 'カンパ', href: '/support' },
  { label: 'ボランティア', href: '/contact' },
  { label: 'お問い合わせ', href: '/contact' },
] as const;

/** 4色バナー — セクション12.3 */
export const COLOR_BANNERS = [
  {
    id: 'profile',
    main: '今井りかについて',
    sub: 'どんな人？と思った方へ',
    titleEn: 'Profile',
    bg: 'bg-cdp-red',
    href: '/profile',
  },
  {
    id: 'policy',
    main: '3つの政策の柱',
    sub: 'こども・地域・対話',
    titleEn: 'Policy',
    bg: 'bg-cdp-purple',
    href: '/policy',
  },
  {
    id: 'newsletter',
    main: 'いまいだより',
    sub: '市政のこと、わかりやすくお届け',
    titleEn: 'Newsletter',
    bg: 'bg-cdp-cyan',
    href: '/newsletter',
  },
  {
    id: 'support',
    main: '応援してくださる方へ',
    sub: 'あたたかいお気持ちが力になります',
    titleEn: 'Support',
    bg: 'bg-cdp-orange',
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

/** MENUオーバーレイ — PROJECT_SPEC 2.3 */
export const MENU_SECTIONS = [
  {
    title: '今井りかについて',
    links: [
      { label: 'プロフィール', href: '/profile' },
      { label: '経歴', href: '/profile' },
      { label: '議会での活動', href: '/assembly' },
    ],
  },
  {
    title: '政策',
    links: [
      { label: 'こども・子育て', href: '/policy#children' },
      { label: '地域', href: '/policy#community' },
      { label: '対話と発信', href: '/policy#dialogue' },
    ],
  },
  {
    title: 'いまいだより',
    links: [{ label: 'バックナンバー一覧', href: '/newsletter' }],
  },
  {
    title: '議会動画',
    links: [{ label: '一覧・埋め込み', href: '/assembly' }],
  },
  {
    title: 'ご支援',
    links: [{ label: 'カンパのお申込み', href: '/support' }],
  },
  {
    title: 'お問い合わせ',
    links: [
      { label: 'TEL', href: `tel:${CONTACT_INFO.phone.replace(/-/g, '')}` },
      { label: 'メール', href: `mailto:${CONTACT_INFO.email}` },
      { label: 'SNS', href: '/contact' },
    ],
  },
] as const;
