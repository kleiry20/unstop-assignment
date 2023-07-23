import React from "react";
import { Divider } from "antd";

import toggleButtonIcon from "../../assets/toggleButton.svg";
import NavBar from "../NavBar/NavBar";

const HeaderComponent: React.FC = () => (
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
