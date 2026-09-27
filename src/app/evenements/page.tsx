import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";
import { CONTACT_EMAIL, UPCOMING_EVENT } from "@/lib/data";
import { asset } from "@/lib/asset";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Événements",
  description:
    "Le calendrier des conférences et débats de la NSH-Genève.",
  alternates: { canonical: "/evenements" },
};

const EVENT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: UPCOMING_EVENT.title,
  startDate: "2026-10-08T18:30:00+02:00",
  endDate: "2026-10-08T22:00:00+02:00",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  description: UPCOMING_EVENT.bio,
  location: {
    "@type": "Place",
    name: UPCOMING_EVENT.location,
    address: UPCOMING_EVENT.address,
  },
  performer: {
    "@type": "Person",
    name: UPCOMING_EVENT.speaker,
  },
  organizer: {
    "@type": "Organization",
    name: "NSH Genève",
    url: SITE_URL,
  },
};

export default function EvenementsPage() {
  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `Inscription - ${UPCOMING_EVENT.title}`,
  )}`;

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(EVENT_JSON_LD) }}
      />
      <PageBanner
        title="Événements"
        description="La NSH-Genève offre à ses membres l'opportunité de participer à des débats et des conférences qui enrichissent le dialogue national et renforcent la cohésion de notre société."
        image={{
          src: asset("/media/hero/geneve-photo.jpg"),
          alt: "Vue du lac Léman depuis Genève",
        }}
      />

      <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10 md:py-20">
        <h2 className="border-b border-line pb-3 text-sm font-medium uppercase tracking-[0.08em] text-ink-soft">
          {UPCOMING_EVENT.monthLabel}
        </h2>

        <article className="border-b border-line py-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="md:col-span-2">
              <p className="font-serif text-3xl text-ink">
                {UPCOMING_EVENT.dayNumber}
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                {UPCOMING_EVENT.time}
              </p>
            </div>

            <div className="md:col-span-7">
              <h3 className="text-xl font-medium text-ink">
                {UPCOMING_EVENT.title}
              </h3>
              <p className="mt-1 text-sm text-ink-soft">
                Avec {UPCOMING_EVENT.speaker}
              </p>
              <p className="mt-2 text-sm text-ink-soft">
                {UPCOMING_EVENT.location} · {UPCOMING_EVENT.address}
              </p>
              <p className="mt-4 max-w-[60ch] text-base leading-[1.65] text-ink-soft">
                {UPCOMING_EVENT.bio}
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 md:col-span-3 md:items-end">
              <a
                href={mailtoHref}
                className="inline-block bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-red"
              >
                Participer à cet événement
              </a>
              <p className="max-w-[24ch] text-xs text-ink-soft md:text-right">
                {UPCOMING_EVENT.registrationNote}
              </p>
            </div>
          </div>
        </article>

        <p className="mt-10 max-w-[55ch] text-sm text-ink-soft">
          Les prochaines rencontres seront annoncées ici au fur et à mesure,
          ainsi que dans la lettre d&apos;information de la NSH-Genève. Pour
          revoir les conférences passées, consultez les{" "}
          <Link
            href="/retransmissions"
            className="text-ink underline decoration-line underline-offset-4 hover:text-red"
          >
            retransmissions
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
