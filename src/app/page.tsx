import { Metadata } from 'next';
import HeroFull from '@/components/home/HeroFull';
import HomeBannerCards from '@/components/home/HomeBannerCards';
import PolicyLeadSection from '@/components/home/PolicyLeadSection';
import PolicyThreePillars from '@/components/home/PolicyThreePillars';
import AchievementsSection from '@/components/home/AchievementsSection';
import ActivityCircles from '@/components/home/ActivityCircles';
import TopicsCarousel from '@/components/home/TopicsCarousel';
import ProfileTeaser from '@/components/home/ProfileTeaser';
import LinkBannerRow from '@/components/home/LinkBannerRow';
import OfficeBlock from '@/components/home/OfficeBlock';
import SnsColumns from '@/components/home/SnsColumns';

export const metadata: Metadata = {
  title: {
    absolute: '今井りか | 生活者の立場から、社会の矛盾を。',
  },
  description:
    '橿原市議会議員 今井りかの公式サイト。こども・子育て、地域、対話と発信の3つの柱で橿原市の発展に取り組みます。',
};

export default function HomePage() {
  return (
    <>
      <HeroFull />
      <HomeBannerCards />
      <PolicyLeadSection />
      <PolicyThreePillars />
      <AchievementsSection />
      <ActivityCircles />
      <TopicsCarousel />
      <ProfileTeaser />
      <LinkBannerRow />
      <OfficeBlock />
      <SnsColumns />
    </>
  );
}
