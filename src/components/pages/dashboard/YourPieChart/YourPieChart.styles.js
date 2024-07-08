import styled from "styled-components";
import { BlockWrapStyles } from "../../../../styles/global/default";
import { theme } from "../../../../styles/theme/theme";

export const YourPieChartWrap = styled.div`
  .pie-chart-block {
    width: 100%;
    height: 240px;
  }

  ${BlockWrapStyles}

  .your-piechart-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    .dropdown-head {
      display: flex;
      align-items: center;
      color: ${theme.colors.white};
      column-gap: 4px;

      &-icon {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .pie-chart-info {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: ${theme.colors.spaceCadet2};
    border-radius: 12px;
    padding: 14px 0;

    .info-item {
      padding: 0 10px;
      min-height: 46px;
      border-right: 1px solid rgba(255, 255, 255, 0.1);

      .info-item-head {
        display: flex;
        align-items: center;
        column-gap: 5px;
      }

      .info-item-ttl {
        color: ${theme.colors.powderBlue};
        font-size: 12px;
        font-weight: 500;
      }

      .info-item-val {
        margin-left: 13px;
        font-size: 18px;
        font-weight: 700;
      }

      &:last-child {
        border: none;
      }
    }
  }
`;
