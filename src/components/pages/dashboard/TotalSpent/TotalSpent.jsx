import { MdArrowDropUp, MdBarChart, MdCalendarMonth } from "react-icons/md";
import { BlockIconBtn, BlockTitle } from "../../../../styles/global/default";
import { TotalSpentWrap } from "./TotalSpent.styles";
import { GoCheckCircleFill } from "react-icons/go";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Line,
  Tooltip,
} from "recharts";
import { TOTAL_SPENT_DATA } from "../../../../data/mockData";
import { theme } from "../../../../styles/theme/theme";
import PropTypes from "prop-types";

const formatYAxisLabel = (value) => {
  if (value > 0) {
    return `${value}k`;
  } else return 0;
};

const formatTooltipValue = (value, name) => {
  return `${value.replace("_", " ")} : ${name}`;
};

const CustomTooltipContent = ({ payload }) => {
  if (!payload || !payload.length) return null;

  return (
    <div className="custom-recharts-tooltip">
      <p className="recharts-tooltip-label">{payload[0].payload?.month}</p>
      <ul className="recharts-tooltip-item-list">
        {payload?.map((payloadItem, index) => {
          return (
            <li key={index}>
              {formatTooltipValue(payloadItem.name, payloadItem.value)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

CustomTooltipContent.propTypes = {
  payload: PropTypes.any,
};

const TotalSpent = () => {
  return (
    <TotalSpentWrap>
      <BlockTitle className="total-spent-head">
        <div className="head-badge">
          <span className="head-badge-icon">
            <MdCalendarMonth />
          </span>
          <span className="head-badge-text">This month</span>
        </div>
        <BlockIconBtn className="head-icon-btn">
          <MdBarChart />
        </BlockIconBtn>
      </BlockTitle>

      <div className="total-spent-content">
        <div className="total-spent-summary">
          <div className="spent-summary-val">$37.5K</div>
          <div className="spent-summary-info">
            <p className="spent-summary-lbl">Total Spent</p>
            <div className="spent-summary-statdata">
              <span className="statdata-icon">
                <MdArrowDropUp />
              </span>
              <span className="statdata-value">+2.45%</span>
            </div>
          </div>
          <div className="spent-summary-status">
            <div className="status-icon">
              <GoCheckCircleFill />
            </div>
            <span className="status-text">On track</span>
          </div>
        </div>
        <div className="line-chart-block">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={TOTAL_SPENT_DATA}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 20,
              }}
            >
              <XAxis
                dataKey="month"
                tickSize={0}
                axisLine={false}
                padding={{ left: 20 }}
                tick={({ payload, x, y, dy }) => (
                  <text
                    x={x}
                    y={y + 20}
                    dy={dy}
                    textAnchor="middle"
                    fill={theme.colors.powderBlue}
                    fontSize={12}
                    fontWeight={500}
                  >
                    {payload.value.toUpperCase()}
                  </text>
                )}
              />
              <YAxis
                tickFormatter={formatYAxisLabel}
                tickSize={6}
                axisLine={false}
                ticks={[0, 10, 20, 30, 40, 50, 60]}
                tick={{
                  fontSize: 12,
                  fill: theme.colors.powderBlue,
                  fontWeight: 500,
                }}
                interval={0}
              />
              <Line
                type="monotone"
                dataKey="uv"
                stroke={theme.colors.majorelleBlue}
                strokeWidth={2}
                dot={{ strokeWidth: 3, fill: theme.colors.majorelleBlue, r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="pv"
                stroke={theme.colors.pictonBlue}
                strokeWidth={2}
                dot={{ strokeWidth: 3, fill: theme.colors.pictonBlue, r: 6 }}
              />
              <Tooltip content={<CustomTooltipContent />} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </TotalSpentWrap>
  );
};

export default TotalSpent;
