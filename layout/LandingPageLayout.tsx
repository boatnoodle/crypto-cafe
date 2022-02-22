import React from "react";
import { Col, Layout, Menu, Row, Typography } from "antd";
import { useMoralis } from "react-moralis";
import Link from "next/link";
import styled from "styled-components";
import theme from "@theme/main";
import Image from "next/image";
import { ButtonDangerStyled, ButtonSecondaryStyled } from "@components/Button";

const { Header, Footer, Content } = Layout;

const LayoutStyled = styled(Layout)`
  & .ant-layout-header {
    background: ${theme.colors.main};
    display: grid;
    height: auto;
    padding: 0.8rem 1rem;
  }
`;

const MenuStyled = styled(Menu)`
  && {
    background: transparent;
  }
  && .ant-menu-item-selected,
  &&& li:hover {
    background-color: ${theme.colors.secondary};
  }
`;

export const LandingPageLayout: React.FC = ({ children }) => {
  const { authenticate, isAuthenticated, logout, user } = useMoralis();

  return (
    <div>
      <LayoutStyled>
        <Header style={{ position: "fixed", zIndex: 999, width: "100%" }}>
          <Row align="middle" gutter={16}>
            <Col>
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
            <Col flex="auto">
              <MenuStyled
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["2"]}
              >
                <Menu.Item>
                  <Link href="sale-cafe-box">{`Sale Cafe`}</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="my-cafe">{`My Cafe`}</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="whitepaper">{`White paper`}</Link>
                </Menu.Item>
                <Menu.Item disabled>{`Marketplace (Coming soon)`}</Menu.Item>
              </MenuStyled>
            </Col>
            <Col>
              {!isAuthenticated ? (
                <ButtonSecondaryStyled
                  style={{
                    display: "grid",
                    fontSize: "1.2rem",
                    alignItems: "center",
                  }}
                  onClick={() =>
                    authenticate({ signingMessage: "Welcome to Crypto cafe!" })
                  }
                >
                  <Row gutter={6} align="middle">
                    <Col>
                      <Image
                        src="/images/landing-page/metamask-icon.png"
                        width="30"
                        height="30"
                      />
                    </Col>
                    <Col>Sigin with metamask wallet</Col>
                  </Row>
                </ButtonSecondaryStyled>
              ) : (
                <ButtonDangerStyled
                  style={{
                    display: "grid",
                    fontSize: "1.2rem",
                    alignItems: "center",
                  }}
                  danger
                  onClick={logout}
                >
                  Logout
                </ButtonDangerStyled>
              )}
            </Col>
          </Row>
        </Header>
        <Content style={{ minHeight: "100vh", marginTop: 90 }}>
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <Typography.Title level={4}>
            Copyright © 2021 CryptoCafe.
          </Typography.Title>{" "}
        </Footer>
      </LayoutStyled>
    </div>
  );
};
