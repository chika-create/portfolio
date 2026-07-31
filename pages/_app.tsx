import type { AppProps } from "next/app";
import "modern-normalize";
import "../styles/common/globals.scss";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
