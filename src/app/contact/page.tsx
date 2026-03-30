import type { Metadata } from 'next';
import { Phone, Mail } from 'lucide-react';

function XIcon({ size = 28, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ size = 28, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: 'お問い合わせ | 今井りか',
  description: 'お気軽にお問い合わせください。電話、メール、SNSでのご連絡をお待ちしています。',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="border-b-4" style={{ borderColor: '#004098' }}>
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">お問い合わせ</h1>
          <p className="text-gray-600 text-lg">Contact</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-8">なんでも気軽にどうぞ</h2>

        {/* Lead Text */}
        <div className="space-y-6 text-lg leading-relaxed text-gray-800 mb-12">
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

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone Card */}
          <a
            href="tel:08083054364"
            className="p-6 border-2 rounded-lg hover:shadow-lg transition-shadow bg-white"
            style={{ borderColor: '#004098' }}
          >
            <div className="flex items-start gap-4">
              <div
                className="p-3 rounded-lg flex-shrink-0"
                style={{ backgroundColor: '#004098' }}
              >
                <Phone size={28} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">TEL</h3>
                <p className="text-gray-700 text-base break-all">080-8305-4364</p>
              </div>
            </div>
          </a>

          {/* Email Card */}
          <a
            href="mailto:rika.imai0411@gmail.com"
            className="p-6 border-2 rounded-lg hover:shadow-lg transition-shadow bg-white"
            style={{ borderColor: '#004098' }}
          >
            <div className="flex items-start gap-4">
              <div
                className="p-3 rounded-lg flex-shrink-0"
                style={{ backgroundColor: '#004098' }}
              >
                <Mail size={28} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">MAIL</h3>
                <p className="text-gray-700 text-base break-all">
                  rika.imai0411@gmail.com
                </p>
              </div>
            </div>
          </a>

          {/* X (Twitter) Card */}
          <a
            href="https://twitter.com/imirk411"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border-2 rounded-lg hover:shadow-lg transition-shadow bg-white"
            style={{ borderColor: '#004098' }}
          >
            <div className="flex items-start gap-4">
              <div
                className="p-3 rounded-lg flex-shrink-0"
                style={{ backgroundColor: '#004098' }}
              >
                <XIcon size={28} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">X (Twitter)</h3>
                <p className="text-gray-700 text-base">@imirk411</p>
              </div>
            </div>
          </a>

          {/* Instagram Card */}
          <a
            href="https://www.instagram.com/imai_rika_0411/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border-2 rounded-lg hover:shadow-lg transition-shadow bg-white"
            style={{ borderColor: '#004098' }}
          >
            <div className="flex items-start gap-4">
              <div
                className="p-3 rounded-lg flex-shrink-0"
                style={{ backgroundColor: '#004098' }}
              >
                <InstagramIcon size={28} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Instagram</h3>
                <p className="text-gray-700 text-base">@imai_rika_0411</p>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
