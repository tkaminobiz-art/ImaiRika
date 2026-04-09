/**
 * PROJECT_SPEC セクション12 — 実装用コピー
 */

export const HOME = {
  policyLeadLabel: '主要政策',
  policyLeadCatch: '暮らしの中の声を、届けたい。',
  policyLeadBody: [
    '幼稚園の現場で感じた「届いていない声」。商店街の「もうちょっと」。それが、私の出発点でした。',
    '橿原で子育てしながら、毎日の暮らしの中で出会う課題を、議会に届ける。それが私の仕事です。',
  ],
  achievementsTitle: '議員として実現してきたこと',
  achievements: [
    { title: '公立幼稚園にエアコン設置', detail: '夏の教室の暑さを、議会で取り上げました。' },
    { title: '暮らしに関わる予算を守る', detail: '子どもや地域の声を、予算の場に届け続けています。' },
    { title: '子ども食堂への支援を提案', detail: '地域の子どもたちの食と居場所を、応援する仕組みづくりに。' },
  ],
  topicsTitle: '注目のトピックス',
  profileTeaserLead:
    '「おかしいな」と思ったこと、ありませんか。子育ての現場から、声を届けています。',
  linkBanners: [
    { title: '立憲民主党', href: 'https://cdp-japan.jp/', external: true },
    { title: 'いまいだより', href: '/newsletter', external: false },
    { title: 'YouTube', href: 'https://www.youtube.com/@user-jd2gw4qx2c', external: true },
  ],
} as const;

export const POLICY_PILLARS = [
  {
    id: 'children',
    num: '1',
    title: 'こども・子育て',
    short: '子どもたちのこと、一緒に考えませんか',
    image: '/images/community_kids-voting-event.jpg',
    imagePosition: 'center',
    lead: [
      '2人の男の子を育てています。',
      '毎朝バタバタと送り出して、仕事に向かって。',
      'そんな中で「これ、もうちょっとなんとかならないかな」と思うことが、やっぱりあるんです。',
      '同じ気持ちのお母さん、お父さん、きっと多いですよね。',
      'その声を議会に届けるのが、私の一番大事な仕事です。',
    ],
    done: [
      '夏、扇風機だけだった公立幼稚園の教室に、エアコンがつきました',
      '子どもの安全に関わる予算を守りました',
      '子ども食堂への支援を議会で提案しました',
    ],
    next: [
      '物価が上がっても安心できる子育て支援',
      'どの子も同じように学べる環境づくり',
      '「困ったとき、ここに聞けばいい」がわかる仕組み',
    ],
    pointTitle: '子育て・保育',
    pointBody:
      '現場の声を出発点に、子どもたちが安心して過ごせる環境づくりを進めます。',
  },
  {
    id: 'community',
    num: '2',
    title: '地域',
    short: 'このまちで暮らし続けたい、と思えるように',
    image: '/images/community_kindergarten-sakura.jpg',
    imagePosition: 'left 30%',
    lead: [
      '橿原って、いいまちなんです。',
      '歴史があって、人があたたかくて。',
      'でも「もうちょっとこうだったらな」と感じることもありますよね。',
      '商店街のこと、ご近所の暮らしのこと、子育ても介護も、全部つながっている。',
      '住んでいる人の声を聞いて、一緒に「もうちょっと」を良くしていきたい。そう思っています。',
    ],
    done: [
      '暮らしに関わる大切な予算を守りました',
      '地域で聞いた声を、議会に届け続けています',
      'まちの将来について、積極的に提案しています',
    ],
    next: [
      '商店街やお店が元気になる応援',
      '「ここに住んでよかった」と思えるまちづくり',
      'みなさんの声が、ちゃんと届く仕組み',
    ],
    pointTitle: '地域の暮らし',
    pointBody:
      'ご近所の声を大切に、まちの魅力と安心が両立するよう取り組みます。',
  },
  {
    id: 'dialogue',
    num: '3',
    title: '対話と発信',
    short: '気軽に声をかけてください',
    image: '/images/dialogue_mama-meeting-main.jpg',
    imagePosition: 'center',
    lead: [
      '政治って、なんだか遠い感じがしますよね。私もそう思っていました。',
      'でも実は、毎日の暮らしと地続きなんです。',
      '幼稚園のこと、ゴミ出しのこと、公園のこと。「ちょっと気になるんだけど」が、ぜんぶ政治。',
      'だから気軽に話してほしいんです。座談会でも、SNSでも、道でばったり会ったときでも。',
      '「いまいさん、ちょっと聞いて」——その一言が、いちばんうれしい。',
    ],
    done: [
      'お母さんたちと、ゆっくり話せる座談会を開きました',
      '市政報告「いまいだより」を18号まで届けました',
      'Instagramで日々の活動を発信しています',
    ],
    next: [
      'もっといろんな世代の方と話す機会を増やしたい',
      '若い人にも「政治って意外と身近だな」と思ってもらいたい',
      '「話してよかった」——そう感じてもらえる場を',
    ],
    pointTitle: '対話と発信',
    pointBody:
      'ちいさな声に耳を傾け、市政に届ける。それをこれからも大切にします。',
  },
] as const;

export const ACTIVITY_CIRCLES = [
  {
    label: '議会活動',
    caption: 'みなさんの声を届けています',
    image: '/images/council_speaking-podium.jpg',
  },
  {
    label: '地域活動',
    caption: 'まちの中で汗をかいています',
    image: '/images/community_kids-voting-event.jpg',
  },
  {
    label: '座談会',
    caption: 'お茶を飲みながら、お話ししませんか',
    image: '/images/dialogue_mama-meeting-main.jpg',
  },
  {
    label: 'SNS発信',
    caption: '日々のことを発信しています',
    image: '/images/hero_slogan-board-green.jpg',
  },
] as const;

export const TOPICS = [
  {
    id: 't1',
    title: 'いまいだより 最新号',
    desc: '市政のことを、やわらかくお届けしています。',
    image: '/images/community_kindergarten-sakura.jpg',
    href: '/newsletter',
  },
  {
    id: 't2',
    title: '座談会のあと',
    desc: 'お茶を飲みながら聞いた声を、持ち帰って考えています。',
    image: '/images/dialogue_mama-meeting-main.jpg',
    href: '/contact',
  },
  {
    id: 't3',
    title: '議会での取り上げ',
    desc: '子どもたちの環境や暮らしに関わる予算のこと。',
    image: '/images/council_speaking-podium.jpg',
    href: '/assembly',
  },
] as const;

export const NEWS_ITEMS = [
  {
    date: '2026.03.15',
    title: '議会で、子どもたちの環境について',
    excerpt: '現場の声をもとに、予算のことも含めて取り上げました。',
  },
  {
    date: '2026.03.08',
    title: '地域のイベントで',
    excerpt: '子どもたちと話す時間が、いちばんのヒントになります。',
  },
  {
    date: '2026.02.28',
    title: 'ママ座談会のあと',
    excerpt: '「ちょっと困ってる」を、持ち帰って考えています。',
  },
] as const;
