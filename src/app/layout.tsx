import type { Metadata } from "next";
import { Cardo, Commissioner } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { IS_PREVIEW_HOST, SITE_URL } from "@/lib/seo";
import { NHG_HREF, YOUTUBE_CHANNEL_URL } from "@/lib/data";

const cardo = Cardo({
  variable: "--font-cardo",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const commissioner = Commissioner({
  variable: "--font-commissioner",
  subsets: ["latin"],
});

const DEFAULT_DESCRIPTION =
  "La NSH-Genève, section genevoise de la Nouvelle Société Helvétique, organise des conférences et des débats sur la Suisse à Genève.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NSH Genève, conférences et débats sur la Suisse à Genève",
    template: "%s · NSH Genève",
  },
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  robots: IS_PREVIEW_HOST
    ? { index: false, follow: false }
    : { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "fr_CH",
    siteName: "NSH Genève",
    title: "NSH Genève, conférences et débats sur la Suisse à Genève",
    description: DEFAULT_DESCRIPTION,
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "NSH Genève, conférences et débats sur la Suisse à Genève",
    description: DEFAULT_DESCRIPTION,
  },
};

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NSH Genève",
  alternateName: "Nouvelle Société Helvétique, groupe de Genève",
  url: SITE_URL,
  sameAs: [YOUTUBE_CHANNEL_URL],
  parentOrganization: {
    "@type": "Organization",
    name: "Nouvelle Société Helvétique",
    url: NHG_HREF,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Genève",
    addressCountry: "CH",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${cardo.variable} ${commissioner.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_JSON_LD),
          }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
