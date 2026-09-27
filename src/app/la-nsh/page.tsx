import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";
import {
  COMMITTEE,
  HLS_ARTICLE_HREF,
  NHG_HREF,
  STATUTS_PDF_HREF,
} from "@/lib/data";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "La NSH",
  description:
    "Présentation, mission et comité de la Nouvelle Société Helvétique, section de Genève.",
};

export default function LaNshPage() {
  return (
    <div>
      <PageBanner
        title="La NSH-Genève"
        description="Une association qui réunit des citoyens soucieux de réaffirmer et redéfinir l'identité suisse à travers les défis de chaque époque."
        image={{
          src: asset("/media/hero/geneve-photo.jpg"),
          alt: "Vue de la rade de Genève",
        }}
      />

      <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <section>
              <h2 className="text-[clamp(1.5rem,1.6vw+1rem,1.875rem)] leading-[1.2] text-ink">
                Présentation
              </h2>
              <p className="mt-5 max-w-[60ch] text-base leading-[1.7] text-ink-soft">
                La{" "}
                <a
                  href={NHG_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink underline decoration-line underline-offset-4 hover:text-red"
                >
                  Nouvelle Société Helvétique
                </a>{" "}
                (NSH), fondée en 1914, est une association qui réunit des
                citoyens soucieux de réaffirmer et redéfinir l&apos;identité
                suisse à travers les défis de chaque époque.{" "}
                <a
                  href={HLS_ARTICLE_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink underline decoration-line underline-offset-4 hover:text-red"
                >
                  Héritière de la première Société Helvétique des Lumières
                </a>
                , dissoute en 1848, la NSH vise à fortifier le sentiment
                national et à préparer la Suisse du futur. La NSH se compose
                de diverses sections cantonales appelées « groupes ».
              </p>
            </section>

            <section className="mt-14 border-t border-line pt-10">
              <h2 className="text-[clamp(1.5rem,1.6vw+1rem,1.875rem)] leading-[1.2] text-ink">
                Mission de la NSH-Genève
              </h2>
              <p className="mt-5 max-w-[60ch] text-base leading-[1.7] text-ink-soft">
                La NSH-Genève, ancrée dans un riche tissu local, constitue une
                plateforme de dialogue et de réflexion sur des enjeux
                nationaux et internationaux. Nous nous engageons à encourager
                une citoyenneté active, informée, et consciente des
                responsabilités qui incombent à chaque citoyen dans le cadre
                de notre démocratie directe.
              </p>
              <a
                href={STATUTS_PDF_HREF}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block text-sm text-ink-soft underline decoration-line underline-offset-4 hover:text-red"
              >
                Vers les statuts de la NSH-Genève (cliquez ici)
              </a>
            </section>

            <section className="mt-14 border-t border-line pt-10">
              <h2 className="text-[clamp(1.5rem,1.6vw+1rem,1.875rem)] leading-[1.2] text-ink">
                Un lieu de débat et d&apos;action
              </h2>
              <p className="mt-5 max-w-[60ch] text-base leading-[1.7] text-ink-soft">
                La NSH-Genève offre à ses membres l&apos;opportunité de
                participer à des débats et des conférences qui enrichissent le
                dialogue national et renforce la cohésion de notre société.
              </p>
              <p className="mt-4 max-w-[60ch] text-base leading-[1.7] text-ink-soft">
                Nous invitons tous ceux qui partagent notre vision d&apos;une
                Suisse dynamique, indépendante et prospère à rejoindre nos
                rangs et à contribuer à la construction de l&apos;avenir de
                notre pays.
              </p>
              <p className="mt-4 max-w-[60ch] text-base leading-[1.7] text-ink-soft">
                Rejoignez-nous pour participer activement au renforcement des
                valeurs qui unissent la Suisse et à la promotion d&apos;une
                citoyenneté éclairée, pilier de la prospérité et de
                l&apos;indépendance nationale !
              </p>
              <Link
                href="/adherer"
                className="mt-6 inline-block bg-deep px-6 py-3 text-[0.9375rem] text-deep-text transition-opacity hover:opacity-90"
              >
                Rejoindre la NSH-Genève
              </Link>
            </section>
          </div>

          <aside className="md:col-span-5">
            <div className="border border-line bg-paper-raised p-8">
              <p className="text-sm font-medium uppercase tracking-[0.08em] text-ink-soft">
                En bref
              </p>
              <dl className="mt-5 flex flex-col gap-4 text-sm text-ink-soft">
                <div>
                  <dt className="text-ink">Fondation</dt>
                  <dd className="mt-1">
                    1914, héritière de la Société Helvétique des Lumières
                    (dissoute en 1848)
                  </dd>
                </div>
                <div>
                  <dt className="text-ink">Structure</dt>
                  <dd className="mt-1">
                    Une association nationale composée de groupes cantonaux
                  </dd>
                </div>
                <div>
                  <dt className="text-ink">Ancrage</dt>
                  <dd className="mt-1">
                    Le groupe de Genève, ancré dans un riche tissu local
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>

        <section id="comite" className="mt-20 scroll-mt-24 border-t border-line pt-16">
          <h2 className="text-[clamp(1.75rem,2vw+1rem,2.25rem)] leading-[1.2] text-ink">
            Membres du comité de la NSH-Genève
          </h2>
          <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {COMMITTEE.map((member) => (
              <li key={member.name} className="text-center sm:text-left">
                <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full bg-red sm:mx-0">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="112px"
                    className="object-contain"
                  />
                </div>
                <p className="mt-4 text-base font-medium text-ink">
                  {member.name}
                </p>
                <p className="text-sm text-ink-soft">{member.role}</p>
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="mt-1 inline-block text-sm text-ink-soft underline decoration-line underline-offset-4 hover:text-red"
                  >
                    {member.email}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
