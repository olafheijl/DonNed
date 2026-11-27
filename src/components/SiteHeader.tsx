import { siteUrl } from '../sitePaths';
import { useEffect, useRef, useState } from 'react';
import BrandLogo from './BrandLogo';
import Button from './Button';
import { navigation, ui } from '../content';

export default function SiteHeader({ pathname }: { pathname: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const updateLogo = () => setCompact(window.scrollY >= 56);
    updateLogo();
    window.addEventListener('scroll', updateLogo, { passive: true });
    return () => window.removeEventListener('scroll', updateLogo);
  }, []);

  return (
    <header
      className="site-header"
      data-compact={compact}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && menuOpen) {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="header-inner">
        <a className="brand header-brand" href={siteUrl('/')} aria-label="DonNed — Home">
          <span className="header-brand-wordmark" aria-hidden="true">
            <BrandLogo />
          </span>
          <img
            className="header-brand-mark"
            src={siteUrl('/merken/Favicon%20DONNED.png')}
            alt=""
            width={492}
            height={507}
          />
        </a>
        <Button
          className="menu-toggle"
          ref={menuButton}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="hoofdnavigatie"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span aria-hidden="true">☰</span> {ui.menu}
        </Button>
        <nav id="hoofdnavigatie" aria-label={ui.mainNav}>
          {navigation.map(([path, label]) => {
            const active =
              path === '/' ? pathname === path : pathname.startsWith(path);
            const linkProps = {
              href: siteUrl(path),
              'aria-current': pathname === path ? 'page' as const : undefined,
              onClick: () => setMenuOpen(false),
            };

            if (path === '/contact/') {
              return <Button key={path} className="nav-contact" {...linkProps}>{label}</Button>;
            }

            return (
              <a
                key={path}
                className={active ? 'active' : undefined}
                {...linkProps}
              >
                <span>{label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
