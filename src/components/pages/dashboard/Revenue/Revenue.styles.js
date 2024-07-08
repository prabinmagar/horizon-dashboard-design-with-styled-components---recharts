import styled from "styled-components";
import { BlockWrapStyles } from "../../../../styles/global/default";
import { theme } from "../../../../styles/theme/theme";

export const RevenueWrap = styled.div`
  ${BlockWrapStyles}

  .stacked-bar-chart-block {
    width: 100%;
    height: 240px;
  }

  .revenue-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    .head-ttl {
      font-size: 24px;
    }

    .head-icon-btn {
      background: ${theme.colors.spaceCadet2};
      border-radius: 10px;
      width: 34px;
      height: 34px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: ${theme.colors.white};

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
`;
