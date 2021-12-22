import React from "react";
import { Button, Col, Layout, Row, Typography } from "antd";
import { useMoralis } from "react-moralis";
import Link from "next/link";
import styled from "styled-components";
import theme from "@theme/main";
import Image from "next/image";

const { Header, Footer, Sider, Content } = Layout;

const LayoutStyled = styled(Layout)`
  & .ant-layout-header {
    background: ${theme.colors.main};
    display: grid;
    height: auto;
  }
`;

export const LandingPageLayout = ({ children }) => {
  const { authenticate, isAuthenticated, logout, account, chainId } =
    useMoralis();

  return (
    <div>
      <LayoutStyled>
        <Header>
          <Row align="middle">
            <Col flex="auto">
              <Link href="/" passHref>
                <div style={{ cursor: "pointer" }}>
                  <Row align="middle" gutter={4}>
                    <Col>
                      <div style={{ margin: 0, height: 50 }}>
                        <Image src="/images/logo.png" width="50" height="50" />
                      </div>
                    </Col>
                    <Col>
                      <Typography.Title
                        style={{ color: "white", margin: 0 }}
                        level={4}
                      >
                        rypto Cafe
                      </Typography.Title>
                    </Col>
                  </Row>
                </div>
              </Link>
            </Col>
            <Col>
              {!isAuthenticated ? (
                <Button
                  onClick={() =>
                    authenticate({ signingMessage: "Welcome to Crypto cafe!" })
                  }
                >
                  Sigin with metamask wallet
                </Button>
              ) : (
                <Button danger onClick={logout}>
                  Logout
                </Button>
              )}
            </Col>
          </Row>
        </Header>
        <Content style={{ minHeight: "100vh" }}>{children}</Content>
        <Footer style={{ textAlign: "center" }}>
          <Typography.Title level={4}>
            Copyright © 2021 CryptoCafe.
          </Typography.Title>{" "}
        </Footer>
      </LayoutStyled>
    </div>
  );
};
