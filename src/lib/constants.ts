/**
 * サイト定数 — 塩村サイト風 UI + 立憲ブルー（CLAUDE.md）
 */

export const SITE = {
  name: '今井りか',
  title: '橿原市議会議員 今井りか 公式サイト',
  slogan: '生活者の立場から、社会の矛盾を。',
  party: '立憲民主党',
  position: '橿原市議会議員',
} as const;

/** 塩村サイト実測に近い値 + CLAUDE.md の #2B7AC6 / #004098 */
export const COLORS = {
  /** 見出しピンク（h2 相当） */
  headingPink: '#E74291',
  /** ボタン・アクセントピンク */
  accentPink: '#E6536A',
  /** メインCTAブルー（お問い合わせ等） */
  mainBlue: '#2B7AC6',
  /** 立憲ブルー */
  ritsyoBlue: '#004098',
  text: '#333333',
  textMuted: '#555555',
  bg: '#FFFFFF',
  sectionGray: '#F7F8FA',
  sectionBlueTint: '#F0F5FA',
} as const;

export const SNS_LINKS = {
  x: { url: 'https://twitter.com/imirk411', label: 'X', handle: '@imirk411' },
  instagram: {
    url: 'https://www.instagram.com/imai_rika_0411/',
    label: 'Instagram',
    handle: '@imai_rika_0411',
  },
  youtube: { url: 'https://www.youtube.com/@user-jd2gw4qx2c', label: 'YouTube' },
} as const;

export const CONTACT = {
  tel: '080-8305-4364',
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

export const NAV_ITEMS = [
  { href: '/news', label: '活動報告' },
  { href: '/policy', label: '政策' },
  { href: '/profile', label: 'プロフィール' },
  { href: '/newsletter', label: 'いまいだより' },
] as const;
