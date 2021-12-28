import React from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";

export const MyCafeScreen = () => {
  const { user } = useMoralis();

  const { data, error, isLoading } = useMoralisQuery("CafeNFT", (query) =>
    query.equalTo("user", user)
  );
  console.log("data", data);
  console.log("isLoading", isLoading);

  return <div>MyCafeScreen</div>;
};
