"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { asset } from "@/lib/asset";

const NAV_ITEMS = [
  { href: "/", label: "Accueil" },
  { href: "/la-nsh", label: "La NSH" },
  { href: "/evenements", label: "Événements" },
  { href: "/retransmissions", label: "Retransmissions" },
  { href: "/adherer", label: "Adhérer" },
  { href: "/soutenir", label: "Soutenir" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-deep">
      <div className="h-1 bg-red" />
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="flex items-center rounded-sm bg-paper px-3 py-2"
          onClick={() => setOpen(false)}
          aria-label="NSH Genève, accueil"
        >
          <Image
            src={asset("/brand/logo-nsh.png")}
            alt="NSH Genève"
            width={300}
            height={150}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
            {NAV_ITEMS.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[0.9rem] tracking-[0.01em] whitespace-nowrap transition-colors ${
                    active ? "text-red" : "text-deep-text hover:text-deep-soft"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-px w-6 bg-deep-text transition-transform ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-deep-text transition-transform ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-deep-soft bg-deep px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-[1.0625rem] text-deep-text"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
