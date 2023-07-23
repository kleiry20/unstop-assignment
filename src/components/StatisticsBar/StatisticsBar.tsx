import React, { CSSProperties } from "react";
import "./StatisticsBar.css";
import { Card, Divider, Statistic } from "antd";

import totalAssessmentIcon from "../../assets/totalAssessmentIcon.svg";
import totalPurposeIcon from "../../assets/totalPurpose.svg";
import candidateIcon from "../../assets/candidateIcon.svg";
import sourceIcon from "../../assets/sourceIcon.svg";

interface OverviewCardProps {
  style: CSSProperties;
  title: string;
  count?: number;
  icon?: any;
}

interface OverviewCardLargeProps {
  style?: CSSProperties;
  title: string;
  count?: number;
  icon?: any;
  subtitle1Count: number | string;
  subtitle1IncreaseCount: number | string;
  subtitle1: string;
  subtitle2Count: number | string;
  subtitle2IncreaseCount: number | string;
  subtitle2: string;
  subtitle3Count?: number | string;
  subtitle3IncreaseCount?: number | string;
  subtitle3?: string;
  extraContent?: any;
}

interface DividerSectionProps {
  subtitle1Count: number | string;
  subtitle1IncreaseCount: number | string;
  subtitle1: string;
}

export const OverviewCard = ({
  title,
  style,
  count,
  icon,
}: OverviewCardProps) => {
  return (
    <Card
      bordered={false}
      bodyStyle={{
        display: "flex",
        flexDirection: "column",
        rowGap: "0.5rem",
        padding: "1rem 1.25rem 0rem 1.25rem",
      }}
      style={style}
    >
      <p
        style={{
          margin: "0",
          color: "var(--text-100, #1c4980)",
          fontFamily: "Inter",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "600",
        }}
      >
        {title}
      </p>
      <div
        style={{
          display: "flex",
          gap: "0.625rem",
          alignItems: "center",
          marginTop: "8px",
        }}
      >
        <img src={icon} alt="" />
        <p
          style={{
            margin: "0",
            color: "#1C4980",
            fontFamily: "Inter",
            fontSize: "1.25rem",
            fontWeight: "700",
          }}
        >
          {count}
        </p>
      </div>
    </Card>
  );
};

export const OverviewCardLarge = ({
  title,
  style,
  icon,
  subtitle1Count,
  subtitle1IncreaseCount,
  subtitle1,
  subtitle2,
  subtitle2Count,
  subtitle2IncreaseCount,
  subtitle3,
  subtitle3Count,
  subtitle3IncreaseCount,
  extraContent,
}: OverviewCardLargeProps) => {
  return (
    <Card
      bordered={false}
      bodyStyle={{
        display: "flex",
        flexDirection: "column",
        rowGap: "0.5rem",
        padding: "1rem 2rem 0rem 1rem",
      }}
      style={style}
    >
      <p
        style={{
          margin: "0",
          color: "var(--text-100, #1c4980)",
          fontFamily: "Inter",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "600",
        }}
      >
        {title}
      </p>
      <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
        <img src={icon} alt="icon" />
        <div>
          <div
            style={{
              display: "flex",
              columnGap: "0.25rem",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  margin: "0",
                  color: "#1C4980",
                  fontFamily: "Inter",
                  fontSize: "1.25rem",
                  fontWeight: "700",
                }}
              >
                {subtitle1Count}
              </p>
            </div>
            <div>
              <p
                style={{
                  margin: "0",
                  fontFamily: "Inter",
                  fontSize: " 0.75rem",
                  fontWeight: "500",
                  color: "#05C165",
                }}
              >
                {subtitle1IncreaseCount}
              </p>
            </div>
          </div>
          <p
            style={{
              fontSize: "0.75rem",
              fontStyle: "normal",
              fontWeight: "500",
              color: "#1C4980",
            }}
          >
            {subtitle1}
          </p>
        </div>
        <Divider type="vertical" style={{ fontSize: "2.5rem" }} />
        <div>
          <div
            style={{
              display: "flex",
              columnGap: "0.25rem",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  margin: "0",
                  color: "#1C4980",
                  fontFamily: "Inter",
                  fontSize: "1.25rem",
                  fontWeight: "700",
                }}
              >
                {subtitle2Count}
              </p>
            </div>
            <div>
              <p
                style={{
                  margin: "0",
                  fontFamily: "Inter",
                  fontSize: " 0.75rem",
                  fontWeight: "500",
                  color: "#05C165",
                }}
              >
                {subtitle2IncreaseCount}
              </p>
            </div>
          </div>
          <p
            style={{
              fontSize: "0.75rem",
              fontStyle: "normal",
              fontWeight: "500",
              color: "#1C4980",
            }}
          >
            {subtitle2}
          </p>
        </div>
        {extraContent ? (
          <Divider type="vertical" style={{ fontSize: "2.5rem" }} />
        ) : null}
        {extraContent ? (
          <div style={{ marginRight: "24px" }}>
            <div
              style={{
                display: "flex",
                columnGap: "0.25rem",
                alignItems: "center",
              }}
            >
              <div>
                <p
                  style={{
                    margin: "0",
                    color: "#1C4980",
                    fontFamily: "Inter",
                    fontSize: "1.25rem",
                    fontWeight: "700",
                  }}
                >
                  {subtitle3Count}
                </p>
              </div>
              <div>
                <p
                  style={{
                    margin: "0",
                    fontFamily: "Inter",
                    fontSize: " 0.75rem",
                    fontWeight: "500",
                    color: "#05C165",
                  }}
                >
                  {subtitle3IncreaseCount}
                </p>
              </div>
            </div>
            <p
              style={{
                fontSize: "0.75rem",
                fontStyle: "normal",
                fontWeight: "500",
                color: "#1C4980",
              }}
            >
              {subtitle3}
            </p>
          </div>
        ) : null}
      </div>
    </Card>
  );
};

const StatisticsBar: React.FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <OverviewCard
        title="Total Assessment"
        style={{
          boxShadow: "none",
          border: "1px solid #DADCE0",
          borderRight: "none",
          borderRadius: "0.75rem 0 0 0.75rem",
          width: "15%",
        }}
        count={34}
        icon={totalAssessmentIcon}
      />

      <OverviewCardLarge
        title="Candidates"
        style={{
          boxShadow: "none",
          border: "1px solid #DADCE0",
          borderRadius: 0,
        }}
        subtitle1="Total Candidate"
        subtitle1Count={"111,45"}
        subtitle1IncreaseCount={"+89"}
        subtitle2="Who Attempted"
        subtitle2Count={"1,114"}
        subtitle2IncreaseCount={"+11"}
        icon={candidateIcon}
      />
      <OverviewCardLarge
        title="Candidates Source"
        style={{
          boxShadow: "none",
          border: "1px solid #DADCE0",
          borderRadius: 0,
          borderLeft: "none",
        }}
        subtitle1="E-mail"
        subtitle1Count={"11,000"}
        subtitle1IncreaseCount={"+12"}
        subtitle2="Social Share"
        subtitle2Count={"1,114"}
        subtitle2IncreaseCount={"+11"}
        subtitle3="Unique Link"
        subtitle3Count={"145"}
        subtitle3IncreaseCount={"+89"}
        extraContent={true}
        icon={sourceIcon}
      />
      <OverviewCard
        title="Total Purpose"
        style={{
          boxShadow: "none",
          border: "1px solid #DADCE0",
          borderLeft: "none",
          borderRadius: "0 0.75rem 0.75rem 0",
          width: "15%",
        }}
        count={12}
        icon={totalPurposeIcon}
      />
    </div>
  );
};

export default StatisticsBar;

export const DividerSection = ({
  subtitle1Count,
  subtitle1IncreaseCount,
  subtitle1,
}: DividerSectionProps) => {
  return (
    <>
      <Divider type="vertical" style={{ fontSize: "2.5rem" }} />
      <div>
        <div
          style={{
            display: "flex",
            columnGap: "0.25rem",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                margin: "0",
                color: "#1C4980",
                fontFamily: "Inter",
                fontSize: "1.25rem",
                fontWeight: "700",
              }}
            >
              {subtitle1Count}
            </p>
          </div>
          <div>
            <p
              style={{
                margin: "0",
                fontFamily: "Inter",
                fontSize: " 0.75rem",
                fontWeight: "500",
                color: "#05C165",
              }}
            >
              {subtitle1IncreaseCount}
            </p>
          </div>
        </div>
        <p
          style={{
            fontSize: "0.75rem",
            fontStyle: "normal",
            fontWeight: "500",
            color: "#1C4980",
          }}
        >
          {subtitle1}
        </p>
      </div>
    </>
  );
};
