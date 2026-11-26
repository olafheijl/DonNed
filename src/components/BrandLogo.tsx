import { useState } from 'react';

export default function BrandLogo({ product = false }: { product?: boolean }) {
  const [failed, setFailed] = useState(false);
  const file = product ? 'logo retscan.jpg' : 'Logo DONNED.jpg';
  const label = product ? 'RetScan' : 'DonNed';

  return failed ? (
    <span className="brand-name">
      {label}
      <span aria-hidden="true">.</span>
    </span>
  ) : (
    <img
      className={product ? 'brand-img brand-img--retscan' : 'brand-img'}
      src={`/merken/${encodeURIComponent(file)}`}
      alt={label}
      onError={() => setFailed(true)}
    />
  );
}
