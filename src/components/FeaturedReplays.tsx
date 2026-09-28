"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import type { REPLAYS } from "@/lib/data";

export function FeaturedReplays({
  replays,
  children,
}: {
  replays: typeof REPLAYS;
  children?: ReactNode;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = replays[activeIndex];
  const others = replays.filter((_, index) => index !== activeIndex);

  return (
    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-12">
      <div className="md:col-span-8">
        <div
          className="relative w-full overflow-hidden bg-paper"
          style={{ aspectRatio: "16 / 9" }}
        >
          <iframe
            key={active.youtubeId}
            src={`https://www.youtube-nocookie.com/embed/${active.youtubeId}`}
            title={active.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
        <h3 className="mt-3 text-base font-medium leading-snug text-ink">
          {active.title}
        </h3>
        <p className="mt-1 text-sm text-ink-soft">
          {active.speaker} · Conférence du {active.date}
        </p>
      </div>

      <div className="flex flex-col gap-6 md:col-span-4">
        {others.map((replay) => (
          <button
            key={replay.youtubeId}
            type="button"
            onClick={() => setActiveIndex(replays.indexOf(replay))}
            className="group flex gap-3 text-left"
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
              <p className="mt-1 text-xs text-ink-soft">{replay.speaker}</p>
            </div>
          </button>
        ))}
        {children}
      </div>
    </div>
  );
}
