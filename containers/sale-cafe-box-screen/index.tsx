import { Button, Col, notification, Row, Spin, Table } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import {
  useApiContract,
  useMoralis,
  useMoralisCloudFunction,
  useMoralisQuery,
  useNewMoralisObject,
  useWeb3ExecuteFunction,
} from "react-moralis";
import { Statistic, Typography } from "antd";
import { cafeNFTAbi } from "../../abi/CafeNFT";
import Image from "next/image";
import theme from "@theme/main";
import { CafeNFT } from "constant";
import axios from "smart-contract/node_modules/axios";
import { weightRandom } from "utils";
import { ButtonStyled } from "@components/Button";
import { ResultModal } from "./components/ResultModal";
import Moralis from "moralis";
const { Countdown } = Statistic;

const { Title } = Typography;

export const SaleCafeBoxScreen = () => {
  const { user, account, chainId, isAuthenticated } = useMoralis();
  const [visibleResultModal, setVisibleResultModal] = useState(false);
  const [isFinished, setIsFinished] = useState(true);
  const [tempRandCafeResult, setTempRandCafeResult] = useState(null);
  const dataSource = CafeNFT?.map((each, index) => ({ ...each, key: index }));

  const {
    isSaving: isSavingCafeNFT,
    error: errorSavingCafeNFT,
    save: saveCafeNFT,
  } = useNewMoralisObject("CafeNFT");

  const {
    fetch: mintCafeNFT,
    data: dataMinting,
    error: errorMinting,
    isLoading,
    isFetching,
  } = useWeb3ExecuteFunction();

  const generateRandomCafeNFT = async () => {
    console.log("generateRandomCafeNFT");
    setIsFinished(false);
    const weights = CafeNFT?.map((each) => each.rate);
    const { item: cafeDetail, index } = weightRandom(CafeNFT, weights) as any;
    const { tier, capacity, employeeLimit } = cafeDetail;
    // console.log(`You get cafe tier ${tier}!!!`);
    setTempRandCafeResult(cafeDetail);

    const baseCafeObject = {
      image: `https://ipfs.moralis.io:2053/ipfs/QmR3CYUvu6vYr4wyfvnwZ424LPCbCYuowYgsM5qScJUeYU/cafe/${tier}.jpeg`,
      name: `Cafe tier ${tier}`,
      description: `This is a cafe tier ${tier}`,
    };

    const metaData = {
      path: `meta-data.json`,
      content: {
        ...baseCafeObject,
        attributes: [
          {
            trait_type: "tier",
            value: tier,
          },
          {
            trait_type: "Capacity",
            value: capacity,
          },
          {
            trait_type: "Employee Limit",
            value: employeeLimit,
          },
        ],
      },
    };

    try {
      //* Save metaData to IPFS.
      const responseIPFS = await axios.post(
        "https://deep-index.moralis.io/api/v2/ipfs/uploadFolder",
        [metaData],
        {
          headers: {
            "X-API-Key":
              "UwzSuJkZMNzLXa0RMf78Zd2F6AevzM3mrK5MWFupZ1NijbA1PvOGJuzlNq3oUU9c",
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      const cid = responseIPFS?.data?.[0]?.path?.replace(
        "https://ipfs.moralis.io:2053/ipfs/",
        ""
      );

      // console.log("CID is", cid);

      //* Mint NFT by smart contract
      await mintCafeNFT({
        params: {
          abi: cafeNFTAbi,
          contractAddress: "0x5e65747ac3e0Dc0B3952DEAd8FCf635E841026e1",
          functionName: "mint",
          params: { _cid: cid },
          chain: chainId,
          msgValue: Moralis.Units.ETH(0.05),
        } as any,
        onSuccess: async (response) => {
          //* Save to db.
          // console.log(response);
          await saveCafeNFT({
            ...baseCafeObject,
            level: 1,
            openingHours: 5,
            capacity,
            employeeLimit,
            user,
          });
        },
        onError: (err) => {
          notification["error"]({
            message: "Transaction failed",
            description: `Please try again`,
          });
        },
      });

      setIsFinished(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (dataMinting) {
      // console.log(dataMinting, "dataMinting");
      setVisibleResultModal(true);
      notification["success"]({
        message: "Build cafe already!",
        description: `Congreaturation you minting success!`,
      });
    }
  }, [dataMinting]);

  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

  const resultModal = useCallback(
    () => (
      <ResultModal
        cafeDetail={tempRandCafeResult}
        visible={visibleResultModal}
        onVisible={(visible) => {
          if (!visible) setTempRandCafeResult(null);
          setVisibleResultModal(visible);
        }}
      />
    ),
    [visibleResultModal, tempRandCafeResult]
  );

  return (
    <div>
      {resultModal()}
      <section
        style={{
          padding: "5rem 0",
          backgroundImage: "url(/images/sale-box-cafe/bg-sale-box.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Row justify="center" gutter={24}>
          <Col>
            <Row justify="center" gutter={[0, 16]}>
              <Col span={24}>
                <div style={{ textAlign: "center" }}>
                  {!isFinished ? (
                    <Spin size="large" />
                  ) : (
                    <Image
                      src="/images/landing-page/random-cafe-nft.png"
                      width="250"
                      height="250"
                    />
                  )}
                </div>
              </Col>
              <Col>
                <ButtonStyled
                  disabled={!isFinished}
                  type="link"
                  onClick={generateRandomCafeNFT}
                >
                  {!isFinished ? `BUILDING...` : `BUY (0.05 ETH)`}
                </ButtonStyled>
              </Col>
            </Row>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <div style={{ width: "350px" }}>
              <Countdown
                title={
                  <Typography.Title
                    level={2}
                    style={{
                      color: theme.colors.secondary,
                      background: "white",
                      borderRadius: 8,
                    }}
                  >
                    Private sale will end in
                  </Typography.Title>
                }
                value={deadline}
                format="D [Day] H [Hour] m [Min] s [Sec]"
                valueStyle={{
                  fontSize: "1.5rem",
                  background: "#b39466b8",
                  padding: "0.4rem",
                }}
              />
            </div>
            <div style={{ marginTop: "1rem" }}>
              <Typography.Title level={2}>
                0/
                <span style={{ fontSize: "2.5rem", color: theme.colors.main }}>
                  100
                </span>
              </Typography.Title>
            </div>
          </Col>
        </Row>
      </section>
      <section
        style={{
          padding: "60px 20px",
          background: theme.colors.main,
        }}
      >
        <Row justify="center">
          <Col>
            {" "}
            <Title
              style={{
                color: "white",
                background: theme.colors.secondary,
                padding: "1rem",
                borderRadius: "2rem",
              }}
            >
              Cafebox Detail
            </Title>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={18}>
            <Table
              dataSource={dataSource}
              columns={columns as any}
              pagination={false}
            />
            ;
          </Col>
        </Row>
      </section>
    </div>
  );
};
const columns = [
  {
    title: "Cafe Image",
    dataIndex: "image",
    key: "image",
    align: "center",
    render: (text: any) => {
      return <Image src={text} width="150" height="150" />;
    },
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Capacity",
    dataIndex: "capacity",
    key: "capacity",
    align: "center",
  },
  {
    title: "Employee Limit",
    dataIndex: "employeeLimit",
    key: "employeeLimit",
    align: "center",
    render: (text: any) => {
      return `1/${text}`;
    },
  },
  {
    title: "Rate (%)",
    dataIndex: "rate",
    key: "rate",
    align: "center",
  },
];
