import { Hero } from "@/components/sections/home/hero";
import { Container } from "@/components/layout/container";
import { ProductScreenshot } from "@/components/shared/product-screenshot";
import { Industries } from "@/components/sections/home/industries";
import { Shift } from "@/components/sections/home/shift";
import { Origin } from "@/components/sections/home/origin";
import { Solution } from "@/components/sections/home/solution";
import { ProductOffering } from "@/components/sections/home/product-offering";
import { Teasers } from "@/components/sections/home/teasers";
import { FinalCta } from "@/components/sections/shared/final-cta";
import { finalCta } from "@/content/pages/home";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="pb-16">
        <Container>
          <ProductScreenshot
            label="Canvas — the console"
            caption="Screenshot placeholder: build, observe and control every agent from one pane."
          />
        </Container>
      </section>
      <Industries />
      <Shift />
      <Origin />
      <Solution />
      <ProductOffering />
      <Teasers />
      <FinalCta {...finalCta} />
    </>
  );
}
