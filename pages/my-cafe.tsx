import { MyCafeScreen } from "@containers/my-cafe-screen";
import { AuthLayout } from "layout/AuthLayout";
import React from "react";

const MyCafe = () => {
  return <MyCafeScreen />;
};

MyCafe.Layout = AuthLayout;

export default MyCafe;
