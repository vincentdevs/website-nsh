import Link from "next/link";
import Image from "next/image";
import { FeaturedReplays } from "@/components/FeaturedReplays";
import { MailtoForm } from "@/components/MailtoForm";
import { asset } from "@/lib/asset";
import {
  CERCLE_ROUSSEAU_EVENT,
  COMMITTEE,
  CONTACT_EMAIL,
  REPLAYS,
  UPCOMING_EVENT,
} from "@/lib/data";

export default function HomePage() {
  const featuredReplays = REPLAYS.slice(0, 3);
  const boardLeads = COMMITTEE.slice(0, 3);

  return (
    <>
      <section className="relative">
        <div className="relative min-h-[632px] w-full overflow-hidden md:h-[734px]">
          <Image
            src={asset("/media/hero/geneve-photo.jpg")}
            alt="Vue aérienne de la rade de Genève et du lac Léman"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/55 to-deep/10" />

          <div className="relative mx-auto flex min-h-[632px] max-w-[1240px] flex-col justify-center px-6 py-20 md:h-full md:min-h-0 md:translate-y-[3%] md:px-10 md:py-0">
            <h1 className="max-w-[16.8ch] font-serif text-[clamp(2.6rem,4.68vw+1.04rem,4.94rem)] leading-[1.05] tracking-[-0.01em] text-deep-text">
              La NSH-Genève vous souhaite la bienvenue
            </h1>
            <p className="mt-6 max-w-[63ch] text-lg leading-[1.65] text-deep-text/85">
              La Nouvelle Société Helvétique, fondée en 1914, est une
              association qui réunit des citoyens soucieux de réaffirmer et
              redéfinir l&apos;identité suisse à travers les défis de chaque
              époque. Elle organise des conférences et des débats ouverts à
              tous pour confronter les points de vue sur les grands enjeux
              nationaux et internationaux, et se compose de sections
              cantonales appelées groupes. Ce site est celui du groupe de
              Genève.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/evenements"
                className="bg-paper px-6 py-3 text-[0.9375rem] text-ink transition-colors hover:bg-red hover:text-paper"
              >
                Voir les événements
              </Link>
              <Link
                href="/adherer"
                className="border border-paper px-6 py-3 text-[0.9375rem] text-paper transition-colors hover:border-deep-soft hover:text-deep-soft"
              >
                Rejoindre la NSH-Genève
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-red">
          <div className="mx-auto max-w-[1240px] px-6 py-8 md:px-10">
            <div className="flex flex-col gap-6 border border-paper/25 p-6 md:flex-row md:items-center md:gap-8 md:p-8">
              <div className="relative aspect-video w-full shrink-0 overflow-hidden md:w-56">
                <Image
                  src={UPCOMING_EVENT.photo}
                  alt={UPCOMING_EVENT.title}
                  fill
                  sizes="(min-width: 768px) 224px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <span className="text-xs uppercase tracking-[0.14em] text-paper/75">
                  Prochain événement
                </span>
                <p className="mt-2 font-serif text-2xl text-paper">
                  {UPCOMING_EVENT.date}
                </p>
                <p className="mt-1 text-paper/90">{UPCOMING_EVENT.title}</p>
              </div>
              <Link
                href="/evenements"
                className="inline-block shrink-0 border border-paper px-5 py-2.5 text-sm text-paper transition-colors hover:bg-paper hover:text-red"
              >
                Participer à cet événement
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-paper-raised">
          <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-8 px-6 py-10 md:grid-cols-12 md:items-center md:gap-10 md:px-10">
            <div className="relative aspect-[16/9] w-full overflow-hidden md:col-span-5">
              <Image
                src={CERCLE_ROUSSEAU_EVENT.photo}
                alt={CERCLE_ROUSSEAU_EVENT.title}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="md:col-span-7">
              <span className="inline-block bg-deep px-3 py-1 text-xs uppercase tracking-[0.14em] text-deep-text">
                Événement partenaire · Cercle Rousseau
              </span>
              <h3 className="mt-4 font-serif text-xl leading-snug text-ink md:text-2xl">
                {CERCLE_ROUSSEAU_EVENT.title}
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                {CERCLE_ROUSSEAU_EVENT.date} à {CERCLE_ROUSSEAU_EVENT.time} ·{" "}
                {CERCLE_ROUSSEAU_EVENT.location} · Avec{" "}
                {CERCLE_ROUSSEAU_EVENT.speaker}
              </p>
              <p className="mt-4 max-w-[60ch] text-base leading-[1.65] text-ink-soft">
                {CERCLE_ROUSSEAU_EVENT.summary}
              </p>
              <a
                href={CERCLE_ROUSSEAU_EVENT.href}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block border border-ink px-6 py-3 text-[0.9375rem] text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Voir l&apos;événement sur le site du Cercle Rousseau
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10 md:py-20">
          <h2 className="text-[clamp(1.75rem,2vw+1rem,2.25rem)] leading-[1.2] text-ink">
            Une plateforme de dialogue et de réflexion
          </h2>
          <p className="mt-6 max-w-[60ch] text-base leading-[1.65] text-ink-soft">
            La NSH-Genève, ancrée dans un riche tissu local, constitue une
            plateforme de dialogue et de réflexion sur des enjeux nationaux
            et internationaux. Nous nous engageons à encourager une
            citoyenneté active, informée, et consciente des responsabilités
            qui incombent à chaque citoyen dans le cadre de notre démocratie
            directe.
          </p>
          <Link
            href="/la-nsh"
            className="mt-6 inline-block text-sm text-ink-soft underline decoration-line underline-offset-4 hover:text-red"
          >
            Découvrir la NSH-Genève et son comité
          </Link>
        </div>
      </section>

      <section className="bg-paper-raised">
        <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10 md:py-20">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="text-[clamp(1.75rem,2vw+1rem,2.25rem)] leading-[1.2] text-ink">
              Dernières retransmissions
            </h2>
            <Link
              href="/retransmissions"
              className="text-sm text-ink-soft underline decoration-line underline-offset-4 hover:text-accent"
            >
              Toutes les retransmissions
            </Link>
          </div>

          <FeaturedReplays replays={featuredReplays}>
            <Link
              href="/retransmissions"
              className="mt-2 inline-block border border-ink px-6 py-3 text-center text-[0.9375rem] text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Voir les autres retransmissions
            </Link>
          </FeaturedReplays>
        </div>
      </section>

      <section className="bg-deep text-deep-text">
        <div className="mx-auto max-w-[1240px] px-6 py-14 md:px-10 md:py-16">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-serif text-2xl text-deep-text">
              Membres du comité de la NSH-Genève
            </h2>
            <Link
              href="/la-nsh"
              className="text-sm text-deep-soft underline decoration-deep-soft/40 underline-offset-4 hover:text-red"
            >
              Voir tout le comité
            </Link>
          </div>
          <ul className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {boardLeads.map((member) => (
              <li key={member.name} className="text-center">
                <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-full sm:h-28 sm:w-28">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(min-width: 640px) 112px, 176px"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 text-base font-medium text-deep-text">
                  {member.name}
                </p>
                <p className="text-sm text-deep-soft">{member.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="nous-ecrire" className="bg-paper-raised">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 px-6 py-16 md:grid-cols-12 md:px-10 md:py-20">
          <div className="md:col-span-5">
            <h2 className="text-[clamp(1.75rem,2vw+1rem,2.25rem)] leading-[1.2] text-ink">
              Vous souhaitez participer à notre prochain événement ?
            </h2>
            <p className="mt-4 max-w-[40ch] text-base leading-relaxed text-ink-soft">
              Rejoignez-nous pour participer activement au renforcement des
              valeurs qui unissent la Suisse et à la promotion d&apos;une
              citoyenneté éclairée.
            </p>
          </div>
          <div className="md:col-span-7">
            <MailtoForm recipient={CONTACT_EMAIL} subject="Contact NSH-Genève" />
          </div>
        </div>
      </section>
    </>
  );
}
