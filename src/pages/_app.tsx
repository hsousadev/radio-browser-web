import type { AppProps } from "next/app";
import { GlobalStyles } from "@/shared/styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles /> <Component {...pageProps} />
    </>
  );
}
