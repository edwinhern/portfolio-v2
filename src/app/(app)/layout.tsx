import { PropsWithChildren } from 'react';

import { SiteFooter } from '@/components/common/site-footer';
import { SiteHeader } from '@/components/common/site-header';

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <SiteHeader />
      <main id="home-section" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
