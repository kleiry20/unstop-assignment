import React, { CSSProperties } from "react";
import "./StatisticsBar.css";
import { Card, Divider, Statistic } from "antd";

import totalAssessmentIcon from "../../assets/totalAssessmentIcon.svg";
import totalPurposeIcon from "../../assets/totalPurpose.svg";

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
  subtitle1Count: number;
  subtitle1IncreaseCount: number;
  subtitle1: string;
  extraContent?: any;
}

interface DividerSectionProps {
  subtitle1Count: number;
  subtitle1IncreaseCount: number;
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
        rowGap: "1rem",
        padding: "1rem 1.25rem",
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
          fontWeight: "500",
        }}
      >
        {title}
      </p>
      <div style={{ display: "flex", gap: "0.625rem", alignItems: "center" }}>
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
  extraContent,
}: OverviewCardLargeProps) => {
  return (
    <Card
      bordered={false}
      bodyStyle={{
        display: "flex",
        flexDirection: "column",
        rowGap: "1rem",
        padding: "1rem 1.25rem",
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
        <img src={totalAssessmentIcon} alt="totalAssessmentIcon" />
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
        {/* extraContent={extraContent} */}
      </div>
    </Card>
  );
};

const StatisticsBar: React.FC = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <OverviewCard
        title="Total Assessment"
        style={{
          boxShadow: "none",
          border: "1px solid #DADCE0",
          borderRight: "none",
          borderRadius: "0.75rem 0 0 0.75rem",
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
        subtitle1Count={11145}
        subtitle1IncreaseCount={+12}
      />
      <OverviewCardLarge
        title="Candidates"
        style={{
          boxShadow: "none",
          border: "1px solid #DADCE0",
          borderRadius: 0,
          borderLeft: "none",
        }}
        subtitle1="Total Candidate"
        subtitle1Count={11145}
        subtitle1IncreaseCount={+12}
        extraContent={
          <DividerSection
            subtitle1Count={3563}
            subtitle1IncreaseCount={63}
            subtitle1={"djf"}
          />
        }
      />
      <OverviewCard
        title="Total Purpose"
        style={{
          boxShadow: "none",
          border: "1px solid #DADCE0",
          borderLeft: "none",
          borderRadius: "0 0.75rem 0.75rem 0",
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
