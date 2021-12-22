import { Button, Col, Row } from "antd";
import React, { useEffect } from "react";
import { useApiContract, useMoralis } from "react-moralis";
import { Typography } from "antd";
import { cafeNFTAbi } from "../../abi/CafeNFT";
import { Slider } from "./components/Slider";

const { Title } = Typography;

export const LandingPageScreen = () => {
  const { account, chainId } = useMoralis();

  // const { runContractFunction, data, error, isLoading, isFetching } =
  //   useApiContract({
  //     abi: cafeNFTAbi,
  //     address: process.env.NEXT_PUBLIC_CAFE_NFT_ADDRESS,
  //     functionName: "balanceOf",
  //     params: {
  //       owner: account,
  //     },
  //     chain: chainId,
  //   } as any);

  // useEffect(() => {
  //   runContractFunction();
  // }, []);

  return (
    <div>
      <Row justify="center" style={{ margin: "2rem" }}>
        <Col>
          <Title>
            {" "}
            Anoucement!! We're close to opening the NFT public sale!
          </Title>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Slider />
        </Col>
      </Row>
    </div>
  );
};
