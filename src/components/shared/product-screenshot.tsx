import Image from "next/image";
import { LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * A real (or, until one's ready, placeholder) product screenshot. Framed
 * like a browser window (chrome bar + content well) so it reads as "a
 * picture of the app" rather than blending into the marketing page — pass
 * `src` once a real screenshot exists; omit it to keep the placeholder.
 */
export function ProductScreenshot({
  label,
  caption,
  className,
  aspect = "16/10",
  src,
}: {
  label: string;
  caption?: string;
  className?: string;
  aspect?: string;
  src?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-3xl", className)}>
      <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-lg">
        <div className="flex items-center gap-1.5 border-b border-border/60 bg-secondary/50 px-4 py-2.5">
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
        </div>
        {src ? (
          <div className="relative w-full" style={{ aspectRatio: aspect }}>
            <Image
              src={src}
              alt={label}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover object-top"
            />
          </div>
        ) : (
          <div
            className="flex flex-col items-center justify-center gap-3 bg-secondary/25 p-8 text-center"
            style={{ aspectRatio: aspect }}
          >
            <div className="flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <LayoutDashboard className="size-6" />
            </div>
            <p className="text-sm font-medium text-muted-foreground">{label}</p>
            {caption ? (
              <p className="max-w-xs text-xs text-muted-foreground/70">{caption}</p>
            ) : null}
          </div>
        )}
      </div>
      {/* With a real screenshot the caption sits under the frame, where the
          placeholder used to print it inside. */}
      {src && caption ? (
        <p className="mt-4 text-pretty text-center text-sm text-muted-foreground">{caption}</p>
      ) : null}
    </div>
  );
}
