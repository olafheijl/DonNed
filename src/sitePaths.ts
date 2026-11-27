const base = import.meta.env?.BASE_URL ?? process.env.DONNED_BASE_PATH ?? '/';
const prefix = base.replace(/\/$/, '');

export function siteUrl(path: string) {
  return path.startsWith('/') && !path.startsWith('//') ? prefix + path : path;
}

export function sitePath(pathname: string) {
  if (pathname === prefix) return '/';
  return pathname.startsWith(prefix + '/') ? pathname.slice(prefix.length) : pathname;
}
