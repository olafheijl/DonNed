import { siteUrl } from '../sitePaths';
import { useState } from 'react';

export default function BrandLogo({ product = false }: { product?: boolean }) {
  const [failed, setFailed] = useState(false);
  const file = product ? 'Logo retscan.png' : 'Logo DONNED.png';
  const label = product ? 'RetScan' : 'DonNed';

  return failed ? (
    <span className="brand-name">
      {label}
      <span aria-hidden="true">.</span>
    </span>
  ) : (
    <img
      className={product ? 'brand-img brand-img--retscan' : 'brand-img'}
      src={siteUrl(`/merken/${encodeURIComponent(file)}`)}
      alt={label}
      onError={() => setFailed(true)}
    />
  );
}
