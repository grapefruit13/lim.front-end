import type { AppProps } from 'next/app';
import '@/styles/base/common.scss';
import Header from '@/components/common/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
