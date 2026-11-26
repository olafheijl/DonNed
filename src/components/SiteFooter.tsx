import BrandLogo from './BrandLogo';
import { navigation, ui } from '../content';

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <a className="brand" href="/" aria-label="DonNed — Home">
            <BrandLogo />
          </a>
          <p>[Korte bedrijfsomschrijving]</p>
        </div>
        <nav aria-label={ui.footerNav}>
          {navigation.map(([path, label]) => (
            <a key={path} href={path}>
              {label}
            </a>
          ))}
        </nav>
        <div className="footer-address">
          <h2>Contact</h2>
          <p>
            [Zakelijk e-mailadres]
            <br />
            [Telefoonnummer]
          </p>
          <span>[LinkedIn-link]</span>
        </div>
      </div>
      <div className="shell footer-base">
        <span>© DonNed</span>
        <a href="/privacyverklaring/">Privacyverklaring</a>
        <a href="/cookiebeleid/">Cookiebeleid</a>
      </div>
    </footer>
  );
}
