import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SnsIconInstagram, SnsIconX } from '@/components/ui/SnsBrandIcons';
import { SNS_LINKS, CONTACT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'お問い合わせ',
};

export default function ContactPage() {
  return (
    <div className="bg-white pb-20 pt-8">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <nav className="mb-8 text-sm text-text-body/80">
          <Link href="/" className="hover:text-shio-heading">
            TOP
          </Link>
          <span className="mx-2">&gt;</span>
          <span>お問い合わせ</span>
        </nav>
        <div className="relative mb-8 h-48 overflow-hidden rounded-xl md:h-56">
          <Image
            src="/images/dialogue_group-board-photo.jpg"
            alt="集合写真"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 1140px"
          />
        </div>
        <h1 className="mb-8 text-3xl font-bold text-shio-heading md:text-4xl">
          なんでも気軽にどうぞ
        </h1>
        <div className="mb-12 max-w-2xl space-y-6 text-lg leading-relaxed text-text-body">
          <p>
            「こんなこと聞いてもいいのかな」——
            <br />
            大丈夫です。なんでもお気軽に。
          </p>
          <p>
            まちのこと、子育てのこと、ちょっと気になること。
            <br />
            お電話でも、メールでも、SNSでも。
            <br />
            「いまいさん、ちょっと聞いて」の一言、お待ちしています。
          </p>
        </div>

        <div className="grid max-w-xl gap-6">
          <a
            href={`tel:${CONTACT.tel.replace(/-/g, '')}`}
            className="rounded-xl border border-black/10 bg-section-gray p-6 transition hover:border-shio-accent"
          >
            <p className="text-sm font-bold text-shio-heading">TEL</p>
            <p className="mt-2 text-xl font-bold text-text-body">{CONTACT.tel}</p>
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="rounded-xl border border-black/10 bg-section-gray p-6 transition hover:border-shio-accent"
          >
            <p className="text-sm font-bold text-shio-heading">MAIL</p>
            <p className="mt-2 break-all text-lg text-text-body">{CONTACT.email}</p>
          </a>
          <div className="rounded-xl border border-black/10 bg-section-gray p-6">
            <p className="mb-4 text-sm font-bold text-shio-heading">SNS</p>
            <div className="flex flex-col gap-4">
              <a
                href={SNS_LINKS.x.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-shio-blue underline-offset-2 transition hover:underline"
              >
                <span className="inline-flex shrink-0 text-text-body">
                  <SnsIconX className="h-9 w-9" />
                </span>
                <span className="text-lg font-medium">
                  X {SNS_LINKS.x.handle}
                </span>
              </a>
              <a
                href={SNS_LINKS.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-shio-blue underline-offset-2 transition hover:underline"
              >
                <span className="inline-flex shrink-0 text-text-body">
                  <SnsIconInstagram className="h-9 w-9" />
                </span>
                <span className="text-lg font-medium">
                  Instagram {SNS_LINKS.instagram.handle}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
