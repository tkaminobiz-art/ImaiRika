import { Metadata } from 'next';
import HeroFull from '@/components/home/HeroFull';
import HomeBannerCards from '@/components/home/HomeBannerCards';
import VoiceBlock from '@/components/home/VoiceBlock';
import Chronology from '@/components/home/Chronology';
import PolicyThreePillars from '@/components/home/PolicyThreePillars';
import ProfileTeaser from '@/components/home/ProfileTeaser';
import NewsletterSection from '@/components/home/NewsletterSection';
import SnsSection from '@/components/home/SnsSection';
import OfficeBlock from '@/components/home/OfficeBlock';
import CtaSection from '@/components/home/CtaSection';
import LinkBannerRow from '@/components/home/LinkBannerRow';

export const metadata: Metadata = {
  title: {
    absolute: '今井りか | 生活者の立場から、社会の矛盾を。',
  },
  description:
    '橿原市議会議員 今井りかの公式サイト。こども・子育て、地域、対話と発信の3つの柱で橿原市の発展に取り組みます。',
};

/**
 * トップページ — HTML v2 プロトタイプ準拠
 *
 * 構成（上から）:
 * 1. FV（デザイン済み画像）
 * 2. CDPバナーカード
 * 3. Voice ブロック（感情的な導入）
 * 4. 年表（Chronology + Stats）
 * 4. 3本柱（PolicyThreePillars）
 * 5. プロフィールティーザー
 * 6. いまいだより（Newsletter）
 * 7. SNS埋め込み
 * 8. 事務所情報
 * 9. CTA
 * 10. 関連リンクバナー
 */
export default function HomePage() {
  return (
    <>
      <HeroFull />
      <HomeBannerCards />
      <VoiceBlock />
      <Chronology />
      <PolicyThreePillars />
      <ProfileTeaser />
      <NewsletterSection />
      <SnsSection />
      <OfficeBlock />
      <CtaSection />
      <LinkBannerRow />
    </>
  );
}
