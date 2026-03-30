import React from 'react';
import { Metadata } from 'next';
import Hero from '@/components/Hero';
import CardCarousel from '@/components/CardCarousel';
import PickUpMovie from '@/components/PickUpMovie';
import ColorBanners from '@/components/ColorBanners';
import ActivityIcons from '@/components/ActivityIcons';
import SnsSection from '@/components/SnsSection';
import {
  POLICY_CARDS,
  RECENT_ACTIVITIES,
  PICK_UP_MOVIES,
} from '@/lib/data';

export const metadata: Metadata = {
  title: 'ホーム',
  description:
    '橿原市議会議員 今井りかの公式サイト。こども・子育て、地域、対話と発信の3つの柱で橿原市の発展に取り組みます。',
};

export default function Home() {
  return (
    <>
      <Hero />

      <CardCarousel
        titleEn="POLICY TOPICS"
        titleJa="政策TOPICS"
        viewAllHref="/policy"
        cards={POLICY_CARDS.map((c) => ({
          id: c.id,
          title: c.title,
          sub: c.sub,
          description: c.description,
          image: c.image,
          link: c.link,
        }))}
        bg="white"
      />

      <CardCarousel
        titleEn="News"
        titleJa="活動報告"
        viewAllHref="/policy"
        cards={RECENT_ACTIVITIES.map((a) => ({
          id: a.id,
          title: a.title,
          description: a.content,
          image: a.image,
          link: a.link,
        }))}
        bg="gray"
      />

      <PickUpMovie movies={PICK_UP_MOVIES} />

      <ActivityIcons />

      <ColorBanners />

      <SnsSection />
    </>
  );
}
