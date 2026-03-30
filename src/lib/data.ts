/**
 * コンテンツデータ — PROJECT_SPEC セクション12 + IMAGE_CLASSIFICATION パス
 */

export interface PolicyCard {
  id: string;
  title: string;
  sub: string;
  description: string;
  image: string;
  link: string;
}

export interface ActivityCard {
  id: string;
  title: string;
  date: string;
  content: string;
  image: string;
  link?: string;
}

export interface LeafletCard {
  id: string;
  title: string;
  description: string;
  pdfLink: string;
  image: string;
  date: string;
}

export interface NewsTickerItem {
  date: string;
  text: string;
  href?: string;
}

export interface PickUpMovie {
  id: string;
  title: string;
  thumbnail: string;
  href: string;
  date?: string;
}

export interface ActivityPillar {
  id: string;
  label: string;
  caption: string;
  image: string;
}

export const HERO_CONTENT = {
  slogan: '生活者の立場から、社会の矛盾を。',
  sloganAccent: '社会の矛盾を。',
  name: '橿原市議会議員 今井りか',
  party: '立憲民主党',
} as const;

/** ヒーロー右側・FV — IMAGE_CLASSIFICATION */
export const HERO_IMAGE = '/images/hero_portrait-gray-bg-main.jpg';

export const NEWS_TICKER_ITEMS: NewsTickerItem[] = [
  {
    date: '2026.03.20',
    text: 'いまいだより 2026年冬号を公開しました',
    href: '/newsletter',
  },
  {
    date: '2026.03.10',
    text: '活動報告を更新しました',
    href: '/policy',
  },
  {
    date: '2026.03.01',
    text: '議会での取り上げ内容をまとめました',
    href: '/assembly',
  },
];

/** 政策TOPICS — セクション12.3（3枚） */
export const POLICY_CARDS: PolicyCard[] = [
  {
    id: 'children',
    title: '子どもたちのこと、一緒に考えませんか',
    sub: '子育て中のお母さんの目線で',
    description:
      '2人の男の子を育てながら、幼稚園や学校の現場で感じることを、議会に届けています。',
    image: '/images/community_kids-voting-event.jpg',
    link: '/policy#children',
  },
  {
    id: 'community',
    title: 'このまちで暮らし続けたい、と思えるように',
    sub: '暮らしの「もうちょっと」を良くする',
    description:
      '橿原の商店街や子育ての声を聞き、まちの「もうちょっと」を一緒に考えたいです。',
    image: '/images/community_kindergarten-sakura.jpg',
    link: '/policy#community',
  },
  {
    id: 'dialogue',
    title: '気軽に声をかけてください',
    sub: 'あなたの「ちょっと聞いて」が力になります',
    description:
      '座談会やSNS、道で会ったときも。ちいさな声ほど、大切にしたいんです。',
    image: '/images/dialogue_mama-meeting-main.jpg',
    link: '/policy#dialogue',
  },
];

/** 活動報告 — セクション12トーン */
export const RECENT_ACTIVITIES: ActivityCard[] = [
  {
    id: 'a1',
    title: '議会で、子どもたちの環境について',
    date: '2026.03.15',
    content:
      '幼稚園や小学校の過ごしやすさ。現場の声をもとに、予算のことも含めて取り上げました。',
    image: '/images/council_speaking-podium.jpg',
    link: '/assembly',
  },
  {
    id: 'a2',
    title: '地域のイベントで',
    date: '2026.03.08',
    content:
      '子どもたちと話す時間が、いちばんのヒントになります。また報告しますね。',
    image: '/images/community_kids-voting-event.jpg',
    link: '/policy',
  },
  {
    id: 'a3',
    title: 'ママ座談会のあと',
    date: '2026.02.28',
    content:
      'お茶を飲みながら聞いた「ちょっと困ってる」を、持ち帰って考えています。',
    image: '/images/dialogue_mama-meeting-main.jpg',
    link: '/contact',
  },
];

/** Pick Up Movie — 議会動画（サムネはIMAGE_CLASSIFICATION準拠、リンクは議会動画ページへ） */
export const PICK_UP_MOVIES: PickUpMovie[] = [
  {
    id: 'm1',
    title: '議会での一般質問（ダイジェスト）',
    thumbnail: '/images/council_speaking-podium.jpg',
    href: '/assembly',
    date: '2026.02.10',
  },
  {
    id: 'm2',
    title: '活動の様子（街頭・地域）',
    thumbnail: '/images/hero_slogan-board-green.jpg',
    href: '/assembly',
    date: '2026.01.20',
  },
];

/** 活動セクション 丸アイコン — セクション12.3 */
export const ACTIVITY_PILLARS: ActivityPillar[] = [
  {
    id: 'council',
    label: '議会活動',
    caption: 'みなさんの声を届けています',
    image: '/images/council_speaking-podium.jpg',
  },
  {
    id: 'area',
    label: '地域活動',
    caption: 'まちの中で汗をかいています',
    image: '/images/community_kids-voting-event.jpg',
  },
  {
    id: 'talk',
    label: '座談会',
    caption: 'お茶を飲みながら、お話ししませんか',
    image: '/images/dialogue_mama-meeting-main.jpg',
  },
  {
    id: 'sns',
    label: 'SNS発信',
    caption: '日々のことを発信しています',
    image: '/images/hero_slogan-board-green.jpg',
  },
];

/** いまいだより一覧（抜粋 — 詳細は /newsletter で拡張可） */
export const LEAFLETS: LeafletCard[] = [
  {
    id: 'vol18',
    title: 'いまいだより 2026年冬号',
    description: '市政のことを、やわらかくお届けしています。',
    pdfLink: '/pdf/vol18_2026fuyu.pdf',
    image: '/images/placeholder.jpg',
    date: '2026.01.15',
  },
  {
    id: 'vol17',
    title: 'いまいだより 2025年秋号',
    description: '地域の声と活動の記録です。',
    pdfLink: '/pdf/vol17_2025aki.pdf',
    image: '/images/placeholder.jpg',
    date: '2025.10.01',
  },
];
