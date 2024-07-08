import styled from "styled-components";
import { media, theme } from "../../../../styles/theme/theme";

export const SummaryWrap = styled.div`
  margin-bottom: 20px;

  ${media.xxxl`
        margin-bottom: 12px;
    `}

  .dboard-summary-blocks {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 16px;
    align-items: start;

    ${media.xxxl`
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
    `}

    ${media.lg`
        grid-template-columns: repeat(2, 1fr);
    `}

    ${media.sm`
        grid-template-columns: repeat(1, 1fr);
    `}
  }

  .dboard-block {
    display: flex;
    align-items: flex-start;
    align-items: center;
    column-gap: 12px;
    padding: 20px 16px;

    .summary-block-icon {
      width: 48px;
      height: 48px;
      background-color: ${theme.colors.spaceCadet2};
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 48px;

      svg {
        width: 32px;
        height: 32px;
      }
    }

    .summary-block-ttl {
      font-size: 14px;
      color: ${theme.colors.powderBlue};
      font-weight: 500;
    }

    .summary-block-details {
      display: flex;
      flex-direction: column;
      row-gap: 2px;
    }
    .summary-block-val {
      font-size: 24px;
      font-weight: 700;
      line-height: 1.4;
    }
    .summary-block-text {
      font-size: 12px;
      font-weight: 400;

      .text-percent {
        color: ${theme.colors.success};
        margin-right: 4px;
        font-weight: 700;
      }
    }

    .summary-block-dropdown {
      .dropdown-btn {
        display: flex;
        align-items: center;
        column-gap: 5px;
        transition: ${theme.transitions.easeInOut};

        &:hover {
          opacity: 0.9;
        }

        &-img {
          width: 48px;
          height: 48px;
          overflow: hidden;
          border-radius: 100%;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        &-icon {
          color: ${theme.colors.white};
          svg {
            width: 24px;
            height: 24px;
          }
        }
      }
    }

    &.dboard-block-balance {
      justify-content: space-between;
    }
  }

  .dboard-block-sales {
    padding-bottom: 6px;
    .summary-block-text {
      margin-top: -4px;
    }
  }

  .dboard-block-ntasks {
    .summary-block-icon {
      background: linear-gradient(to right, #4481eb, #04befe);
      img {
        width: 25px;
      }
    }
  }
`;
