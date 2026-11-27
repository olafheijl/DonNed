import type { ReactNode } from 'react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { ui } from '../content';

export default function SiteLayout({
  pathname,
  children,
}: {
  pathname: string;
  children: ReactNode;
}) {
  return (
    <>
      <a className="skip" href="#inhoud">
        {ui.skip}
      </a>
      <SiteHeader pathname={pathname} />
      <main id="inhoud">{children}</main>
      <SiteFooter />
    </>
  );
}
