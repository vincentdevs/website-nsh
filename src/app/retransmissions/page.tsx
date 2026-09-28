import type { Metadata } from "next";
import { ReplayLibrary } from "@/components/ReplayLibrary";
import {
  CERCLE_ROUSSEAU_VIDEOS_URL,
  REPLAYS,
  YOUTUBE_CHANNEL_URL,
} from "@/lib/data";
import { frenchDateToISO } from "@/lib/frenchDate";

export const metadata: Metadata = {
  title: "Retransmissions",
  description:
    "L'ensemble des conférences de la NSH-Genève, classées par date, hébergées sur YouTube.",
  alternates: { canonical: "/retransmissions" },
};

const VIDEO_JSON_LD = REPLAYS.map((replay) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: replay.title,
  description: `Conférence de ${replay.speaker} pour la NSH-Genève, ${replay.date}.`,
  uploadDate: frenchDateToISO(replay.date),
  thumbnailUrl: `https://img.youtube.com/vi/${replay.youtubeId}/hqdefault.jpg`,
  embedUrl: `https://www.youtube-nocookie.com/embed/${replay.youtubeId}`,
  contentUrl: `https://www.youtube.com/watch?v=${replay.youtubeId}`,
}));

export default function RetransmissionsPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(VIDEO_JSON_LD) }}
      />
      <div className="border-b border-line bg-red">
        <div className="mx-auto max-w-[1240px] px-6 py-5 md:px-10 md:py-6">
          <h1 className="font-serif text-2xl text-paper md:text-3xl">
            Retransmissions
          </h1>
          <p className="mt-2 max-w-[70ch] text-sm text-paper/85">
            Les conférences de la NSH-Genève sont enregistrées afin que
            celles et ceux qui n&apos;ont pu s&apos;y rendre puissent suivre
            les échanges dans leur intégralité.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1240px] px-6 py-6 md:px-10 md:py-8">
        <p className="mb-6 text-sm text-ink-soft">
          Chaîne YouTube{" "}
          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noreferrer"
            className="text-ink underline decoration-line underline-offset-4 hover:text-red"
          >
            partagée avec le Cercle Rousseau
          </a>
          , qui publie ses propres retransmissions sur{" "}
          <a
            href={CERCLE_ROUSSEAU_VIDEOS_URL}
            target="_blank"
            rel="noreferrer"
            className="text-ink underline decoration-line underline-offset-4 hover:text-red"
          >
            cerclerousseau.ch
          </a>
          .
        </p>
        <ReplayLibrary replays={REPLAYS} />
      </div>
    </div>
  );
}
