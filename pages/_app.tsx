import type { AppProps } from "next/app";
import "modern-normalize";
import "../styles/common/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}