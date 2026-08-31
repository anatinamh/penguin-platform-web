import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { footerNav, siteConfig } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-secondary">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <span className="flex items-center gap-2 font-heading text-lg font-medium tracking-tight">
              <Image
                src="/mascot/pengui-avatar.png"
                alt="Pengui AI"
                width={32}
                height={32}
                className="size-8 rounded-full"
              />
              <span className="flex items-center gap-1.5">
                <span>Pengui</span>
                <span className="text-primary italic">AI</span>
              </span>
            </span>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          <FooterColumn title="Platform" links={footerNav.platform} />
          <FooterColumn title="About" links={footerNav.solutions} />
          <FooterColumn title="Get started" links={footerNav.company} />
        </div>

        <div className="mt-10 border-t border-border/60 pt-6">
          <p className="text-xs text-muted-foreground">
            © {year} {siteConfig.name} · Privacy · Terms
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-medium">{title}</h3>
      <ul className="mt-3 flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
