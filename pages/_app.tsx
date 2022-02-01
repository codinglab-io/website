import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CodingLab</title>
        <meta
          name="description"
          content="Codinglab est une communauté de developpeurs opensource Français !"
        />
      </Head>
      <Script src="/scripts/egg.js" async />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
