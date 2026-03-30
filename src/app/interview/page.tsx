import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'インタビュー',
  description:
    'なぜ議員になったのか、どんな人なのか。ちょっと長めの自己紹介です。',
};

export default function InterviewPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="border-b-4 border-cdp-blue">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">インタビュー</h1>
          <p className="text-lg text-text-body">Interview</p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="mb-6 text-2xl font-bold md:text-3xl">
          今井りかのこと——ちょっと長めの自己紹介
        </h2>

        <div className="mb-12 border-b pb-8 text-lg leading-relaxed text-text-body">
          <p>
            なんで議員になったの？ どんな人なの？
            <br />
            気になった方に読んでいただけたら、うれしいです。
          </p>
        </div>

        <section className="mb-12">
          <h3 className="mb-6 text-xl font-bold text-text-dark">
            「届いていない声がある」
          </h3>
          <div className="space-y-5 text-lg leading-relaxed text-text-body">
            <p>
              きっかけは、やっぱり幼稚園でした。テレビでは「子育てしやすい世の中に」と流れているのに、教室は真夏でも扇風機だけ——。「あれ、なんかちがうな」と感じた日が、はじまりでした。
            </p>
            <p>
              周りを見れば、同じようなモヤモヤを抱えている保護者の方、たくさんいらっしゃいました。「制度ではこうなっているはず」なのに、現場に届いていない。そんな声を、誰かが橋渡ししないといけないのでは、と思うようになりました。
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="mb-6 text-xl font-bold text-text-dark">
            「思い切って、手を挙げました」
          </h3>
          <div className="space-y-5 text-lg leading-relaxed text-text-body">
            <p>
              32歳のとき、2人の男の子を育てながら、立候補を決めました。不安もありました。でも、「届けたい」のほうが、少しだけ強かったんです。
            </p>
            <p>
              応援してくださった方、名前を書いてくださった方。あのときの一枚一枚が、今も背中を押してくれています。
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="mb-6 text-xl font-bold text-text-dark">
            「声がかたちになった日」
          </h3>
          <div className="space-y-5 text-lg leading-relaxed text-text-body">
            <p>
              幼稚園にエアコンがついたときは、本当にうれしかった。小さなことに見えるかもしれません。でも、現場の声がかたちになった瞬間でした。
            </p>
            <p>
              暮らしに関わる予算のことも、これからも丁寧に見ていきたいと思っています。
            </p>
          </div>
        </section>

        <section>
          <h3 className="mb-6 text-xl font-bold text-text-dark">
            「まず、目の前の人を大事にしたい」
          </h3>
          <div className="space-y-5 text-lg leading-relaxed text-text-body">
            <p>
              いちばん大事にしているのは、目の前の方のお話を、ちゃんと聴くことです。「いまいさん、ちょっと聞いて」——その一言が、いちばんの励みになります。
            </p>
            <p>
              これからも、まちのこと、子育てのこと、ちょっとした違和感のこと。遠慮なく話しかけてください。お待ちしています。
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
