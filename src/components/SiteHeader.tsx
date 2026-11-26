import { useRef, useState } from 'react';
import BrandLogo from './BrandLogo';
import { navigation, ui } from '../content';

export default function SiteHeader({ pathname }: { pathname: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && menuOpen) {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="header-inner">
        <a className="brand" href="/" aria-label="DonNed — Home">
          <BrandLogo />
        </a>
        <button
          className="menu-toggle"
          ref={menuButton}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="hoofdnavigatie"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span aria-hidden="true">☰</span> {ui.menu}
        </button>
        <nav id="hoofdnavigatie" aria-label={ui.mainNav}>
          {navigation.map(([path, label]) => {
            const active =
              path === '/' ? pathname === path : pathname.startsWith(path);
            const classes = [
              active ? 'active' : '',
              path === '/contact/' ? 'nav-contact' : '',
            ]
              .filter(Boolean)
              .join(' ');
            return (
              <a
                key={path}
                href={path}
                aria-current={pathname === path ? 'page' : undefined}
                className={classes}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
