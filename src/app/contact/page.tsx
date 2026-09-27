import type { Metadata } from "next";
import { MailtoForm } from "@/components/MailtoForm";
import { PageBanner } from "@/components/PageBanner";
import { BUS_ACCESS, CONTACT_EMAIL } from "@/lib/data";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Écrire à la NSH-Genève par email, ou nous rejoindre à Genève, bus 1/5/8/20, arrêt Contamines.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div>
      <PageBanner
        title="Contact"
        description="Une question, le souhait de rejoindre la NSH-Genève, ou toute autre demande : écrivez-nous."
        image={{
          src: asset("/media/hero/geneve-photo.jpg"),
          alt: "Vue de Genève depuis le lac",
        }}
      />

      <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <MailtoForm recipient={CONTACT_EMAIL} subject="Contact NSH-Genève" />
          </div>

          <aside className="md:col-span-5">
            <div className="border border-line bg-paper-raised p-8">
              <p className="text-sm font-medium uppercase tracking-[0.08em] text-ink-soft">
                Nous contacter
              </p>
              <p className="mt-3 text-base text-ink">
                Email :{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="underline decoration-line underline-offset-4 hover:text-red"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="mt-6 text-sm font-medium uppercase tracking-[0.08em] text-ink-soft">
                Accès - Bus
              </p>
              <p className="mt-3 text-base text-ink">{BUS_ACCESS}</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
