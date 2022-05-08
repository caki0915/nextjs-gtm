import "../styles/globals.css";
import type { AppProps } from "next/app";
import useEvents from "../gtm/useEvents";
import Tag from "../gtm/Tag";

function MyApp({ Component, pageProps }: AppProps) {
  useEvents();
  return (
    <>
      <Tag />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
