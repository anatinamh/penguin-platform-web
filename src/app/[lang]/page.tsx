import { Hero } from "@/components/sections/home/hero";
import { Shift } from "@/components/sections/home/shift";
import { Origin } from "@/components/sections/home/origin";
import { Solution } from "@/components/sections/home/solution";
import { HowItWorks } from "@/components/sections/platform/how-it-works";
import { FinalCta } from "@/components/sections/shared/final-cta";
import { defaultLocale, isLocale } from "@/lib/i18n";

type LangParams = { params: Promise<{ lang: string }> };

export default async function Home({ params }: LangParams) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;

  return (
    <>
      <Hero locale={locale} />
      <Shift locale={locale} />
      <Origin locale={locale} />
      <Solution locale={locale} />
      <HowItWorks locale={locale} />
      <FinalCta locale={locale} />
    </>
  );
}
