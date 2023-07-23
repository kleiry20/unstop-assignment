import { Button, Card, Divider, Avatar } from "antd";

import plusButton from "../../assets/plusButton.svg";

import assessmentIcon from "../../assets/assessmentIcon.svg";
import dateIcon from "../../assets/dateIcon.svg";
import ellipsisIcon from "../../assets/ellipsis.svg";
import verticalLineIcon from "../../assets/verticalLine.svg";
import linkIcon from "../../assets/link.svg";
import { useState } from "react";
import AssessmentModal from "../ModalComponent/AssessmentModal";

export const EmptyAssessmentCard = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <Card
      //   hoverable
      style={{
        padding: "1.875rem",
        backgroundColor: "#F6F8FA",
        borderRadius: "0.75rem",
        border: "1px dashed var(--system-stroke-2, #DADCE0)",
      }}
      bodyStyle={{
        padding: "0",
      }}
    >
      <div
        style={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "0.62rem",
        }}
        // onClick={handleOpenModal}
      >
        <div
          onClick={handleOpenModal}
          style={{
            display: "flex",
            padding: "0.625rem",
            borderRadius: "4.5rem",
            background: "#FFF",
            height: "2.5rem",
            width: "2.5rem",
          }}
        >
          <img src={plusButton} alt="plusButton" />
        </div>
        <p
          style={{
            fontFamily: "Inter",
            fontSize: "1.125rem",
            fontWeight: "500",
            color: "#1C4980",
          }}
        >
          New Assessment
        </p>
        <p
          style={{
            fontFamily: "Inter",
            fontSize: "0.75rem",
            fontWeight: "500",
            color: "#1C4980",
            textAlign: "center",
          }}
        >
          From here you can add questions of multiple types like MCQs,
          subjective (text or paragraph)!
        </p>
        <AssessmentModal visible={modalVisible} onClose={handleCloseModal} />
      </div>
    </Card>
  );
};

const AssessmentCard = (props: any) => {
  return (
    <Card
      //   hoverable
      className={`${props.class}`}
      style={{
        padding: "1rem",
        //   height: "13.0625rem",
        backgroundColor: "#FFF",
        borderRadius: "0.75rem",
        border: "1px solid #DADCE0",
      }}
      bodyStyle={{
        padding: "0",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          className="card-top"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            className="card-left"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.62rem",
            }}
          >
            <div
              style={{
                display: "flex",
                borderRadius: "4.5rem",
                height: "3.125rem",
                width: "3.125rem",
              }}
            >
              <img src={assessmentIcon} alt="plusButton" />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.12rem",
              }}
            >
              <p
                style={{
                  fontFamily: "Inter",
                  fontSize: "1.125rem",
                  fontWeight: "500",
                  color: "#1C4980",
                }}
              >
                Math Assessment
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p>Job</p>
                <div
                  style={{
                    strokeWidth: "1px",
                    margin: "0.62rem",
                    height: "1rem",
                    color: "#DADCE0",
                  }}
                >
                  <img src={verticalLineIcon} alt="verticalLineIcon" />
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "0.25rem",
                  }}
                >
                  <img src={dateIcon} alt="dateIcon" />
                  <p
                    style={{
                      color: "#8DA4BF",
                      fontFamily: "Inter",
                      fontSize: " 0.75rem",
                      fontStyle: "normal",
                      fontWeight: "500",
                    }}
                  >
                    20 Apr 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="card-right"
            style={{ display: "flex", alignItems: "start", cursor: "pointer" }}
          >
            <img src={ellipsisIcon} alt="ellipsisIcon" />
          </div>
        </div>
        <Divider dashed style={{ margin: "1rem 0" }} />
        <div
          className="card-bottom"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ display: "flex", gap: "0.88rem" }}>
            <div
              style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                color: "#1C4980",
              }}
            >
              <p style={{ fontWeight: "600" }}>00</p>
              <p style={{ fontSize: "0.75rem", fontWeight: "500" }}>Duration</p>
            </div>
            <div
              style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                color: "#1C4980",
              }}
            >
              <p style={{ fontWeight: "600" }}>00</p>
              <p style={{ fontSize: "0.75rem", fontWeight: "500" }}>
                Questions
              </p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "0.625rem" }}>
            <Button
              style={{
                color: "#1C4980",
                padding: "0.125rem 0.5rem 0.125rem 0.375rem",
                borderRadius: "3.125rem",
                border: "1px solid var(--text-100, #1C4980)",
                background: "var(--text-white, #FFF)",
                display: "flex",
                alignItems: "center",
              }}
              icon={<img src={linkIcon} />}
            >
              Share
            </Button>
            <Avatar
              style={{
                borderRadius: "2.0455rem",
                border: "1px solid var(--text-white, #FFF)",
                background: "var(--pastel-neon-blue, #6548EE)",
              }}
            >
              LP
            </Avatar>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AssessmentCard;
