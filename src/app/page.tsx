import React from 'react';
import { Metadata } from 'next';
import Hero from '@/components/Hero';
import CardCarousel from '@/components/CardCarousel';
import ColorBanners from '@/components/ColorBanners';
import ActivityIcons from '@/components/ActivityIcons';
import SnsSection from '@/components/SnsSection';
import { POLICY_CARDS, RECENT_ACTIVITIES, LEAFLETS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'ホーム',
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Policy Cards Carousel */}
      <div className="bg-white py-4 md:py-0">
        <CardCarousel
          cards={POLICY_CARDS.map((card) => ({
            id: card.id,
            title: card.title,
            description: card.description,
            image: card.image,
            link: card.link,
          }))}
          title="主な政策"
          showArrows={true}
        />
      </div>

      {/* 4-Color Banners */}
      <ColorBanners />

      {/* Activity Icons */}
      <ActivityIcons />

      {/* Recent Activities Carousel */}
      <div className="bg-gray-bg py-4 md:py-0">
        <CardCarousel
          cards={RECENT_ACTIVITIES.map((activity) => ({
            id: activity.id,
            title: activity.title,
            description: activity.content,
            image: activity.image,
          }))}
          title="最近の活動"
          showArrows={true}
        />
      </div>

      {/* SNS Section */}
      <SnsSection />

      {/* Leaflets Carousel */}
      <div className="bg-white py-4 md:py-0">
        <CardCarousel
          cards={LEAFLETS.map((leaflet) => ({
            id: leaflet.id,
            title: leaflet.title,
            description: leaflet.description,
            image: leaflet.image,
            link: leaflet.pdfLink,
          }))}
          title="ニュースレター・活動報告書"
          showArrows={true}
        />
      </div>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-r from-cdp-blue to-cdp-blue/80">
        <div className="w-full max-w-content mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ご質問やご意見をお聞かせください
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            市民の皆さんの声が市政に反映されることを大切に考えています。
            気軽にお問い合わせいただけます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-cdp-yellow text-cdp-blue font-bold rounded-lg hover:opacity-90 transition-opacity"
            >
              お問い合わせフォーム
            </a>
            <a
              href="mailto:rika.imai0411@gmail.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-cdp-blue font-bold rounded-lg hover:opacity-90 transition-opacity"
            >
              メールを送る
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
