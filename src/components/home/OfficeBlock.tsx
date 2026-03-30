import { CONTACT } from '@/lib/constants';

export default function OfficeBlock() {
  return (
    <section className="bg-section-gray py-12 md:py-16">
      <div className="mx-auto max-w-content px-4 text-center md:px-6">
        <h2 className="mb-6 text-lg font-bold text-shio-heading">お問い合わせ先</h2>
        <p className="mb-2 text-text-body">
          <span className="font-semibold">TEL</span>{' '}
          <a
            href={`tel:${CONTACT.tel.replace(/-/g, '')}`}
            className="text-shio-blue underline-offset-2 hover:underline"
          >
            {CONTACT.tel}
          </a>
        </p>
        <p className="text-text-body">
          <span className="font-semibold">MAIL</span>{' '}
          <a
            href={`mailto:${CONTACT.email}`}
            className="break-all text-shio-blue underline-offset-2 hover:underline"
          >
            {CONTACT.email}
          </a>
        </p>
      </div>
    </section>
  );
}
