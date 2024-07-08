import styled from "styled-components";
import { BlockWrapStyles } from "../../../../styles/global/default";
import { theme } from "../../../../styles/theme/theme";

export const ComplexTableWrap = styled.div`
  ${BlockWrapStyles}

  .complex-table-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    .head-ttl {
      font-size: 24px;
    }
  }

  .complex-table-content {
    table {
      tbody {
        tr {
          .data-cell-status {
            display: flex;
            align-items: center;
            column-gap: 8px;

            .status-icon {
              display: flex;
              align-items: center;
              justify-content: center;

              svg {
                width: 20px;
                height: 20px;
              }
            }

            .status-approved {
              color: ${theme.colors.success};
            }
            .status-disable {
              color: ${theme.colors.danger};
            }
            .status-error {
              color: ${theme.colors.warning};
            }
            .status-text {
              text-transform: capitalize;
            }
          }

          .data-cell-progress {
            width: 100px;
            height: 8px;
            border-radius: 100vh;
            overflow: hidden;
            background: ${theme.colors.delftBlue};
            position: relative;

            .progress-fill {
              background: ${theme.colors.majorelleBlue};
              height: 100%;
              position: absolute;
              left: 0;
              top: 0;
              border-radius: 100vh;
            }
          }
        }
      }
    }

    .table-block{
        overflow-x: scroll;
    }
  }
`;
