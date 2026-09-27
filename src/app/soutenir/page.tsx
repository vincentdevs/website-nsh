import type { Metadata } from "next";
import Image from "next/image";
import { PageBanner } from "@/components/PageBanner";
import { DON_BANK_DETAILS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Soutenir",
  description:
    "Faire un don à la NSH-Genève, par virement bancaire ou par Twint.",
};

export default function SoutenirPage() {
  return (
    <div>
      <PageBanner
        title="Soutenir"
        description="La NSH-Genève, organisation à but non lucratif, subsiste grâce à la générosité de ses membres et sympathisants. Votre contribution financière revêt une importance capitale, car elle nous permet de poursuivre notre mission avec détermination et efficacité."
        image={{
          src: "/media/hero/geneve-photo.jpg",
          alt: "Vue de Genève et du Léman",
        }}
      />

      <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="text-[clamp(1.5rem,1.6vw+1rem,1.875rem)] leading-[1.2] text-ink">
              Faire un don à la NSH-Genève
            </h2>
            <h3 className="mt-8 text-base font-medium text-ink">
              Virement bancaire
            </h3>
            <dl className="mt-4 flex flex-col gap-3 text-sm text-ink-soft">
              <div className="flex gap-2">
                <dt className="w-32 shrink-0 text-ink">Établissement</dt>
                <dd>{DON_BANK_DETAILS.institution}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-32 shrink-0 text-ink">IBAN</dt>
                <dd>{DON_BANK_DETAILS.iban}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-32 shrink-0 text-ink">N° de compte</dt>
                <dd>{DON_BANK_DETAILS.account}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-32 shrink-0 text-ink">Bénéficiaire</dt>
                <dd>{DON_BANK_DETAILS.beneficiary}</dd>
              </div>
            </dl>
            <a
              href={DON_BANK_DETAILS.pdfHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block border border-ink px-5 py-2.5 text-sm text-ink transition-colors hover:border-red hover:text-red"
            >
              Lien vers la facture de don en .pdf
            </a>
          </div>

          <div className="md:col-span-5">
            <h3 className="text-base font-medium text-ink">Twint</h3>
            <div className="mt-4 overflow-hidden border border-line">
              <Image
                src="/media/twint-don.png"
                alt="Faire un don via Twint à la NSH-Genève"
                width={1024}
                height={467}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
