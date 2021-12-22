import { Button } from "antd";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import { LandingPageScreen } from "../containers/lading-page-screen";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return <LandingPageScreen />;
};

export default Home;
