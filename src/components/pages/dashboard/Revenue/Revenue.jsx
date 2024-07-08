import { MdBarChart } from "react-icons/md";
import { BlockTitle } from "../../../../styles/global/default";
import { RevenueWrap } from "./Revenue.styles";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { WEEKLY_REVENUE_DATA } from "../../../../data/mockData";
import { theme } from "../../../../styles/theme/theme";

const formatYAxisLabel = (value) => {
  if (value > 0) {
    return `${value}k`;
  } else return 0;
};

const Revenue = () => {
  const maxDataValue = Math.max(
    ...WEEKLY_REVENUE_DATA.map((item) => item.x + item.y + item.z)
  );

  // always having 6 ticks of equal interval
  const tickInterval = Math.ceil(maxDataValue / 6);
  const yTicks = Array.from({ length: 7 }, (_, index) => index * tickInterval);

  return (
    <RevenueWrap>
      <BlockTitle className="revenue-head">
        <h3 className="head-ttl">Weekly Revenue</h3>
        <button className="head-icon-btn">
          <MdBarChart />
        </button>
      </BlockTitle>
      <div className="revenue-content">
        <div className="stacked-bar-chart-block">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={WEEKLY_REVENUE_DATA}
              margin={{
                top: 0,
                right: 0,
                left: -20,
                bottom: 0,
              }}
            >
              <XAxis
                dataKey="week"
                tickSize={0}
                axisLine={false}
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
                    {payload.value}
                  </text>
                )}
              />
              <YAxis
                tickFormatter={formatYAxisLabel}
                tickSize={6}
                axisLine={false}
                ticks={yTicks}
                tick={{
                  fontSize: 12,
                  fill: theme.colors.powderBlue,
                  fontWeight: 500,
                }}
                interval={0}
              />
              <Bar dataKey="x" stackId="a" fill="#543de0" barSize={16} />
              <Bar dataKey="y" stackId="a" fill="#61b7e1" barSize={16} />
              <Bar
                dataKey="z"
                stackId="a"
                fill={theme.colors.frenchGray}
                barSize={16}
                radius={[10, 10, 0, 0]}
              />

              <Tooltip cursor={{ fill: "transparent" }} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </RevenueWrap>
  );
};

export default Revenue;
