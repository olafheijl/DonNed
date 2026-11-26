import SiteLayout from './layouts/SiteLayout';
import { getRoute } from './routes';

export default function App({ pathname }: { pathname: string }) {
  const { Page, path } = getRoute(pathname);
  return (
    <SiteLayout pathname={path}>
      <Page />
    </SiteLayout>
  );
}
