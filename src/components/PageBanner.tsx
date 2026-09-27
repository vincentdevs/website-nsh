import Image from "next/image";
import type { ReactNode } from "react";

type PageBannerProps = {
  title: string;
  description?: string;
  image: {
    src: string;
    alt: string;
  };
  imageWidthClassName?: string;
  imageClassName?: string;
  children?: ReactNode;
};

export function PageBanner({
  title,
  description,
  image,
  imageWidthClassName = "w-64 md:w-80",
  imageClassName = "object-cover",
  children,
}: PageBannerProps) {
  return (
    <div className="antique-paper border-b border-line bg-paper-raised">
      <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
          <div className="max-w-[62ch] md:col-span-7">
            <h1 className="font-serif text-[clamp(2.34rem,3.12vw+1.04rem,3.38rem)] leading-[1.1] text-ink">
              {title}
            </h1>
            {description && (
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                {description}
              </p>
            )}
            {children}
          </div>
          <div className="flex justify-center md:col-span-5 md:justify-end">
            <div
              className={`relative aspect-[4/3] overflow-hidden rounded-sm shadow-[0_18px_40px_-24px_rgba(9,30,5,0.55)] ${imageWidthClassName}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 320px, 260px"
                className={imageClassName}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
