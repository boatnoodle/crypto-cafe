import React from "react";
import { Button, Col, Layout, Row, Typography } from "antd";
import { useMoralis } from "react-moralis";

const { Header, Footer, Sider, Content } = Layout;

export const MainLayout = ({ children }) => {
  const { authenticate, isAuthenticated, logout, account, chainId } =
    useMoralis();

  return (
    <div>
      <Layout>
        <Header>
          <Row align="middle">
            <Col flex="auto">
              <Typography.Title style={{ color: "white" }} level={2}>
                Crypto Cafe
              </Typography.Title>
            </Col>
            <Col>
              <Button
                onClick={() =>
                  authenticate({ signingMessage: "Welcome to crypto cafe!" })
                }
              >
                Authenticate
              </Button>
            </Col>
          </Row>
        </Header>
        <Content style={{ minHeight: "100vh" }}>{children}</Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
};
