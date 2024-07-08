import { SummaryWrap } from "./Summary.styles";
import { BlockContentWrap } from "../../../../styles/global/default";
import {
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { Images } from "../../../../assets/images";
import { Icons } from "../../../../assets/icons";

const Summary = () => {
  return (
    <SummaryWrap>
      <div className="dash-board-content">
        <div className="dboard-blocks dboard-summary-blocks">
          <BlockContentWrap className="dboard-block">
            <div className="summary-block-icon">
              <MdBarChart />
            </div>
            <div className="summary-block-details">
              <p className="summary-block-ttl">Earnings</p>
              <div className="summary-block-val">$350.4</div>
            </div>
          </BlockContentWrap>

          <BlockContentWrap className="dboard-block dboard-block-earnings">
            <div className="summary-block-icon">
              <MdAttachMoney />
            </div>
            <div className="summary-block-details">
              <p className="summary-block-ttl">Spend this Month</p>
              <div className="summary-block-val">$682.5</div>
            </div>
          </BlockContentWrap>

          <BlockContentWrap className="dboard-block dboard-block-sales">
            <div className="summary-block-details">
              <p className="summary-block-ttl">Sales</p>
              <div className="summary-block-val">$682.5</div>
              <p className="summary-block-text">
                <span className="text-percent">$23%</span> since last month
              </p>
            </div>
          </BlockContentWrap>

          <BlockContentWrap className="dboard-block dboard-block-balance">
            <div className="summary-block-details">
              <p className="summary-block-ttl">Your balance</p>
              <div className="summary-block-val">$1,000</div>
            </div>
            <div className="summary-block-dropdown">
              <button className="dropdown-btn">
                <span className="dropdown-btn-img">
                  <img src={Images.UsaFlag} alt="" />
                </span>
                <span className="dropdown-btn-icon">
                  <MdOutlineKeyboardArrowDown />
                </span>
              </button>
            </div>
          </BlockContentWrap>

          <BlockContentWrap className="dboard-block dboard-block-ntasks">
            <div className="summary-block-icon">
              <img src={Icons.CheckPlus} alt="" />
            </div>
            <div className="summary-block-details">
              <p className="summary-block-ttl">New Tasks</p>
              <div className="summary-block-val">154</div>
            </div>
          </BlockContentWrap>

          <BlockContentWrap className="dboard-block dboard-block-projects">
            <div className="summary-block-icon">
              <MdFileCopy />
            </div>
            <div className="summary-block-details">
              <p className="summary-block-ttl">Total Projects</p>
              <div className="summary-block-val">2935</div>
            </div>
          </BlockContentWrap>
        </div>
      </div>
    </SummaryWrap>
  );
};

export default Summary;
