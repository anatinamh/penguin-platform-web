import { Hero } from "@/components/sections/home/hero";
import { Shift } from "@/components/sections/home/shift";
import { Origin } from "@/components/sections/home/origin";
import { Solution } from "@/components/sections/home/solution";
import { HowItWorks } from "@/components/sections/platform/how-it-works";
import { FinalCta } from "@/components/sections/shared/final-cta";
import { finalCta } from "@/content/pages/home";

export default function Home() {
  return (
    <>
      <Hero />
      <Shift />
      <Origin />
      <Solution />
      <HowItWorks />
      <FinalCta {...finalCta} />
    </>
  );
}
