"use client";

import {
  ChevronDown,
  Folder,
  Home,
  MessageSquare,
  MoreVertical,
  Plus,
  Search,
  SendHorizonal,
  Sparkles,
  SlidersHorizontal,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * A scaled-down rendering of the real Pengui app — sidebar plus chat home —
 * driven entirely by one accent colour and one brand name.
 *
 * Built once and used twice: statically in the white-label hero, and again in
 * the preset picker where clicking a pill re-colours it. Everything but the
 * accent and the brand name is identical across presets; that is the whole
 * point of the demo, so it must not drift between the two placements.
 */
export type InterfaceCopy = {
  newChat: string;
  search: string;
  projects: string;
  projectItems: string[];
  newProject: string;
  penguis: string;
  newPengui: string;
  scheduled: string;
  noScheduled: string;
  canvas: string;
  eyebrow: string;
  greeting: string;
  /** Rendered italic in the accent colour, after `greeting`. */
  greetingName: string;
  /** "{brand}" is replaced with the active preset's name. */
  subtext: string;
  assistantPill: string;
  inputPlaceholder: string;
  addContext: string;
  tools: string;
  recentChats: string;
  seeAllChats: string;
  chats: { title: string; assistant: string; time: string }[];
  user: { name: string; email: string };
};

export function PenguiInterface({
  accent,
  brand,
  copy,
  className,
  /** Narrow icon rail instead of the full navigation. */
  collapsed,
  /** The recent-chats list below the composer. */
  showRecentChats = true,
}: {
  accent: string;
  brand: string;
  copy: InterfaceCopy;
  className?: string;
  collapsed?: boolean;
  showRecentChats?: boolean;
}) {
  // Every accent-driven surface goes through these, so a preset swap can never
  // leave one element on the old colour.
  const onAccent = { backgroundColor: accent };
  const inAccent = { color: accent };
  const tintAccent = {
    backgroundColor: `color-mix(in oklch, ${accent} 14%, transparent)`,
    color: accent,
  };
  // The sidebar itself carries a wash of the accent: at a glance that is what
  // makes Ember look like a different product from Moss, rather than the two
  // differing only in a handful of small details.
  const sidebarTint = {
    backgroundColor: `color-mix(in oklch, ${accent} 7%, var(--secondary))`,
    borderColor: `color-mix(in oklch, ${accent} 18%, transparent)`,
  };

  return (
    <div
      className={cn(
        "flex overflow-hidden rounded-xl border border-border/60 bg-card text-[10px] leading-tight shadow-2xl",
        className,
      )}
    >
      {/* ── Sidebar ─────────────────────────────────────────────────────── */}
      {collapsed ? (
        <aside
          className="hidden w-11 shrink-0 flex-col items-center gap-2 border-r py-2.5 transition-colors duration-300 sm:flex"
          style={sidebarTint}
        >
          <span
            className="size-4 shrink-0 rounded-[5px] transition-colors duration-300"
            style={onAccent}
          />
          <span
            className="mt-1.5 flex size-6 items-center justify-center rounded-md transition-colors duration-300"
            style={tintAccent}
          >
            <Home className="size-3" />
          </span>
          {[Plus, Search, Folder, Sparkles].map((Icon, i) => (
            <span key={i} className="flex size-6 items-center justify-center text-muted-foreground">
              <Icon className="size-3" />
            </span>
          ))}
          <span
            className="mt-auto flex size-5 items-center justify-center rounded-full text-[9px] font-semibold text-white transition-colors duration-300"
            style={onAccent}
          >
            {copy.user.name.charAt(0)}
          </span>
        </aside>
      ) : null}

      <aside
        className={cn(
          "w-[28%] max-w-[168px] shrink-0 flex-col border-r p-2 transition-colors duration-300",
          collapsed ? "hidden" : "hidden sm:flex",
        )}
        style={sidebarTint}
      >
        <div className="flex items-center gap-1.5 px-1 py-1">
          <span
            className="size-4 shrink-0 rounded-[5px] transition-colors duration-300"
            style={onAccent}
          />
          <span className="truncate font-heading text-[11px] font-semibold tracking-tight">
            {brand}
          </span>
        </div>

        <nav className="mt-2.5 flex flex-col gap-0.5">
          <SidebarRow icon={Home} label="Home" active />
          <SidebarRow icon={Plus} label={copy.newChat} />
          <SidebarRow icon={Search} label={copy.search} />
        </nav>

        <SidebarSection label={copy.projects} />
        <div className="flex flex-col gap-0.5">
          {copy.projectItems.map((item) => (
            <SidebarRow key={item} icon={Folder} label={item} />
          ))}
          <SidebarRow icon={Plus} label={copy.newProject} muted />
        </div>

        <SidebarSection label={copy.penguis} />
        <SidebarRow icon={Plus} label={copy.newPengui} muted />

        <SidebarSection label={copy.scheduled} />
        <p className="px-1.5 text-[9px] text-muted-foreground/70">{copy.noScheduled}</p>

        <SidebarSection label={copy.canvas} />

        <div className="mt-auto flex items-center gap-1.5 border-t border-border/60 pt-2.5">
          <span
            className="flex size-5 shrink-0 items-center justify-center rounded-full text-[9px] font-semibold text-white transition-colors duration-300"
            style={onAccent}
          >
            {copy.user.name.charAt(0)}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[9.5px] font-medium">{copy.user.name}</span>
            <span className="block truncate text-[8.5px] text-muted-foreground">
              {copy.user.email}
            </span>
          </span>
          <MoreVertical className="size-3 shrink-0 text-muted-foreground" />
        </div>
      </aside>

      {/* ── Chat home ───────────────────────────────────────────────────── */}
      <div className="flex min-w-0 flex-1 flex-col items-center px-4 py-7">
        <span
          className="mb-2.5 flex size-8 items-center justify-center rounded-full text-[13px] font-semibold text-white shadow-sm transition-colors duration-300"
          style={onAccent}
        >
          {brand.charAt(0)}
        </span>
        <span
          className="text-[8.5px] font-semibold tracking-[0.14em] uppercase transition-colors duration-300"
          style={inAccent}
        >
          {copy.eyebrow}
        </span>
        <p className="mt-1.5 font-heading text-lg font-medium tracking-tight">
          {copy.greeting}{" "}
          <em className="italic transition-colors duration-300" style={inAccent}>
            {copy.greetingName}
          </em>
        </p>
        <p className="mt-1 text-center text-[9.5px] text-muted-foreground">
          {copy.subtext.replace("{brand}", brand)}
        </p>

        <span className="mt-3 inline-flex items-center gap-1 rounded-full border border-border/60 bg-background px-2.5 py-1 text-[9.5px] font-medium">
          <Sparkles className="size-2.5 transition-colors duration-300" style={inAccent} />
          {copy.assistantPill.replace("{brand}", brand)}
          <ChevronDown className="size-2.5 text-muted-foreground" />
        </span>

        <div className="mt-3 w-full max-w-[300px] rounded-lg border border-border/60 bg-background p-2">
          <p className="px-0.5 pt-0.5 pb-2 text-[9.5px] text-muted-foreground/70">
            {copy.inputPlaceholder}
          </p>
          <div className="flex items-center gap-1">
            <Chip icon={Plus} label={copy.addContext} />
            <Chip icon={SlidersHorizontal} label={copy.tools} chevron />
            <span
              className="ml-auto flex size-5 shrink-0 items-center justify-center rounded-full text-white transition-colors duration-300"
              style={onAccent}
            >
              <SendHorizonal className="size-2.5" />
            </span>
          </div>
        </div>

        {showRecentChats ? (
        <div className="mt-4 w-full max-w-[300px]">
          <div className="flex items-baseline justify-between">
            <span className="text-[9.5px] font-medium">{copy.recentChats}</span>
            <span
              className="text-[9px] font-medium transition-colors duration-300"
              style={inAccent}
            >
              {copy.seeAllChats}
            </span>
          </div>
          <div className="mt-1.5 flex flex-col gap-1">
            {copy.chats.map((chat) => (
              <div
                key={chat.title}
                className="flex items-center gap-1.5 rounded-md border border-border/60 bg-background px-2 py-1.5"
              >
                <MessageSquare className="size-2.5 shrink-0 text-muted-foreground" />
                <span className="min-w-0 flex-1 truncate text-[9.5px] font-medium">
                  {chat.title}
                </span>
                <span className="hidden shrink-0 text-[8.5px] text-muted-foreground sm:inline">
                  {chat.assistant.replace("{brand}", brand)}
                </span>
                <span className="shrink-0 text-[8.5px] text-muted-foreground/70">{chat.time}</span>
              </div>
            ))}
          </div>
        </div>
        ) : null}
      </div>
    </div>
  );

  function SidebarRow({
    icon: Icon,
    label,
    active,
    muted,
  }: {
    icon: typeof Home;
    label: string;
    active?: boolean;
    muted?: boolean;
  }) {
    return (
      <span
        className={cn(
          "flex items-center gap-1.5 rounded-md px-1.5 py-1 text-[9.5px] transition-colors duration-300",
          active ? "font-medium" : muted ? "text-muted-foreground/70" : "text-foreground/80",
        )}
        style={active ? tintAccent : undefined}
      >
        <Icon className="size-2.5 shrink-0" />
        <span className="truncate">{label}</span>
      </span>
    );
  }
}

function SidebarSection({ label }: { label: string }) {
  return (
    <div className="mt-3 flex items-center justify-between px-1.5 pb-1">
      <span className="text-[8.5px] font-semibold tracking-[0.1em] text-muted-foreground uppercase">
        {label}
      </span>
      <ChevronDown className="size-2.5 text-muted-foreground/60" />
    </div>
  );
}

function Chip({
  icon: Icon,
  label,
  chevron,
}: {
  icon: typeof Home;
  label: string;
  chevron?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-border/60 px-1.5 py-0.5 text-[8.5px] text-muted-foreground">
      <Icon className="size-2.5" />
      {label}
      {chevron ? <ChevronDown className="size-2" /> : null}
    </span>
  );
}
