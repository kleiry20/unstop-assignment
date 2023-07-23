import React, { useState } from "react";
import { Drawer, Button, Menu, Tag, Divider } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./NavBar.css";
import HamburgerIcon from "../../assets/hamburger.svg";

import DashboardIcon from "../../assets/dashboardIcon.svg";
import SiderAssessmentIcon from "../../assets/siderAssessment.svg";
import LibraryIcon from "../../assets/libraryIcon.svg";

const NavBar = ({ menu }: any) => {
  const [visible, setVisible] = useState(false);

  return (
    <nav className="navbar">
      <Button
        className="menu"
        // type="primary"
        icon={<img src={HamburgerIcon} />}
        onClick={() => setVisible(true)}
        style={{
          position: "absolute",
          left: "13px",
          top: "15px",
          backgroundColor: "#F2F8FE",
          borderRadius: "3.75rem",
          border: 0,
          padding: "2px",
        }}
      />
      <Drawer
        title="Menu"
        placement="left"
        onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        visible={visible}
        className="mobile-view-menu"
      >
        {/* {menu} */}
        <Menu mode="inline">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Menu.Item style={{ padding: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex" }}>
                  <img src={DashboardIcon} alt="" />
                </div>
                <p>Dashboard</p>
              </div>
            </Menu.Item>
            <Menu.Item style={{ padding: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex" }}>
                  <img src={SiderAssessmentIcon} alt="SiderAssessmentIcon" />
                </div>
                <p>Assessment</p>
              </div>
            </Menu.Item>
            <Menu.Item style={{ padding: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex" }}>
                  <img src={LibraryIcon} alt="LibraryIcon" />
                </div>
                <p>Library</p>
              </div>
            </Menu.Item>
          </div>
          <Divider dashed></Divider>

          <Menu.Item style={{ padding: "1rem", gap: "1rem" }}>
            <div
              style={{
                gap: "0.7rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  <img src={LibraryIcon} alt="LibraryIcon" />
                  <p>Round Status</p>
                </div>

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
              </div>
            </div>
          </Menu.Item>
        </Menu>
      </Drawer>
    </nav>
  );
};

export default NavBar;
