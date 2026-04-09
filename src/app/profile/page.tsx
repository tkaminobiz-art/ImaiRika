import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'プロフィール',
};

export default function ProfilePage() {
  return (
    <div className="bg-white pb-20 pt-8">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <nav className="mb-8 text-sm text-text-body/80">
          <Link href="/" className="hover:text-shio-heading">
            TOP
          </Link>
          <span className="mx-2">&gt;</span>
          <span>プロフィール</span>
        </nav>

        <h1 className="mb-12 text-3xl font-bold text-shio-heading md:text-4xl">
          プロフィール
        </h1>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr]">
          <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/images/profile_portrait-angle-white-bg.jpg"
              alt="今井りか"
              fill
              className="object-cover"
              priority
              sizes="320px"
            />
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-shio-heading">
                <span aria-hidden>🌸</span>
                基本情報
              </h2>
              <dl className="grid gap-3 text-sm leading-relaxed md:text-base">
                <div>
                  <dt className="font-semibold text-text-body/80">名前</dt>
                  <dd>
                    今井 りか（いまい りか）
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-text-body/80">生年月日</dt>
                  <dd>1986年4月11日</dd>
                </div>
                <div>
                  <dt className="font-semibold text-text-body/80">出身</dt>
                  <dd>奈良県</dd>
                </div>
                <div>
                  <dt className="font-semibold text-text-body/80">学歴</dt>
                  <dd>奈良市立一条高等学校 外国語科 卒業</dd>
                </div>
                <div>
                  <dt className="font-semibold text-text-body/80">家族</dt>
                  <dd>2人の男の子の母</dd>
                </div>
                <div>
                  <dt className="font-semibold text-text-body/80">所属</dt>
                  <dd>立憲民主党</dd>
                </div>
                <div>
                  <dt className="font-semibold text-text-body/80">初当選</dt>
                  <dd>2021年2月</dd>
                </div>
                <div>
                  <dt className="font-semibold text-text-body/80">現在</dt>
                  <dd>2期目</dd>
                </div>
              </dl>
            </section>

            <section className="rounded-xl bg-section-gray/80 p-6 md:p-8">
              <p className="text-lg font-medium leading-relaxed text-text-body">
                「おかしいな」と思ったこと、ありませんか。
                <br />
                私もそうでした。子育てをしながら暮らす中で、
                <br />
                どうしても気になることがあって、届けたくなったんです。
              </p>
            </section>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src="/images/profile_with-child-studio.jpg"
                  alt="息子と"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 280px"
                />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src="/images/profile_family-riverside.jpg"
                  alt="家族と河川敷で"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 280px"
                />
              </div>
            </div>

            <section>
              <h2 className="mb-4 text-lg font-bold text-shio-heading">
                これまでの歩み
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-text-body">
                <p>
                  高校を出てから、いろんな仕事をしてきました。
                  派遣、飲食店、事務、保育の現場。
                  遠回りだったかもしれません。
                  でも、その中で出会った人や経験が、今の私をつくっています。
                </p>
                <p>
                  議員になろうなんて、もともと考えてもいませんでした。
                  きっかけは、子どもを公立幼稚園に預けたこと。
                  テレビでは「子育てしやすい世の中に」と聞くのに、
                  目の前の現実は、ちょっと違っていて。
                  この声、届けたいな。そう思ったのが始まりでした。
                </p>
                <p>
                  32歳のとき、思い切って立候補を決めました。
                  上の子が6歳、下の子は2歳。
                  正直、不安もたくさんありました。
                  それでも「届けたい」の気持ちのほうが強かったんです。
                </p>
                <p>
                  2021年2月、たくさんの方に支えていただいて、初当選。
                  あのとき名前を書いてくださった方々のこと、
                  今も忘れたことはありません。
                </p>
              </div>
            </section>

            <div className="relative h-48 overflow-hidden rounded-xl md:h-56">
              <Image
                src="/images/council_chamber-seat-14.jpg"
                alt="議場の席「14番 今井りか」"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 640px"
              />
            </div>

            <section>
              <h2 className="mb-4 text-lg font-bold text-shio-heading">
                議会での取り組み
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-text-body">
                <p>
                  議員になってからは、毎日が勉強です。
                  「生活者の立場から、社会の矛盾を」見つめる。
                  それが、私の議会活動の出発点です。
                  子育て世代の一人として、家庭や地域で感じる違和感や課題を、市政に届けることを大切にしています。
                </p>
                <p>
                  議会では、子育て支援、教育環境、公共施設の維持や省エネ、
                  地域の暮らしに関わる予算のことなど、
                  市民生活に直結するテーマを継続して取り上げてきました。
                  限られた財源の中で「何を優先するのか」「将来世代にどう責任を持つのか」という視点を、大切にしています。
                </p>
                <p>
                  うれしかったのは、公立幼稚園にエアコンがついたこと。
                  夏、扇風機だけだった教室が気になって、
                  議会で「それっておかしくないですか」と声を上げました。
                  小さなことかもしれません。
                  でも、届けた声がかたちになった瞬間でした。
                </p>
                <p>
                  議会は、形式的な場ではありません。
                  市民の声を、具体的なかたちに変えていく場所だと思っています。
                  一つひとつの施策について、現場の声やデータに基づいて検証し、
                  実効性のある政策につなげていくこと。それを、いつも意識しています。
                </p>
                <p>
                  これからも、市民のみなさまの声に真摯に耳を傾けながら、
                  「安心して暮らせるまち」「子どもたちが希望を持てる未来」。
                  その実現に向けて、一歩ずつ進んでいきます。
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
