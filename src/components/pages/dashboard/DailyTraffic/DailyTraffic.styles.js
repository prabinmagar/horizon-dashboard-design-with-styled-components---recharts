import styled from "styled-components";
import { BlockWrapStyles } from "../../../../styles/global/default";
import { theme } from "../../../../styles/theme/theme";

export const DailyTrafficWrap = styled.div`
  ${BlockWrapStyles}

  .bar-chart-block {
    width: 100%;
    height: 240px;
  }

  .traffic-summary {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;

    .traffic-summary-lbl {
      font-size: 14px;
      color: ${theme.colors.powderBlue};
    }

    .traffic-summary-val {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: 6px;

      .val-text {
        font-size: 34px;
        font-weight: 700;
        line-height: 1.2;
      }
      .val-type {
        font-size: 14px;
        color: ${theme.colors.powderBlue};
      }
    }

    .traffic-summary-statdata {
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
  }
`;
