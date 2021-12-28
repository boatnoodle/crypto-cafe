import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { LandingPageLayout } from "./LandingPageLayout";
import { useRouter } from "next/router";

export const AuthLayout = ({ children }) => {
  const router = useRouter();
  const { isInitialized, authenticate, isAuthenticated } = useMoralis();

  useEffect(() => {
    if (isInitialized)
      if (!isAuthenticated) authenticate({ onError: () => router.push("/") });
  }, [isAuthenticated, authenticate, isInitialized]);

  return (
    <LandingPageLayout>
      {isInitialized && !isAuthenticated ? (
        <>Signin with meatamask</>
      ) : (
        children
      )}
    </LandingPageLayout>
  );
};
