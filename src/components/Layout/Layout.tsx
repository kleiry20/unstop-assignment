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

const Layout = () => {
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  //   const showModal = () => {
  //     setIsModalOpen(true);
  //   };
  return (
    <div className="layout-container">
      <div className="layout-left">side</div>
      <div className="layout-right">
        <div>
          <HeaderComponent />
        </div>
        <div className="main-content">
          <div className="assessments-overview">
            <p className="p-assessment">Assessments Overview</p>
            <StatisticsBar />
            <div>{/* <Statistic title="Active Users" value={112893} /> */}</div>
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
  );
};

export default Layout;
