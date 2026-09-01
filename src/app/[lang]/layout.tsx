import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DM_Sans, Geist, Geist_Mono, Lora } from "next/font/google";
import "../globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getSite } from "@/content";
import { isLocale, locales } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Both locales are prerendered. English is additionally reachable un-prefixed at
// the site root, via the rewrite in proxy.ts.
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

type LangParams = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { config } = getSite(lang);

  // No `alternates` here: metadata set on the layout applies to every page
  // under it, so a canonical declared at this level would tell crawlers that
  // /es/platform's canonical URL is /es. hreflang/canonical are per-page and
  // belong in each page's own generateMetadata.
  return {
    title: `${config.name} — ${config.tagline}`,
    description: config.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: LangParams & { children: React.ReactNode }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>
          <SiteHeader locale={lang} />
          <main className="flex-1">{children}</main>
          <SiteFooter locale={lang} />
        </TooltipProvider>
      </body>
    </html>
  );
}
