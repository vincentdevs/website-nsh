import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";
import { CONTACT_EMAIL, UPCOMING_EVENTS } from "@/lib/data";
import { asset } from "@/lib/asset";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Événements",
  description:
    "Le calendrier des conférences et débats de la NSH-Genève.",
  alternates: { canonical: "/evenements" },
};

const EVENTS_JSON_LD = UPCOMING_EVENTS.map((event) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: event.title,
  startDate: event.startDateTime,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  description: event.bio,
  location: {
    "@type": "Place",
    name: event.location,
    address: event.address,
  },
  performer: {
    "@type": "Person",
    name: event.speaker,
  },
  organizer: {
    "@type": "Organization",
    name: "NSH Genève",
    url: SITE_URL,
  },
}));

export default function EvenementsPage() {
  let previousMonthLabel = "";

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(EVENTS_JSON_LD) }}
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
        {UPCOMING_EVENTS.length === 0 ? (
          <p className="max-w-[55ch] text-base leading-[1.65] text-ink-soft">
            Aucun événement n&apos;est annoncé pour le moment. Les prochaines
            rencontres seront publiées ici dès qu&apos;elles seront fixées,
            ainsi que dans la lettre d&apos;information de la NSH-Genève.
          </p>
        ) : (
          UPCOMING_EVENTS.map((event) => {
            const showMonthHeader = event.monthLabel !== previousMonthLabel;
            previousMonthLabel = event.monthLabel;
            const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
              `Inscription - ${event.title}`,
            )}`;

            return (
              <div key={event.startDateTime}>
                {showMonthHeader && (
                  <h2 className="border-b border-line pb-3 text-sm font-medium uppercase tracking-[0.08em] text-ink-soft first:mt-0 [&:not(:first-child)]:mt-14">
                    {event.monthLabel}
                  </h2>
                )}

                <article className="border-b border-line py-10">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
                    <div className="relative aspect-[16/9] w-full overflow-hidden md:col-span-5">
                      <Image
                        src={event.photo}
                        alt={event.title}
                        fill
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="object-cover"
                      />
                    </div>

                    <div className="md:col-span-7">
                      <p className="text-sm font-medium uppercase tracking-[0.08em] text-ink-soft">
                        {event.date} · {event.time}
                      </p>
                      <h3 className="mt-2 text-xl font-medium text-ink">
                        {event.title}
                      </h3>
                      <p className="mt-1 text-sm text-ink-soft">
                        Avec {event.speaker}
                      </p>
                      <p className="mt-2 text-sm text-ink-soft">
                        {event.location} · {event.address}
                      </p>
                      <p className="mt-4 max-w-[60ch] text-base leading-[1.65] text-ink-soft">
                        {event.bio}
                      </p>

                      <div className="mt-6 flex flex-col items-start gap-3">
                        <a
                          href={mailtoHref}
                          className="inline-block bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-red"
                        >
                          Participer à cet événement
                        </a>
                        <p className="max-w-[40ch] text-xs text-ink-soft">
                          {event.registrationNote}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })
        )}

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
