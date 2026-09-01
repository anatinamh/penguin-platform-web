"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Container } from "@/components/layout/container";
import { LocaleToggle } from "@/components/layout/locale-toggle";
import { getSite } from "@/content";
import { type Locale, localizeHref, stripLocale } from "@/lib/i18n";

// Nav hrefs are all top-level routes, so a prefix match also keeps the parent
// highlighted on any future nested page under it. Compared against the
// locale-stripped path so /es/platform highlights the same item as /platform.
function isActive(pathname: string, href: string) {
  const path = stripLocale(pathname);
  return path === href || path.startsWith(`${href}/`);
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const site = getSite(locale);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  // The home hero and every page's closing FinalCta each have their own
  // "Request a demo" button — showing the header's copy of it at the same
  // time reads as a duplicate. Hide it while either is in view.
  const [showCta, setShowCta] = useState(true);

  // Navigating swaps in a different page's hero/CTA nodes, so reset before the
  // new page's observer reports in — React's sanctioned reset-on-change render
  // pattern, rather than a setState inside the effect body.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setShowCta(true);
  }

  useEffect(() => {
    const watched = ["hero-primary-cta", "contact"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (watched.length === 0) return;

    const intersecting = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) intersecting.add(entry.target);
          else intersecting.delete(entry.target);
        }
        setShowCta(intersecting.size === 0);
      },
      { rootMargin: "-64px 0px 0px 0px" },
    );
    // The observer delivers an initial entry per target, so the first callback
    // establishes the correct state on its own.
    watched.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href={localizeHref("/", locale)}
          className="flex items-center gap-2 font-heading text-xl font-semibold tracking-tight"
        >
          <Image
            src="/mascot/pengui-avatar.png"
            alt=""
            aria-hidden
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
          {site.mainNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={localizeHref(item.href, locale)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group relative py-1 text-sm transition-colors",
                  active ? "font-medium text-primary" : "text-muted-foreground hover:text-primary",
                )}
              >
                {item.label}
                {active ? (
                  // One shared indicator across the whole nav, so navigating
                  // slides it to the new page instead of blinking it in place.
                  <motion.span
                    layoutId="nav-active-underline"
                    aria-hidden
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-primary"
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 420, damping: 34 }
                    }
                  />
                ) : (
                  <span
                    aria-hidden
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-primary/50 transition-transform duration-200 ease-out group-hover:scale-x-100"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LocaleToggle locale={locale} label={site.header.languageLabel} />
          <Button
            asChild
            className={`transition-all duration-200 ${
              showCta ? "opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
            }`}
          >
            <Link href={localizeHref("/request-demo", locale)}>{site.header.requestDemo}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LocaleToggle locale={locale} label={site.header.languageLabel} />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label={site.header.openMenu}>
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>{site.config.name}</SheetTitle>
              </SheetHeader>
              <nav className="mt-4 flex flex-col gap-1 px-2">
                {site.mainNav.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={localizeHref(item.href, locale)}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "rounded-lg border-l-2 px-3 py-2 text-sm font-medium transition-colors",
                        active
                          ? "border-primary bg-primary/8 text-primary"
                          : "border-transparent text-muted-foreground hover:bg-primary/5 hover:text-primary",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Button asChild className="mt-2">
                  <Link
                    href={localizeHref("/request-demo", locale)}
                    onClick={() => setOpen(false)}
                  >
                    {site.header.requestDemo}
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
