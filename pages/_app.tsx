import type { AppProps } from "next/app";
import "modern-normalize";
import "../styles/common/globals.scss";
import { Header } from "@components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
