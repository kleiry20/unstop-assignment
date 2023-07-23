import React, { useState } from "react";
import "./Layout.css";
import StatisticsBar from "../StatisticsBar/StatisticsBar";
import { Card, Statistic } from "antd";

import totalAssessmentIcon from "../../assets/totalAssessmentIcon.svg";
import plusButton from "../../assets/plusButton.svg";
import assessmentIcon from "../../assets/assessmentIcon.svg";
import AssessmentCard, {
  EmptyAssessmentCard,
} from "../AssessmentCard/AssessmentCard";
import HeaderComponent from "../Header/HeaderComponent";
import SideBar from "../Sidebar/Sidebar";
import TopicMenu from "../Sidebar/TopicMenu";
import NavBar from "../NavBar/NavBar";

const Layout = () => {
  return (
    <>
      <div style={{ display: "flex", backgroundColor: "#f6f8fa" }}>
        <div className="div-left" style={{ width: "10%" }}>
          <SideBar />
        </div>
        <div
          className="div-right"
          style={{ width: "90%", margin: " 0 1.25rem" }}
        >
          <div>
            <HeaderComponent />
          </div>
          <div className="main-content">
            <div className="assessments-overview only-desktop-view">
              <p className="p-assessment">Assessments Overview</p>
              <StatisticsBar />
            </div>

            <div className="my-assessment">
              <div>
                <p className="p-assessment">My Assessment</p>
              </div>
              <div
                className="card-row"
                style={{
                  width: "100%",
                  display: "flex",
                  gap: "1.88rem",
                  flexWrap: "wrap",
                }}
              >
                <EmptyAssessmentCard />
                <AssessmentCard />
                <AssessmentCard />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="layout-container">
        <NavBar />
        <div className="layout-left">
          <SideBar />
        </div>
        <div className="layout-right">
          <div>
            <HeaderComponent />
          </div>
          <div className="main-content">
            <div className="assessments-overview">
              <p className="p-assessment">Assessments Overview</p>
              <StatisticsBar />
            </div>

            <div className="my-assessment">
              <div>
                <p className="p-assessment">My Assessment</p>
              </div>
              <div
                className="card-row"
                style={{
                  width: "100%",
                  display: "flex",
                  gap: "1.88rem",
                  flexWrap: "wrap",
                }}
              >
                <EmptyAssessmentCard />
                <AssessmentCard />
                <AssessmentCard />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Layout;
