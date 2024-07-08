import { MdArrowDropDown } from "react-icons/md";
import { YourPieChartWrap } from "./YourPieChart.styles";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { PIE_CHART_DATA } from "../../../../data/mockData";
import { theme } from "../../../../styles/theme/theme";

const COLORS = [
  theme.colors.paleAzure,
  theme.colors.majorelleBlue,
  theme.colors.pictonBlue,
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const YourPieChart = () => {
  return (
    <YourPieChartWrap>
      <div className="your-piechart-head">
        <h3 className="head-ttl">Your Pie Chart</h3>
        <button type="button" className="dropdown-head">
          <span className="dropdown-head-text">Monthly</span>
          <span className="dropdown-head-icon">
            <MdArrowDropDown size={20} />
          </span>
        </button>
      </div>
      <div className="your-piechart-content">
        <div className="pie-chart-block">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={PIE_CHART_DATA}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                dataKey="value"
              >
                {PIE_CHART_DATA.map((entry, index) => (
                  <Cell
                    strokeWidth="0"
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                cursor={{
                  fill: "transparent",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="pie-chart-info">
          {PIE_CHART_DATA?.map((dataItem, index) => {
            return (
              <div className="info-item" key={index}>
                <div className="info-item-head">
                  <div
                    className="info-item-dot"
                    style={{
                      background: `${COLORS[index]}`,
                    }}
                  ></div>
                  <span className="info-item-ttl">{dataItem.name}</span>
                </div>
                <div className="info-item-val">{dataItem.value}%</div>
              </div>
            );
          })}
        </div>
      </div>
    </YourPieChartWrap>
  );
};

export default YourPieChart;
