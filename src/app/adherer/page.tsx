import type { Metadata } from "next";
import { MailtoForm } from "@/components/MailtoForm";
import { PageBanner } from "@/components/PageBanner";
import { COTISATIONS, CONTACT_EMAIL } from "@/lib/data";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Adhérer",
  description:
    "Adhérer à la NSH-Genève : formulaire d'adhésion et montants de cotisation.",
  alternates: { canonical: "/adherer" },
};

export default function AdhererPage() {
  return (
    <div>
      <PageBanner
        title="Adhérer"
        description="Rejoignez la NSH-Genève pour participer activement au renforcement des valeurs qui unissent la Suisse et à la promotion d'une citoyenneté éclairée."
        image={{
          src: asset("/media/hero/geneve-photo.jpg"),
          alt: "Vue du lac Léman et de la ville de Genève",
        }}
      />

      <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className="text-[clamp(1.5rem,1.6vw+1rem,1.875rem)] leading-[1.2] text-ink">
              Adhésion
            </h2>
            <p className="mt-4 max-w-[50ch] text-sm text-ink-soft">
              N&apos;oubliez pas de préciser votre nom et adresse e-mail
              (ainsi que votre année de cotisation).
            </p>
            <div className="mt-8">
              <MailtoForm
                recipient={CONTACT_EMAIL}
                subject="Adhésion à la NSH-Genève"
                submitLabel="Envoyer ma demande d'adhésion"
                note="N'oubliez pas de préciser votre nom et adresse e-mail, ainsi que votre année de cotisation."
              />
            </div>
          </div>

          <div className="md:col-span-6">
            <h2 className="text-[clamp(1.5rem,1.6vw+1rem,1.875rem)] leading-[1.2] text-ink">
              Cotisation
            </h2>
            <div className="mt-8 flex flex-col gap-6">
              {COTISATIONS.map((cotisation) => (
                <div
                  key={cotisation.label}
                  className="flex items-center justify-between border border-line bg-paper-raised px-6 py-5"
                >
                  <div>
                    <p className="text-base font-medium text-ink">
                      {cotisation.label}
                    </p>
                    <p className="mt-1 text-sm text-ink-soft">
                      {cotisation.amount}
                    </p>
                  </div>
                  <a
                    href={cotisation.pdfHref}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 border border-ink px-4 py-2 text-sm text-ink transition-colors hover:border-red hover:text-red"
                  >
                    Bulletin de versement .pdf
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-ink-soft">
              Les bulletins de versement QR sont pré-remplis aux coordonnées
              de la NSH-Genève. Merci de préciser l&apos;année de cotisation
              et, pour la cotisation couple, les noms et adresses e-mail des
              deux personnes concernées.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
