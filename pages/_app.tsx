import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import { MoralisProvider } from "react-moralis";
import Head from "next/head";
import { MainLayout } from "../layout";

const APP_ID = process.env.NEXT_PUBLIC_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL;

function MyApp({ Component, pageProps }: AppProps) {
  const isServerInfo = APP_ID && SERVER_URL ? true : false;

  if (!isServerInfo)
    throw new Error(
      "Missing Moralis Application ID or Server URL. Make sure to set your .env file."
    );

  return (
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <ConfigProvider>
        <Head>
          <title>Crypto Cafe</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ConfigProvider>
    </MoralisProvider>
  );
}

export default MyApp;
