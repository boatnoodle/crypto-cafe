import React from "react";
import { Button, Col, Layout, Row, Typography } from "antd";
import { useMoralis } from "react-moralis";
import Link from "next/link";
import styled from "styled-components";
import theme from "@theme/main";

const { Header, Footer, Sider, Content } = Layout;

const LayoutStyled = styled(Layout)`
  & .ant-layout-header {
    background: ${theme.colors.main};
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
                <Typography.Title level={2}>
                  <a style={{ color: "white" }}>Crypto Cafe</a>
                </Typography.Title>
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
        <Footer>Footer</Footer>
      </LayoutStyled>
    </div>
  );
};
