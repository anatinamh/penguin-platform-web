"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Container } from "@/components/layout/container";
import { mainNav, siteConfig } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  // On the home page, the hero has its own "Request a demo" CTA — showing
  // the header's copy of it at the same time reads as a duplicate. Hide it
  // until the hero's own CTA has scrolled out of view.
  const [showCta, setShowCta] = useState(true);

  useEffect(() => {
    const heroCta = document.getElementById("hero-primary-cta");
    if (!heroCta) {
      setShowCta(true);
      return;
    }
    setShowCta(false);
    const observer = new IntersectionObserver(([entry]) => setShowCta(!entry.isIntersecting), {
      rootMargin: "-64px 0px 0px 0px",
    });
    observer.observe(heroCta);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-heading text-xl font-semibold tracking-tight">
          <Image
            src="/mascot/pengui-avatar.png"
            alt="Pengui AI"
            width={32}
            height={32}
            className="size-8 rounded-full"
            priority
          />
          <span className="flex items-center gap-1.5">
            <span>Pengui</span>
            <span className="text-primary italic">AI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            asChild
            className={`transition-all duration-200 ${
              showCta ? "opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
            }`}
          >
            <Link href="/request-demo">Request a demo</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle>{siteConfig.name}</SheetTitle>
            </SheetHeader>
            <nav className="mt-4 flex flex-col gap-4 px-4">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-2">
                <Link href="/request-demo" onClick={() => setOpen(false)}>
                  Request a demo
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
