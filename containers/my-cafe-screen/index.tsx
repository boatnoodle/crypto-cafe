import React, { useEffect } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";

export const MyCafeScreen = () => {
  const { user, isAuthenticating } = useMoralis();

  const { fetch, data, error, isLoading } = useMoralisQuery(
    "CafeNFT",
    (query) => query.equalTo("user", "qTk35JRVqJEZKtGwvSXspFhV"),
    [],
    { autoFetch: false }
  );

  if (!user && isAuthenticating) return <>Loading...</>;

  useEffect(() => {
    if (user && !isAuthenticating) {
      console.log("fetch!");
      console.log(user.toJSON());
      fetch();
    }
    return () => {};
  }, [user, isAuthenticating]);

  useEffect(() => {
    if (data?.length > 0) {
      console.log("data!", data);
    }
    return () => {};
  }, [data]);

  return <div>MyCafeScreen</div>;
};
