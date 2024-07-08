import { MdArrowDropUp } from "react-icons/md";
import { DailyTrafficWrap } from "./DailyTraffic.styles";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { DAILY_TRAFFIC_DATA } from "../../../../data/mockData";
import { theme } from "../../../../styles/theme/theme";

const DailyTraffic = () => {
  return (
    <DailyTrafficWrap>
      <div className="traffic-summary">
        <div className="traffic-summary-info">
          <p className="traffic-summary-lbl">Daily Traffic</p>
          <div className="traffic-summary-val">
            <span className="val-text">2579</span>
            <span className="val-type">Visitors</span>
          </div>
        </div>
        <div className="traffic-summary-statdata">
          <span className="statdata-icon">
            <MdArrowDropUp />
          </span>
          <span className="statdata-value">+2.45%</span>
        </div>
      </div>
      <div className="traffic-content">
        <div className="bar-chart-block">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={DAILY_TRAFFIC_DATA}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: -5,
              }}
            >
              <XAxis
                dataKey="day"
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
              <Bar
                dataKey="visitor"
                fill={theme.colors.majorelleBlue}
                barSize={16}
                radius={[10, 10, 10, 10]}
              />
              <Tooltip
                cursor={{
                  fill: "transparent",
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DailyTrafficWrap>
  );
};

export default DailyTraffic;
