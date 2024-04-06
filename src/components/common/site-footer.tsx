import { siteConfig } from '@/config/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 py-6 md:py-0">
      <div className="container flex max-w-screen-2xl flex-col items-center justify-between md:h-14 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{' '}
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            edwinhern
          </a>
          . The source code is available on{' '}
          <a
            href={siteConfig.links.githubRepo}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
