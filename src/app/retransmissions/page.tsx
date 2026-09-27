import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { ReplayLibrary } from "@/components/ReplayLibrary";
import { REPLAYS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Retransmissions",
  description:
    "L'ensemble des conférences de la NSH-Genève, classées par date, hébergées sur YouTube.",
};

export default function RetransmissionsPage() {
  return (
    <div>
      <PageBanner
        title="Retransmissions"
        description="Les conférences de la NSH-Genève sont enregistrées afin que celles et ceux qui n'ont pu s'y rendre puissent suivre les échanges dans leur intégralité."
        image={{
          src: "/media/hero/geneve-photo.jpg",
          alt: "Vue du Mont Blanc depuis Genève",
        }}
      />

      <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10 md:py-20">
        <ReplayLibrary replays={REPLAYS} />
      </div>
    </div>
  );
}
