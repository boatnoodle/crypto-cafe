import { Button, Col, Row } from "antd";
import React, { useEffect } from "react";
import { useApiContract, useMoralis, useNFTBalances } from "react-moralis";
import { Typography } from "antd";
import { cafeNFTAbi } from "../../abi/CafeNFT";

const { Title } = Typography;

export const LandingPageScreen = () => {
  const { account } = useMoralis();
  const { runContractFunction, data, error, isLoading, isFetching } =
    useApiContract({
      abi: cafeNFTAbi,
      address: process.env.NEXT_PUBLIC_CAFE_NFT_ADDRESS,
      functionName: "maxSupply",
      // params: {
      //   owner: account,
      // },
    } as any);

  useEffect(() => {
    runContractFunction();
  }, []);

  if (isLoading) return <>loading...</>;
  console.log(account, "account");

  return (
    <div>
      <Row justify="center">
        <Col>
          <Title> Anoucement!! We're close to open NFT public sale!</Title>
          <Button onClick={() => runContractFunction()}>run abi</Button>
        </Col>
      </Row>
    </div>
  );
};
