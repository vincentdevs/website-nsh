import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { COMMITTEE, REPLAYS, UPCOMING_EVENT } from "@/lib/data";

export default function HomePage() {
  const featuredReplays = REPLAYS.slice(0, 3);
  const boardLeads = COMMITTEE.slice(0, 3);

  return (
    <>
      <section className="relative">
        <div className="relative h-[476px] w-full overflow-hidden md:h-[544px]">
          <Image
            src={asset("/media/hero/geneve-photo.jpg")}
            alt="Vue aérienne de la rade de Genève et du lac Léman"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/55 to-deep/10" />

          <div className="relative mx-auto flex h-full max-w-[1240px] flex-col justify-end px-6 pb-20 md:px-10 md:pb-24">
            <h1 className="max-w-[20ch] font-serif text-[clamp(2.6rem,4.68vw+1.04rem,4.94rem)] leading-[1.05] tracking-[-0.01em] text-deep-text">
              La NSH-Genève vous souhaite la bienvenue
            </h1>
            <p className="mt-6 max-w-[60ch] text-lg leading-[1.65] text-deep-text/85">
              La Nouvelle Société Helvétique, fondée en 1914, est une
              association qui réunit des citoyens soucieux de réaffirmer et
              redéfinir l&apos;identité suisse à travers les défis de chaque
              époque.
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

        <div className="bg-accent">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-3 px-6 py-6 md:flex-row md:items-center md:justify-between md:gap-6 md:px-10">
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-6">
              <span className="text-xs uppercase tracking-[0.14em] text-paper/75">
                Prochain événement
              </span>
              <span className="font-serif text-xl text-paper">
                {UPCOMING_EVENT.date}
              </span>
              <span className="text-paper/90">{UPCOMING_EVENT.title}</span>
            </div>
            <Link
              href="/evenements"
              className="inline-block shrink-0 border border-paper px-5 py-2.5 text-sm text-paper transition-colors hover:bg-paper hover:text-accent"
            >
              Participer à cet événement
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12 md:gap-12 md:px-10 md:py-20">
          <div className="md:col-span-7">
            <h2 className="text-[clamp(1.75rem,2vw+1rem,2.25rem)] leading-[1.2] text-ink">
              Une plateforme de dialogue et de réflexion
            </h2>
            <p className="mt-6 max-w-[52ch] text-base leading-[1.65] text-ink-soft">
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
          <div className="flex items-start justify-center md:col-span-5 md:justify-end">
            <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-sm">
              <Image
                src={asset("/media/hero/geneve-photo.jpg")}
                alt="Le jet d'eau et la rade de Genève"
                fill
                sizes="(min-width: 768px) 400px, 100vw"
                className="object-cover opacity-80"
                style={{ objectPosition: "70% 40%" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper-raised">
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

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <div
                className="relative w-full overflow-hidden bg-paper"
                style={{ aspectRatio: "16 / 9" }}
              >
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${featuredReplays[0].youtubeId}`}
                  title={featuredReplays[0].title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
              <h3 className="mt-3 text-base font-medium leading-snug text-ink">
                {featuredReplays[0].title}
              </h3>
              <p className="mt-1 text-sm text-ink-soft">
                {featuredReplays[0].speaker} · Conférence du{" "}
                {featuredReplays[0].date}
              </p>
            </div>

            <div className="flex flex-col gap-6 md:col-span-4">
              {featuredReplays.slice(1).map((replay) => (
                <a
                  key={replay.youtubeId}
                  href={`https://www.youtube.com/watch?v=${replay.youtubeId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex gap-3"
                >
                  <div className="relative aspect-video w-32 shrink-0 overflow-hidden bg-paper">
                    <Image
                      src={`https://img.youtube.com/vi/${replay.youtubeId}/hqdefault.jpg`}
                      alt={replay.title}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium leading-snug text-ink group-hover:text-red">
                      {replay.title}
                    </h4>
                    <p className="mt-1 text-xs text-ink-soft">
                      {replay.speaker}
                    </p>
                  </div>
                </a>
              ))}

              <Link
                href="/retransmissions"
                className="mt-2 inline-block border border-ink px-6 py-3 text-center text-[0.9375rem] text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Voir les autres retransmissions
              </Link>
            </div>
          </div>
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

      <section className="border-t border-line bg-paper-raised">
        <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10 md:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <h2 className="text-[clamp(1.75rem,2vw+1rem,2.25rem)] leading-[1.2] text-ink">
                Vous souhaitez participer à notre prochain événement ?
              </h2>
              <p className="mt-4 max-w-[55ch] text-base leading-relaxed text-ink-soft">
                Rejoignez-nous pour participer activement au renforcement des
                valeurs qui unissent la Suisse et à la promotion d&apos;une
                citoyenneté éclairée.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link
                href="/contact"
                className="inline-block bg-deep px-6 py-3 text-[0.9375rem] text-deep-text transition-opacity hover:opacity-90"
              >
                Nous écrire
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
