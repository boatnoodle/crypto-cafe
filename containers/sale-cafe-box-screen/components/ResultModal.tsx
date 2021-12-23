import { Col, Modal, Row, Typography } from "antd";
import Image from "next/image";
import React from "react";
import theme from "theme/main";

interface Props {
  visible: boolean;
  onVisible: (visible: boolean) => void;
  cafeDetail: any;
}

export const ResultModal: React.FC<Props> = ({
  visible,
  onVisible,
  cafeDetail,
}) => {
  return (
    <Modal
      width="750px"
      visible={visible}
      onCancel={() => onVisible(false)}
      footer={null}
    >
      <Row gutter={[0, 16]} justify="center">
        <Col span={24}>
          <div style={{ textAlign: "center" }}>
            <Typography.Title
              style={{
                color: "white",
                background: theme.colors.main,
                padding: "1rem",
                borderRadius: "2rem",
              }}
              level={4}
            >
              Congratulations you have cafe Tier {cafeDetail?.tier} !
            </Typography.Title>
          </div>
        </Col>
        <Col span={24}>
          <Image src={cafeDetail?.image} width="750" height="750" />
        </Col>
      </Row>
      <Row style={{ marginTop: "2rem" }}>
        <Col>
          <Typography.Title
            style={{
              color: "white",
              background: theme.colors.secondary,
              padding: "0.5rem 2rem",
              borderRadius: "2rem",
            }}
            level={4}
          >
            Cafe Spec
          </Typography.Title>
        </Col>
      </Row>

      <div
        style={{
          width: "100%",
          border: `2px solid ${theme.colors.secondary}`,
          borderRadius: "8px",
          padding: "1rem",
        }}
      >
        <Row>
          <Col span={12}>
            <Typography.Title
              style={{ color: theme.colors.secondary }}
              level={4}
            >
              Name: {cafeDetail?.name}
            </Typography.Title>
            <Typography.Title
              style={{ color: theme.colors.secondary }}
              level={4}
            >
              Rate: {cafeDetail?.rate}
            </Typography.Title>
          </Col>
          <Col span={12}>
            <Typography.Title
              style={{ color: theme.colors.secondary }}
              level={4}
            >
              Capacity: {cafeDetail?.capacity}
            </Typography.Title>
            <Typography.Title
              style={{ color: theme.colors.secondary }}
              level={4}
            >
              Employee Limit: {cafeDetail?.employeeLimit}
            </Typography.Title>
          </Col>
        </Row>
      </div>
    </Modal>
  );
};
