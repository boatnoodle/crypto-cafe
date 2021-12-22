import "assets/antd-custom.less";
import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import { MoralisProvider } from "react-moralis";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "@theme/main";

const APP_ID = process.env.NEXT_PUBLIC_MORALIS_APPLICATION_ID as string;
const SERVER_URL = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL as string;

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout ?? React.Fragment;
  const isServerInfo = APP_ID && SERVER_URL ? true : false;

  if (!isServerInfo)
    throw new Error(
      "Missing Moralis Application ID or Server URL. Make sure to set your .env file."
    );

  return (
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <ConfigProvider>
        <ThemeProvider theme={theme}>
          <Head>
            <title>Crypto Cafe</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ConfigProvider>
    </MoralisProvider>
  );
}

export default MyApp;
