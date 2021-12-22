import { Button, Col, Row, Table } from "antd";
import React, { useEffect } from "react";
import { useApiContract, useMoralis } from "react-moralis";
import { Statistic, Typography } from "antd";
import { cafeNFTAbi } from "../../abi/CafeNFT";
import Image from "next/image";
import Link from "next/link";
import theme from "@theme/main";
const { Countdown } = Statistic;

const { Title } = Typography;

export const SaleCafeBoxScreen = () => {
  const { account, chainId } = useMoralis();

  const dataSource = [
    {
      key: "1",
      image: "/images/cafe/1.jpeg",
      name: "Cafe Tier 1",
      capacity: 10,
      employeeLimit: 1,
      rate: 35,
    },
    {
      key: "2",
      image: "/images/cafe/2.jpeg",
      name: "Cafe Tier 2",
      capacity: 20,
      employeeLimit: 2,
      rate: 30,
    },
    {
      key: "3",
      image: "/images/cafe/3.jpeg",
      name: "Cafe Tier 3",
      capacity: 30,
      employeeLimit: 3,
      rate: 20,
    },
    {
      key: "4",
      image: "/images/cafe/4.jpeg",
      name: "Cafe Tier 4",
      capacity: 40,
      employeeLimit: 4,
      rate: 10,
    },
    {
      key: "5",
      image: "/images/cafe/5.jpeg",
      name: "Cafe Tier 5",
      capacity: 50,
      employeeLimit: 5,
      rate: 5,
    },
  ];

  const columns = [
    {
      title: "Cafe Image",
      dataIndex: "image",
      key: "image",
      align: "center",
      render: (text) => {
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
      render: (text) => {
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
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

  return (
    <div>
      <section
        style={{
          margin: "5rem 0",
        }}
      >
        <Row justify="center" gutter={24}>
          <Col>
            <Link href="/sale-cafe-box" passHref>
              <div style={{ cursor: "pointer", textAlign: "center" }}>
                <Image
                  src="/images/landing-page/random-cafe-nft.png"
                  width="250"
                  height="250"
                />
                <Typography.Title
                  level={2}
                  style={{
                    color: "white",
                    background: "#835511",
                    padding: "1rem",
                    borderRadius: "2rem",
                  }}
                >
                  0.05 ETH
                </Typography.Title>
              </div>
            </Link>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <div style={{ width: "350px" }}>
              <Countdown
                title={
                  <Typography.Title
                    level={2}
                    style={{ color: theme.colors.secondary }}
                  >
                    Public sale will end in
                  </Typography.Title>
                }
                value={deadline}
                format="D [Day] H [Hour] m [Min] s [Sec]"
                valueStyle={{
                  fontSize: "1.5rem",
                  border: "2px solid #bbcd93",
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
          margin: "2rem 0",
          padding: "20px",
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
              columns={columns}
              pagination={false}
            />
            ;
          </Col>
        </Row>
      </section>
    </div>
  );
};
