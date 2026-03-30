import React from 'react';
import { SITE } from '@/lib/constants';

export default function SiteFooter() {
  const y = new Date().getFullYear();
  return (
    <footer className="border-t border-black/10 bg-white py-10 text-center text-sm text-text-body/80">
      <p>
        © {y} {SITE.position} {SITE.name}
      </p>
    </footer>
  );
}
