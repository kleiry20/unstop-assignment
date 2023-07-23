import React, { useState } from "react";
import { Drawer, Button, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./NavBar.css";
import HamburgerIcon from "../../assets/hamburger.svg";

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
          left: "30px",
          top: "10px",
          backgroundColor: "#F2F8FE",
          borderRadius: "3.75rem",
          border: 0,
          padding: "2px",
        }}
      />
      <Drawer
        title="Topics"
        placement="left"
        onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        visible={visible}
        className="mobile-view-menu"
      >
        {/* {menu} */}
        <Menu mode="inline" className="mobile-view-menu">
          <Menu.Item>DashBoard </Menu.Item>
          <Menu.Item>Assessment </Menu.Item>
          <Menu.Item>Library </Menu.Item>
        </Menu>
      </Drawer>
    </nav>
  );
};

export default NavBar;
