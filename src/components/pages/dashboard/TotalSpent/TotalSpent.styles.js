import styled from "styled-components";
import { BlockWrapStyles } from "../../../../styles/global/default";
import { media, theme } from "../../../../styles/theme/theme";

export const TotalSpentWrap = styled.div`
  ${BlockWrapStyles};

  .line-chart-block {
    width: 100%;
    height: 240px;
  }

  .total-spent-head {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .head-badge {
      background: ${theme.colors.spaceCadet2};
      border-radius: 8px;
      display: flex;
      align-items: center;
      column-gap: 4px;
      padding: 10px 12px;

      &-icon {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .total-spent-summary {
    .spent-summary-val {
      font-size: 34px;
      font-weight: 700;
      line-height: 1.2;
    }

    .spent-summary-info {
      display: flex;
      align-items: center;
      column-gap: 8px;
    }
    .spent-summary-lbl {
      font-weight: 500;
      color: ${theme.colors.powderBlue};
    }

    .spent-summary-statdata {
      font-size: 12px;
      font-weight: 700;
      color: ${theme.colors.success};
      display: flex;
      align-items: center;
      column-gap: 4px;

      .statdata-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }

    .spent-summary-status {
      display: flex;
      align-items: center;
      column-gap: 6px;
      color: ${theme.colors.success};
      margin-top: 20px;

      .status-icon {
        display: flex;
        align-items: center;

        svg {
          width: 18px;
          height: 18px;
        }
      }

      .status-text {
        font-weight: 700;
        font-size: 16px;
      }
    }
  }

  .total-spent-content {
    display: grid;
    grid-template-columns: 150px auto;

    ${media.md`
        grid-template-columns:100%;
        row-gap: 16px;
    `}
  }
`;
