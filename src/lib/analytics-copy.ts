export const ANALYTICS_COPY = {
  title: 'アクセス解析について',
  description:
    '閲覧ページや閲覧時間などの利用状況をGoogle アナリティクスで集計します。許可した場合のみCookieを使って計測します。',
  dataNotice: '氏名やメールアドレス、フォームの入力内容は送りません。',
  settingsNotice: '選択は「アクセス解析の設定」からいつでも変更できます。',
  googlePrivacy: 'Googleによるデータの利用',
  withdrawNotice: '許可を取り消すと、計測を停止するためページを再読み込みします。',
  settings: 'アクセス解析の設定',
  accept: '許可する',
  decline: '許可しない',
  withdraw: '許可を取り消す',
  close: '閉じる',
  granted: '現在の設定：許可しています',
  denied: '現在の設定：許可していません',
  storageError:
    '設定を保存できませんでした。このページでは選択を反映しています。ブラウザの保存設定を確認してください。',
} as const;
