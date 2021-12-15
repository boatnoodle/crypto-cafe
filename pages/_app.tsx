import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Button, ConfigProvider } from "antd";
import { MoralisProvider } from "react-moralis";

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
        <Component {...pageProps} />
      </ConfigProvider>
    </MoralisProvider>
  );
}

export default MyApp;
