"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  type Locale,
  localeNames,
  localeShortNames,
  locales,
  switchLocalePath,
} from "@/lib/i18n";

/**
 * Two real links rather than a button that swaps state: each language is its
 * own URL, so the toggle stays useful with JS off, is middle-clickable, and
 * tells crawlers both versions exist.
 */
export function LocaleToggle({
  locale,
  label,
  className,
}: {
  locale: Locale;
  label: string;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <div
      data-slot="locale-toggle"
      aria-label={label}
      className={cn(
        "relative flex items-center rounded-full border border-border/60 bg-card/60 p-0.5",
        className,
      )}
    >
      {locales.map((code) => {
        const active = code === locale;
        return (
          <Link
            key={code}
            href={switchLocalePath(pathname, code)}
            // Same page in the other language, not a new one — keep the
            // reader's scroll position instead of Next's default jump to top.
            scroll={false}
            hrefLang={code}
            aria-current={active ? "true" : undefined}
            title={localeNames[code]}
            className={cn(
              "rounded-full px-2.5 py-1 text-xs font-medium transition-colors",
              active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-primary",
            )}
          >
            <span>{localeShortNames[code]}</span>
            <span className="sr-only"> — {localeNames[code]}</span>
          </Link>
        );
      })}
    </div>
  );
}
