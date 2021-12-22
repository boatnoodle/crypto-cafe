import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { AuthLayout } from "../layout/AuthLayout";

const SaleCafeBox = () => {
  return <div>Sale cafe box</div>;
};

SaleCafeBox.Layout = AuthLayout;

export default SaleCafeBox;
