import type { AppProps } from 'next/app';
import MainLayout from '@/components/common/layout/layouts/MainLayout';
import '@/styles/base/common.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
