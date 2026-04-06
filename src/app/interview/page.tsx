import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'インタビュー',
};

export default function InterviewPage() {
  return (
    <div className="bg-white pb-20 pt-8">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <nav className="mb-8 text-sm text-text-body/80">
          <Link href="/" className="hover:text-shio-heading">
            TOP
          </Link>
          <span className="mx-2">&gt;</span>
          <span>インタビュー</span>
        </nav>

        <h1 className="mb-12 text-3xl font-bold text-shio-heading md:text-4xl">
          今井りかのこと——ちょっと長めの自己紹介
        </h1>

        <div className="relative mb-12 aspect-[16/10] max-w-2xl overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/images/hero_portrait-gray-bg-main.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>

        <p className="mb-12 max-w-2xl text-lg leading-relaxed text-text-body">
          なんで議員になったの？ どんな人なの？
          <br />
          気になった方に読んでいただけたら、うれしいです。
        </p>

        <article className="max-w-2xl text-text-body">
          <section className="mb-12">
            <h2 className="mb-6 text-xl font-bold text-shio-heading">
              「届いていない声がある」
            </h2>
            <p className="mb-4 leading-relaxed">
              きっかけは、やっぱり幼稚園でした。テレビでは「子育てしやすい世の中に」と流れているのに、教室は真夏でも扇風機だけ——。「あれ、なんかちがうな」と感じた日が、はじまりでした。
            </p>
            <p className="leading-relaxed">
              周りを見れば、同じようなモヤモヤを抱えている保護者の方、たくさんいらっしゃいました。「制度ではこうなっているはず」なのに、現場に届いていない。そんな声を、誰かが橋渡ししないといけないのでは、と思うようになりました。
            </p>
          </section>

          <div className="relative mb-12 aspect-[16/10] overflow-hidden rounded-xl">
            <Image src="/images/profile_with-child-studio.jpg" alt="" fill className="object-cover" sizes="672px" />
          </div>

          <section className="mb-12">
            <h2 className="mb-6 text-xl font-bold text-shio-heading">
              「思い切って、手を挙げました」
            </h2>
            <p className="mb-4 leading-relaxed">
              32歳のとき、2人の男の子を育てながら、立候補を決めました。不安もありました。でも、「届けたい」のほうが、少しだけ強かったんです。
            </p>
            <p className="leading-relaxed">
              応援してくださった方、名前を書いてくださった方。あのときの一枚一枚が、今も背中を押してくれています。
            </p>
          </section>

          <div className="relative mb-12 aspect-[16/10] overflow-hidden rounded-xl">
            <Image src="/images/community_mochi-festival.jpg" alt="" fill className="object-cover" sizes="672px" />
          </div>

          <section className="mb-12">
            <h2 className="mb-6 text-xl font-bold text-shio-heading">
              「声がかたちになった日」
            </h2>
            <p className="mb-4 leading-relaxed">
              幼稚園にエアコンがついたときは、本当にうれしかった。小さなことに見えるかもしれません。でも、現場の声がかたちになった瞬間でした。
            </p>
            <p className="leading-relaxed">
              暮らしに関わる予算のことも、これからも丁寧に見ていきたいと思っています。
            </p>
          </section>

          <div className="relative mb-12 aspect-[16/10] overflow-hidden rounded-xl">
            <Image src="/images/campaign_wave-blue-sash-back.jpg" alt="" fill className="object-cover" sizes="672px" />
          </div>

          <section>
            <h2 className="mb-6 text-xl font-bold text-shio-heading">
              「まず、目の前の人を大事にしたい」
            </h2>
            <p className="mb-4 leading-relaxed">
              いちばん大事にしているのは、目の前の方のお話を、ちゃんと聴くことです。「いまいさん、ちょっと聞いて」——その一言が、いちばんの励みになります。
            </p>
            <p className="leading-relaxed">
              これからも、まちのこと、子育てのこと、ちょっとした違和感のこと。遠慮なく話しかけてください。お待ちしています。
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
