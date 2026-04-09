import React from 'react';
import { SITE } from '@/lib/constants';

export default function SiteFooter() {
  const y = new Date().getFullYear();
  return (
    <footer className="bg-v2-blue px-6 py-7 text-center font-sans text-[11px] font-normal tracking-[0.06em] text-white/70">
      <p>&copy; {y} 今井りか事務所</p>
      <p className="mt-1 text-white/50">
        {SITE.position} {SITE.name}
      </p>
      <p className="mt-3 text-white/60">
        本ウェブサイトの制作には政務活動費を使用しています。
      </p>
    </footer>
  );
}
