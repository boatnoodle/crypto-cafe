import React, { useEffect } from "react";
import { Button, Col, Layout, Row, Typography } from "antd";
import { useMoralis } from "react-moralis";
import Link from "next/link";
import { LandingPageLayout } from "./LandingPageLayout";
import { useRouter } from "next/router";

const { Header, Footer, Content } = Layout;

export const AuthLayout = ({ children }) => {
  const router = useRouter();
  const { authenticate, isAuthenticated, logout, account, chainId } =
    useMoralis();

  useEffect(() => {
    if (!isAuthenticated) authenticate({ onError: () => router.push("/") });
  }, [isAuthenticated]);

  return (
    <LandingPageLayout>
      {!isAuthenticated ? <>Signin with meatamask</> : children}
    </LandingPageLayout>
  );
};
