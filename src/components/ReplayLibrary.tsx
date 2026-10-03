"use client";

import { useState } from "react";
import type { REPLAYS } from "@/lib/data";

const INITIAL_VISIBLE = 6;

export function ReplayLibrary({ replays }: { replays: typeof REPLAYS }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const active = replays[activeIndex];
  const rest = replays.filter((_, index) => index !== activeIndex);
  const shown = rest.slice(0, visibleCount);
  const hasMore = visibleCount < rest.length;

  return (
    <div>
      <div className="mx-auto max-w-[560px]">
        <div
          className="relative w-full overflow-hidden bg-paper-raised"
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
        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-3">
          <div>
            <h2 className="text-lg font-medium leading-snug text-ink">
              {active.title}
            </h2>
            <p className="mt-1 text-sm text-ink-soft">{active.speaker}</p>
          </div>
          <span className="shrink-0 text-sm text-ink-soft">
            Conférence du {active.date}
          </span>
        </div>
      </div>

      {rest.length > 0 && (
        <div className="mt-16">
          <h3 className="text-sm font-medium uppercase tracking-[0.08em] text-ink-soft">
            Toutes les retransmissions
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((replay) => (
              <a
                key={replay.youtubeId}
                href={`https://www.youtube.com/watch?v=${replay.youtubeId}`}
                target="_blank"
                rel="noreferrer"
                className="group block text-left"
              >
                <div className="relative aspect-video overflow-hidden bg-paper">
                  <img
                    src={`https://img.youtube.com/vi/${replay.youtubeId}/hqdefault.jpg`}
                    alt={replay.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform group-hover:scale-[1.02]"
                  />
                </div>
                <h4 className="mt-3 text-base font-medium leading-snug text-ink group-hover:text-red">
                  {replay.title}
                </h4>
                <p className="mt-1 text-sm text-ink-soft">
                  {replay.speaker} · {replay.date}
                </p>
              </a>
            ))}
          </div>

          {hasMore && (
            <button
              type="button"
              onClick={() => setVisibleCount((v) => v + 6)}
              className="mt-10 border border-ink px-6 py-3 text-[0.9375rem] text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Voir plus de retransmissions
            </button>
          )}
        </div>
      )}
    </div>
  );
}
