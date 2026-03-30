'use client';

import React from 'react';
import {
  Users,
  MapPin,
  Handshake,
  Share2,
} from 'lucide-react';
import { ACTIVITY_ICONS } from '@/lib/constants';

interface ActivityIcon {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

const iconMap: Record<string, React.ReactNode> = {
  assembly: <Users size={48} />,
  community: <MapPin size={48} />,
  roundtable: <Handshake size={48} />,
  sns: <Share2 size={48} />,
};

export default function ActivityIcons() {
  const activityItems: ActivityIcon[] = ACTIVITY_ICONS.map((item) => ({
    ...item,
    icon: iconMap[item.id],
  }));

  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="w-full max-w-content mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-cdp-blue text-center mb-12">
          活動の4つの柱
        </h2>

        {/* Grid of 4 activity icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {activityItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Circular icon container */}
              <div
                className={`${item.color.replace('text-', 'bg-')} w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 mb-4`}
              >
                <div className="transform group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
              </div>

              {/* Label */}
              <h3 className="text-lg md:text-xl font-bold text-cdp-blue">
                {item.label}
              </h3>
            </div>
          ))}
        </div>

        {/* Description text */}
        <div className="mt-12 max-w-3xl mx-auto">
          <p className="text-center text-text-body text-base md:text-lg leading-relaxed">
            議会活動、地域との対話、座談会、SNS発信を通じて、市民の皆さんの声を聞き、市政に反映させます。
          </p>
        </div>
      </div>
    </section>
  );
}
