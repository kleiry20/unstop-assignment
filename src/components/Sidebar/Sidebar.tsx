import React from "react";
import { Divider, Layout, Menu, Tag } from "antd";
import "./Sidebar.css";

import DashboardIcon from "../../assets/dashboardIcon.svg";
import SiderAssessmentIcon from "../../assets/siderAssessment.svg";
import LibraryIcon from "../../assets/libraryIcon.svg";

export const MenuItems = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ height: "1.25rem", width: "1.25rem" }}>
        <img src={DashboardIcon} alt="" />
      </div>
      <p>Dashboard</p>
    </div>
  );
};

const SideBar = ({ menu }: any) => {
  return (
    <Layout.Sider
      className="sidebar"
      breakpoint={"lg"}
      theme="light"
      collapsedWidth={0}
      trigger={null}
    >
      <Menu mode="inline" style={{ padding: "1rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Menu.Item style={{ padding: "1rem" }}>
            <div
              style={{
                display: "flex",
                gap: "0.38rem",
                flexDirection: "column",
              }}
            >
              <div>
                <img src={DashboardIcon} alt="" />
              </div>
              <p>Dashboard</p>
            </div>
          </Menu.Item>
          <Menu.Item style={{ padding: "1rem" }}>
            <div>
              <div>
                <img src={SiderAssessmentIcon} alt="SiderAssessmentIcon" />
              </div>
              <p>Assessment</p>
            </div>
          </Menu.Item>
          <Menu.Item style={{ padding: "1rem" }}>
            <div>
              <div>
                <img src={LibraryIcon} alt="LibraryIcon" />
              </div>
              <p>Library</p>
            </div>
          </Menu.Item>
        </div>
        <Divider dashed></Divider>

        <Menu.Item style={{ padding: "1rem", gap: "1rem" }}>
          <div
            style={{ gap: "0.7rem", display: "flex", flexDirection: "column" }}
          >
            <Tag
              color="red"
              style={{
                borderRadius: "1.375rem",
                border: "1px solid var(--accent-new-red, #D63500)",
                background: "var(--accent-red-light, #FBEBEA)",
                color: "var(--accent-new-red, #D63500)",
                fontFamily: "Inter",
                fontSize: "0.625rem",
                fontStyle: "normal",
                fontWeight: "500",
                marginRight: 0,
                textAlign: "center",
              }}
            >
              Admin
            </Tag>
            <div>
              <img src={LibraryIcon} alt="LibraryIcon" />
            </div>
            <div>
              <p>Round</p>
              <p> Status</p>
            </div>
          </div>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};

export default SideBar;
