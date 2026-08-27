"use client";

import { useEffect, useState } from "react";
import { Building, Landmark, ShoppingBag, Users, Zap, type LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { industries } from "@/content/pages/home";

const icons: Record<string, LucideIcon> = {
  zap: Zap,
  "shopping-bag": ShoppingBag,
  landmark: Landmark,
  users: Users,
  building: Building,
};

export function Industries() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => {
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    }, 3200);
    return () => clearInterval(id);
  }, [api]);

  return (
    <section id="industries" className="color-block py-16 sm:py-20">
      <Container className="relative z-[1] flex flex-col items-center text-center">
        <span className="text-sm font-medium text-foreground/70">{industries.eyebrow}</span>
        <h2 className="mt-3 max-w-2xl text-balance font-heading text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
          {industries.title}
        </h2>
        <p className="mt-4 max-w-2xl text-pretty text-foreground/70">{industries.subtitle}</p>

        <Carousel
          setApi={setApi}
          opts={{ loop: true, align: "start" }}
          className="mt-10 w-full"
        >
          <CarouselContent>
            {industries.items.map((item) => {
              const Icon = icons[item.icon];
              return (
                <CarouselItem
                  key={item.name}
                  className="basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-white/95 p-6 text-left shadow-lg backdrop-blur-sm">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      {Icon ? <Icon className="size-5" /> : null}
                    </div>
                    <p className="mt-4 font-heading text-lg font-medium text-foreground">
                      {item.name}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">{item.blurb}</p>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </Container>
    </section>
  );
}
