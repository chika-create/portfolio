import type { AppProps } from 'next/app';
import Script from 'next/script';
import 'modern-normalize';
import '../styles/common/globals.scss';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      )}

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
