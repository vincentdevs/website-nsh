import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/asset";
import {
  ASSOCIATION_FULL_NAME,
  BUS_ACCESS,
  CONTACT_EMAIL,
} from "@/lib/data";

const QUICK_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/la-nsh", label: "La NSH" },
  { href: "/evenements", label: "Événements" },
  { href: "/retransmissions", label: "Retransmissions" },
  { href: "/adherer", label: "Adhérer" },
  { href: "/soutenir", label: "Soutenir" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-deep text-deep-text">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 px-6 py-14 md:grid-cols-3 md:px-10 md:py-16">
        <div>
          <Image
            src={asset("/brand/logo-horizontal.png")}
            alt="NSH Genève"
            width={1742}
            height={363}
            className="h-11 w-auto"
          />
          <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-deep-soft">
            Section genevoise de la Nouvelle Société Helvétique, association
            fondée en 1914. Une plateforme de dialogue et de réflexion sur des
            enjeux nationaux et internationaux.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-deep-text">Lien rapide</p>
          <ul className="mt-3 flex flex-col gap-2">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-deep-soft underline decoration-deep-soft/40 underline-offset-4 hover:text-red"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-deep-text">Nous contacter</p>
          <p className="mt-3 text-sm text-deep-soft">
            Email :{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="underline decoration-deep-soft/40 underline-offset-4 hover:text-red"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="mt-5 text-sm font-medium text-deep-text">
            Accès - Bus
          </p>
          <p className="mt-2 text-sm text-deep-soft">{BUS_ACCESS}</p>
        </div>
      </div>

      <div className="border-t border-deep-soft/20 px-6 py-5 md:px-10">
        <p className="mx-auto max-w-[1240px] text-xs text-deep-soft">
          {ASSOCIATION_FULL_NAME}, association à but non lucratif. Tous droits
          réservés. &copy; {year}.
        </p>
      </div>
    </footer>
  );
}
