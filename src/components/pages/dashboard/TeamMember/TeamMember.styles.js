import styled from "styled-components";
import { BlockWrapStyles } from "../../../../styles/global/default";
import { media, theme } from "../../../../styles/theme/theme";

export const TeamMemberWrap = styled.div`
  ${BlockWrapStyles}

  .teams-head {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .head-ttl {
      font-size: 20px;
    }
  }

  .teams-content {
    .teams-list {
      display: grid;
      row-gap: 16px;
    }

    .teams-item {
      background: ${theme.colors.spaceCadet2};
      padding: 12px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 16px;

      ${media.xxxl`
        padding: 10px 12px;
      `}

      .item-info {
        display: grid;
        row-gap: 2px;

        &-name {
          font-weight: 700;
          font-size: 16px;
        }
        &-position {
          font-size: 12px;
          color: ${theme.colors.powderBlue};
        }
      }

      .item-content {
        display: flex;
        align-items: center;
        column-gap: 16px;
      }

      .item-img {
        width: 46px;
        height: 46px;
        border-radius: 100%;
        overflow: hidden;
      }

      .item-action {
        color: ${theme.colors.powderBlue};
        cursor: pointer;
        transition: ${theme.transitions.easeInOut};

        svg {
          width: 24px;
          height: 24px;
        }

        &:hover {
          color: ${theme.colors.white};
        }
      }
    }
  }
`;
