import { Button, Col, Row } from "antd";
import React, { useEffect } from "react";
import { useApiContract, useMoralis } from "react-moralis";
import { Statistic, Typography } from "antd";
import { cafeNFTAbi } from "../../abi/CafeNFT";
import { Slider } from "./components/Slider";
import Image from "next/image";
import Link from "next/link";
import theme from "@theme/main";
const { Countdown } = Statistic;

const { Title } = Typography;

export const LandingPageScreen = () => {
  const { account, chainId } = useMoralis();

  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

  return (
    <div>
      <section>
        <Row justify="center" style={{ margin: "2rem" }}>
          <Col>
            <Title
              style={{
                color: "white",
                background: theme.colors.secondary,
                padding: "1rem",
                borderRadius: "2rem",
              }}
            >
              Annoucement!! We're opening the NFT private sale!
            </Title>
          </Col>
        </Row>
        <Row justify="center" style={{ margin: "2rem" }}>
          <Col>
            <Slider />
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
                  Let's destiny bring your cafe!
                </Typography.Title>
              </div>
            </Link>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <Countdown
              title={
                <Typography.Title
                  level={2}
                  style={{ color: theme.colors.secondary }}
                >
                  Private sale will end in
                </Typography.Title>
              }
              value={deadline}
              format="D [Day] H [Hour] m [Min] s [Sec]"
              valueStyle={{
                fontSize: "1.5rem",
                border: "2px solid white",
                padding: "0.4rem",
                color: "#bbcd93",
              }}
            />
          </Col>
        </Row>
      </section>
      <section style={{ padding: "20px", margin: "2rem 0" }}>
        <Row justify="center">
          <Col>
            <Title
              style={{
                color: "white",
                background: theme.colors.secondary,
                padding: "1rem",
                borderRadius: "2rem",
              }}
            >
              Our Roadmap
            </Title>
          </Col>
          <Col span={24}>
            <div style={{ textAlign: "center" }}>
              <Image
                src="/images/landing-page/road-map.png"
                width="800"
                height="800"
              />
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};
