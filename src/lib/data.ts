/**
 * Content data for the Imai Rika website
 */

export interface PolicyCard {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}

export interface ActivityCard {
  id: string;
  title: string;
  date: string;
  content: string;
  image?: string;
}

export interface LeafletCard {
  id: string;
  title: string;
  description: string;
  pdfLink: string;
  image: string;
  date: string;
}

export const HERO_CONTENT = {
  slogan: '生活者の立場から、社会の矛盾を。',
  name: '橿原市議会議員 今井りか',
  subtitle: 'こども・地域・対話を大切にした市政活動',
} as const;

export const POLICY_CARDS: PolicyCard[] = [
  {
    id: 'children',
    title: '子どもたちのこと、一緒に考えませんか',
    description: '子どもたちが安心して暮らし、学べる環境づくりを目指しています。教育、子育て支援、学校給食など、子どもに関わる施策を優先に取り組みます。',
    image: '/images/policy/children.jpg',
    link: '/policy#children',
  },
  {
    id: 'community',
    title: 'このまちで暮らし続けたい、と思えるように',
    description: '地域経済の活性化、住環境の整備、防災対策など、市民の皆さんが安心して暮らせるまちづくりに取り組んでいます。',
    image: '/images/policy/community.jpg',
    link: '/policy#community',
  },
  {
    id: 'dialogue',
    title: '気軽に声をかけてください',
    description: '市民の皆さんの声が政策に反映される仕組みを大切にしています。座談会やSNSを通じて、皆さんの想いをお聞かせください。',
    image: '/images/policy/dialogue.jpg',
    link: '/policy#dialogue',
  },
  {
    id: 'wellbeing',
    title: '誰もが生きやすい社会へ',
    description: '福祉、健康、環境など、市民生活に関わる様々な課題に向き合い、改善を目指します。',
    image: '/images/policy/wellbeing.jpg',
    link: '/policy#wellbeing',
  },
];

export const RECENT_ACTIVITIES: ActivityCard[] = [
  {
    id: 'assembly-2024-03',
    title: '3月議会での質問',
    date: '2024.03.15',
    content: '子どもの医療費助成制度について質問を行いました。市民の皆さんからいただいた声を市政に届けることを大切にしています。',
    image: '/images/activity/assembly.jpg',
  },
  {
    id: 'roundtable-2024-03',
    title: '地域座談会を開催',
    date: '2024.03.10',
    content: '市内3箇所で座談会を開催。防災対策や学校教育についてご意見をいただきました。ありがとうございました。',
    image: '/images/activity/roundtable.jpg',
  },
  {
    id: 'community-event-2024-03',
    title: '子ども向けワークショップ',
    date: '2024.03.05',
    content: '市内の子ども食堂でボランティア。子どもたちとの時間を大切にしています。',
    image: '/images/activity/workshop.jpg',
  },
  {
    id: 'sns-campaign-2024-02',
    title: 'SNS発信キャンペーン',
    date: '2024.02.28',
    content: '市民の皆さんからいただいた「まちへの想い」をInstagramで紹介しています。ぜひフォローしてください。',
  },
];

export const LEAFLETS: LeafletCard[] = [
  {
    id: 'leaflet-2024-spring',
    title: '2024年春 活動報告書',
    description: '3月議会での質問内容と市民からのご意見をまとめた活動報告書です。',
    pdfLink: '/pdf/leaflet-2024-spring.pdf',
    image: '/images/newsletter/leaflet-2024-spring.jpg',
    date: '2024.03.20',
  },
  {
    id: 'leaflet-2024-winter',
    title: '2024年冬 活動報告書',
    description: '1月・2月の議会活動と地域での活動をまとめました。',
    pdfLink: '/pdf/leaflet-2024-winter.pdf',
    image: '/images/newsletter/leaflet-2024-winter.jpg',
    date: '2024.02.01',
  },
  {
    id: 'leaflet-2023-autumn',
    title: '2023年秋 活動報告書',
    description: '9月・10月の議会活動をまとめた報告書です。',
    pdfLink: '/pdf/leaflet-2023-autumn.pdf',
    image: '/images/newsletter/leaflet-2023-autumn.jpg',
    date: '2023.10.15',
  },
  {
    id: 'leaflet-2023-summer',
    title: '2023年夏 活動報告書',
    description: '7月・8月の地域活動をまとめました。',
    pdfLink: '/pdf/leaflet-2023-summer.pdf',
    image: '/images/newsletter/leaflet-2023-summer.jpg',
    date: '2023.08.30',
  },
];

export const PROFILE_DATA = {
  name: '今井りか',
  position: '奈良県橿原市議会議員',
  bio: '橿原市在住。シングルマザーとして2人の子どもを育てながら、地域のために活動してきました。生活者の立場から、市民の皆さんの声を市政に届けることを大切にしています。',
  interests: [
    '子どもの貧困対策',
    '子育て支援の充実',
    '教育環境の改善',
    '地域経済の活性化',
    '防災対策',
  ],
} as const;

export const FOOTER_LINKS = [
  {
    category: 'サイト',
    links: [
      { label: 'ホーム', href: '/' },
      { label: 'プロフィール', href: '/profile' },
      { label: '政策', href: '/policy' },
      { label: 'ニュースレター', href: '/newsletter' },
    ],
  },
  {
    category: '活動',
    links: [
      { label: '議会活動', href: '/assembly' },
      { label: 'インタビュー', href: '/interview' },
      { label: 'お問い合わせ', href: '/contact' },
    ],
  },
  {
    category: 'サポート',
    links: [
      { label: 'ご支援ください', href: '/support' },
      { label: 'プライバシーポリシー', href: '#privacy' },
      { label: '利用規約', href: '#terms' },
    ],
  },
] as const;
