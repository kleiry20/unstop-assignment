import React from "react";
import { Divider, Layout, Space } from "antd";

import toggleButtonIcon from "../../assets/toggleButton.svg";
import NavBar from "../NavBar/NavBar";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  // backgroundColor: "#108ee9",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};

const HeaderComponent: React.FC = () => (
  // <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
  //   <Layout>
  //     <Sider style={siderStyle}>Sider</Sider>
  //     <Layout>
  //       <Header style={headerStyle}>Header</Header>
  //       <Content style={contentStyle}>Content</Content>
  //     </Layout>
  //   </Layout>
  // </Space>
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 1.25rem",
      background: "#fff",
      borderRadius: "0.75rem 0.75rem 0 0",
      borderBottom: "1px solid var(--system-divider, #DDE5EA)",
      height: "4.375rem",
    }}
  >
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
      <NavBar />
      <p
        style={{
          color: "#1C4980",
          // font-family: Inter;
          fontSize: " 1.25rem",
          fontStyle: "normal",
          fontWeight: "600",
        }}
      >
        Assessment
      </p>
      <Divider
        type="vertical"
        style={{ height: "2.875rem", stroke: "#DADCE0" }}
      ></Divider>
      <p
        style={{
          color: "#0073E6",
          // font-family: Inter;
          fontSize: " 0.875rem",
          fontStyle: "normal",
          fontWeight: "600",
        }}
      >
        My Assessments
      </p>
    </div>

    <button style={{ background: "transparent", border: "none" }}>
      <i>
        <img src={toggleButtonIcon} alt="toggleButtonIcon" />
      </i>
    </button>
  </div>
);

export default HeaderComponent;
