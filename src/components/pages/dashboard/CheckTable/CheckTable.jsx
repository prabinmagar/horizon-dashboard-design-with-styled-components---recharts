import { MdCheck, MdMoreHoriz } from "react-icons/md";
import {
  BlockIconBtn,
  BlockTableWrap,
  BlockTitle,
  CheckboxWrap,
} from "../../../../styles/global/default";
import { CheckTableWrap } from "./CheckTable.style";
import { CHECK_TABLE_DATA } from "../../../../data/mockData";

const CheckTable = () => {
  return (
    <CheckTableWrap>
      <BlockTitle className="check-table-head">
        <h3 className="head-ttl">Check Table</h3>
        <BlockIconBtn className="head-icon-btn">
          <MdMoreHoriz />
        </BlockIconBtn>
      </BlockTitle>
      <div className="check-table-content">
        <div className="table-block scrollbar">
          <BlockTableWrap>
            <thead>
              <tr>
                <th>name</th>
                <th>progress</th>
                <th>quantity</th>
                <th>date</th>
              </tr>
            </thead>
            <tbody>
              {CHECK_TABLE_DATA?.map((dataItem) => {
                return (
                  <tr key={dataItem.id}>
                    <td>
                      <div className="data-cell-name">
                        <CheckboxWrap>
                          <input type="checkbox" />
                          <span className="checkbox-mark">
                            <MdCheck />
                          </span>
                          <div className="checkbox-holder"></div>
                        </CheckboxWrap>
                        <p className="data-text-name">{dataItem.name}</p>
                      </div>
                    </td>
                    <td>{dataItem.progress}</td>
                    <td>{dataItem.quantity}</td>
                    <td>{dataItem.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </BlockTableWrap>
        </div>
      </div>
    </CheckTableWrap>
  );
};

export default CheckTable;
