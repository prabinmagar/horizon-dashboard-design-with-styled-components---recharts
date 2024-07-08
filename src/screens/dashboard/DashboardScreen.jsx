import CheckTable from "../../components/pages/dashboard/CheckTable/CheckTable"
import ComplexTable from "../../components/pages/dashboard/ComplexTable/ComplexTable"
import CustomCalendar from "../../components/pages/dashboard/CustomCalendar/CustomCalendar"
import DailyTraffic from "../../components/pages/dashboard/DailyTraffic/DailyTraffic"
import Revenue from "../../components/pages/dashboard/Revenue/Revenue"
import Summary from "../../components/pages/dashboard/Summary/Summary"
import TeamMember from "../../components/pages/dashboard/TeamMember/TeamMember"
import TotalSpent from "../../components/pages/dashboard/TotalSpent/TotalSpent"
import YourPieChart from "../../components/pages/dashboard/YourPieChart/YourPieChart"
import { DashboardScreenWrap } from "./DashboardScreen.styles"

const DashboardScreen = () => {
  return (
    <DashboardScreenWrap>
      <Summary />
      <div className="dboard-blocks-row first-row">
        <TotalSpent />
        <Revenue />
      </div>
      <div className="dboard-blocks-row second-row">
        <CheckTable />
        <DailyTraffic />
        <YourPieChart />
        <ComplexTable />
        <CustomCalendar />
        <TeamMember />
      </div>
    </DashboardScreenWrap>
  )
}

export default DashboardScreen
