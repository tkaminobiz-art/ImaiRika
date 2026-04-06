/**
 * 年表データ — HTML v2 プロトタイプ準拠
 */

export type EventType = 'start' | 'achievement' | 'big';

export interface ChronoEvent {
  type: EventType;
  role?: string;
  headline?: string;
  body?: string;
  achieve?: string;
  detail?: string;
}

export interface ChronoYear {
  year: string;
  events: ChronoEvent[];
}

export const CHRONOLOGY: ChronoYear[] = [
  {
    year: '2021',
    events: [
      {
        type: 'start',
        role: '厚生常任委員会 副委員長',
        headline: '議員としてスタートしました',
        body: '2月、たくさんの方に支えていただいて初当選。「届けたい声がある」。その思いから、議員としての日々が始まりました。',
      },
      {
        type: 'achievement',
        achieve: '幼稚園のエアコン問題を議会で取り上げました',
        detail:
          '公立幼稚園のエアコン設置率が県内の市で最下位。夏は33度を超える教室で、子どもたちが扇風機だけで過ごしていました。「おかしくないですか」と声を上げました。',
      },
      {
        type: 'achievement',
        achieve: '陣痛タクシーの仕組みづくりを提案しました',
        detail:
          '「陣痛が来たのにタクシーが呼べない」。妊婦さんの切実な声から、対応できる仕組みが必要だと議会で訴えました。',
      },
    ],
  },
  {
    year: '2022',
    events: [
      {
        type: 'start',
        role: '文教常任委員会 委員長に',
      },
      {
        type: 'big',
        achieve: '全園にエアコンが設置されました',
        detail:
          '声を上げてから約1年。全園の普通教室にエアコンが入りました。子どもたちが安心して過ごせる教室に変わりました。',
      },
      {
        type: 'achievement',
        achieve: 'こども食堂への支援を議会で提案しました',
        detail:
          '市内のこども食堂は6か所、うち2か所は休止中。運営費の補助がなく「続けたくても続けられない」声を受けて、仕組みづくりを提案しました。',
      },
    ],
  },
  {
    year: '2023',
    events: [
      {
        type: 'start',
        role: '文教常任委員会 副委員長',
      },
      {
        type: 'achievement',
        achieve: '乗り合い交通の実証実験が始まりました',
        detail:
          '免許を返納したら買い物にも行けない——。そんな声を受けて提案してきた乗り合い交通が、1回300円で実証実験としてスタートしました。',
      },
    ],
  },
  {
    year: '2024',
    events: [
      {
        type: 'start',
        role: '厚生常任委員会 委員長 / 議会広報委員長に',
      },
      {
        type: 'big',
        achieve: '「こども食堂開催支援金」が創設されました',
        detail:
          '1回の開催につき5,000円の助成が受けられる制度が新しくできました。提案から約2年、こども食堂を続けやすいまちに一歩近づきました。',
      },
    ],
  },
  {
    year: '2025',
    events: [
      {
        type: 'start',
        role: '議会運営委員会 副委員長に',
      },
      {
        type: 'achievement',
        achieve: 'タクシー事業者一覧が市のHPに掲載されました',
        detail:
          '2021年に提案した陣痛タクシーの流れから、対応できる事業者の情報が市のホームページに掲載されるようになりました。',
      },
      {
        type: 'achievement',
        achieve: '「いまいだより」が20号になりました',
        detail:
          '定例会ごとに、議会での質問や活動をまとめてお届けしてきた「いまいだより」。5年間で30を超えるテーマを取り上げてきました。',
      },
    ],
  },
];
