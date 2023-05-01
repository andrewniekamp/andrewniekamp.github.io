import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Head from "next/head";

const font = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>rew</title>
        <meta property="og:title" content=":Drew" key="title" />
      </Head>
      <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
