import type { Metadata } from 'next';
import Link from 'next/link';
import { SNS_LINKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: '議会動画',
  description:
    '橿原市議会での取り上げの様子を、動画でご覧いただけます。',
};

interface VideoCard {
  id: string;
  title: string;
  description: string;
  date: string;
}

const videoCards: VideoCard[] = [
  {
    id: 'video-1',
    title: '令和5年9月定例会',
    description:
      '子どもたちが過ごす場のこと。現場の声をもとに、予算のことも含めてお話ししました。',
    date: '2023年9月',
  },
  {
    id: 'video-2',
    title: '令和5年3月定例会',
    description:
      '保育や子育ての支援について、市の取り組みを確認しました。',
    date: '2023年3月',
  },
  {
    id: 'video-3',
    title: '令和6年6月定例会',
    description:
      '放課後の過ごし方や、子どもの居場所づくりについて。',
    date: '2024年6月',
  },
  {
    id: 'video-4',
    title: '令和6年12月定例会',
    description:
      '子育て支援の予算のこと。暮らしに関わる部分を大切に聞きました。',
    date: '2024年12月',
  },
];

export default function AssemblyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="border-b-4 border-cdp-red">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">議会動画</h1>
          <p className="text-lg text-text-body">Assembly</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-12 border-b pb-8">
          <p className="text-lg leading-relaxed text-text-body">
            議会での様子を、動画でも見られるようにしています。
            「どんなふうに話しているの？」と気になったら、のぞいてみてください。
          </p>
          <p className="mt-4 text-sm text-text-body">
            チャンネル全体は{' '}
            <Link
              href={SNS_LINKS.youtube.url}
              className="font-semibold text-cdp-blue-link hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </Link>
            からもご覧いただけます。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {videoCards.map((video) => (
            <div key={video.id} className="flex flex-col">
              <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg bg-gray-bg">
                <div className="absolute inset-0 flex items-center justify-center text-sm text-text-body">
                  動画URLは順次更新予定です
                </div>
              </div>
              <p className="mb-2 text-sm text-text-body">{video.date}</p>
              <h3 className="mb-2 text-lg font-bold text-text-dark">
                {video.title}
              </h3>
              <p className="text-base leading-relaxed text-text-body">
                {video.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t pt-8">
          <p className="text-sm text-text-body">
            全会派の質問・討論の映像は、橿原市の公式サイトでもご覧いただけます。
          </p>
        </div>
      </section>
    </div>
  );
}
