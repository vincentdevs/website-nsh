"use client";

import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import type { EVENTS } from "@/lib/data";

type SiteEvent = (typeof EVENTS)[number];

// Le site est exporte en statique : sans ce choix cote navigateur, la home
// continuerait d'annoncer un evenement passe jusqu'au prochain build. Le
// rendu initial reprend le choix fait au build, puis le navigateur bascule
// sur le premier evenement dont l'heure de debut n'est pas encore passee.
function pickNextEvent(events: SiteEvent[], now: number) {
  return (
    [...events]
      .filter((event) => new Date(event.startDateTime).getTime() >= now)
      .sort(
        (a, b) =>
          new Date(a.startDateTime).getTime() -
          new Date(b.startDateTime).getTime(),
      )[0] ?? null
  );
}

// Aucune source a ecouter : l'heure est relue a chaque rendu cote client.
const subscribe = () => () => {};

export function NextEventBanner({
  events,
  builtAt,
}: {
  events: SiteEvent[];
  builtAt: number;
}) {
  // Le HTML statique et l'hydratation utilisent l'heure du build (builtAt),
  // puis React rerend avec l'heure du visiteur. On compare des chaines
  // (startDateTime) pour que la valeur reste stable d'un appel a l'autre.
  const nextStart = useSyncExternalStore(
    subscribe,
    () => pickNextEvent(events, Date.now())?.startDateTime ?? "",
    () => pickNextEvent(events, builtAt)?.startDateTime ?? "",
  );
  const event = events.find((item) => item.startDateTime === nextStart);

  if (!event) return null;

  return (
    <div className="bg-red">
      <div className="mx-auto max-w-[1240px] px-6 py-8 md:px-10">
        <div className="flex flex-col gap-6 border border-paper/25 p-6 md:flex-row md:items-center md:gap-8 md:p-8">
          <div className="relative aspect-video w-full shrink-0 overflow-hidden md:w-56">
            <Image
              src={event.photo}
              alt={event.title}
              fill
              sizes="(min-width: 768px) 224px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <span className="text-xs uppercase tracking-[0.14em] text-paper/75">
              Prochain événement
            </span>
            <p className="mt-2 font-serif text-2xl text-paper">{event.date}</p>
            <p className="mt-1 text-paper/90">{event.title}</p>
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
  );
}
