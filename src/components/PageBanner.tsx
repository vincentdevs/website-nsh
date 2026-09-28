import Image from "next/image";
import type { ReactNode } from "react";

type PageBannerProps = {
  title: string;
  description?: string;
  image: {
    src: string;
    alt: string;
  };
  children?: ReactNode;
};

export function PageBanner({
  title,
  description,
  image,
  children,
}: PageBannerProps) {
  return (
    <section className="relative">
      <div className="relative h-[176px] w-full overflow-hidden md:h-[205px]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/55 to-deep/10" />

        <div className="relative mx-auto flex h-full max-w-[1240px] flex-col justify-end px-6 pb-6 md:px-10 md:pb-8">
          <h1 className="max-w-[20ch] font-serif text-[clamp(1.6rem,2.4vw+0.7rem,2.6rem)] leading-[1.05] tracking-[-0.01em] text-deep-text">
            {title}
          </h1>
          {description && (
            <p className="mt-2 max-w-[60ch] text-sm leading-[1.5] text-deep-text/85 md:min-h-[2.7rem]">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
