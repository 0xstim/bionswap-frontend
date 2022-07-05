import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { WagmiConfig } from "wagmi";
import { client } from "../configs/chain";
import { Head } from "next/document";
import Menu from "../views/Menu";
import Footer from "../views/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <WagmiConfig client={client}>
        <Menu />
        <Component {...pageProps} />
        <Footer />
      </WagmiConfig>
    </>
  );
}

export default MyApp;