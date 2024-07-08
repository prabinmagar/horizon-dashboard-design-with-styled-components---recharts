import { MdCancel, MdCheckCircle, MdError, MdMoreHoriz } from "react-icons/md";
import {
  BlockIconBtn,
  BlockTableWrap,
  BlockTitle,
} from "../../../../styles/global/default";
import { ComplexTableWrap } from "./ComplexTable.styles";
import { COMPLEX_TABLE_DATA } from "../../../../data/mockData";

const ComplexTable = () => {
  return (
    <ComplexTableWrap>
      <BlockTitle className="complex-table-head">
        <h3 className="head-ttl">Complex Table</h3>
        <BlockIconBtn className="head-icon-btn">
          <MdMoreHoriz />
        </BlockIconBtn>
      </BlockTitle>
      <div className="complex-table-content">
        <div className="table-block scrollbar">
          <BlockTableWrap>
            <thead>
              <tr>
                <th>name</th>
                <th>Status</th>
                <th>date</th>
                <th>progress</th>
              </tr>
            </thead>
            <tbody>
              {COMPLEX_TABLE_DATA?.map((dataItem) => {
                return (
                  <tr key={dataItem.id}>
                    <td>{dataItem.name}</td>
                    <td>
                      <div className="data-cell-status">
                        <span
                          className={`status-icon status-${dataItem.status}`}
                        >
                          {dataItem.status === "approved" && <MdCheckCircle />}
                          {dataItem.status === "disable" && <MdCancel />}
                          {dataItem.status === "error" && <MdError />}
                        </span>
                        <span className="status-text">{dataItem.status}</span>
                      </div>
                    </td>
                    <td>{dataItem.date}</td>
                    <td>
                      <div className="data-cell-progress">
                        <div className="progress-wrapper">
                          <div
                            className="progress-fill"
                            style={{
                              width: `${dataItem.progress}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </BlockTableWrap>
        </div>
      </div>
    </ComplexTableWrap>
  );
};

export default ComplexTable;
