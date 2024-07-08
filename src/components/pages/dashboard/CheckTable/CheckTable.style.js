import styled from "styled-components";
import { BlockWrapStyles } from "../../../../styles/global/default";

export const CheckTableWrap = styled.div`
  ${BlockWrapStyles}

  .check-table-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    .head-ttl {
      font-size: 24px;
    }
  }

  .check-table-content {
    .table-block {
      overflow-x: scroll;

      table {
        tbody {
          tr {
            .data-cell-name {
              display: flex;
              align-items: center;
              gap: 14px;
            }
          }
        }
      }
    }
  }
`;
