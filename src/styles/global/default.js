import styled, { css } from "styled-components";
import { media, theme } from "../theme/theme";

export const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const BlockTitle = styled.div`
  margin-bottom: 24px;

  h3 {
    font-size: 32px;
    font-weight: 700;
    color: ${theme.colors.white};

    ${media.xxl`
        font-size: 24px;
    `}

    ${media.lg`
        font-size: 20px;
    `}
  }
`;

export const BlockWrapStyles = css`
  background: ${theme.colors.spaceCadet1};
  border-radius: 20px;
  padding: 24px;

  ${media.xxxl`
        padding: 16px;
    `}
`;

export const BlockContentWrap = styled.div`
  ${BlockWrapStyles};
`;

export const BlockIconBtn = styled.button`
  background: ${theme.colors.spaceCadet1};
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
`;

export const BlockTableWrap = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  min-width: 500px;

  th,
  td {
    padding: 10px 12px;
  }

  thead,
  tbody {
    tr {
      th,
      td {
        &:first-child {
          padding-left: 0;
        }

        &:last-child {
          padding-right: 0;
        }
      }
    }
  }

  thead {
    th {
      text-align: left;
      color: ${theme.colors.powderBlue};
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 500;
      padding-bottom: 20px;
    }
  }

  tbody {
    tr {
      font-weight: 700;
    }
  }
`;

export const CheckboxWrap = styled.div`
  position: relative;
  width: 18px;
  height: 18px;

  .checkbox-holder {
    width: 100%;
    height: 100%;
    border: 2px solid ${theme.colors.white};
    border-radius: 2px;
  }

  .checkbox-mark {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    color: #111c44;
    background-color: #7551ff;
    border-radius: 2px;
    transition: ${theme.transitions.easeInOut};
  }

  input {
    cursor: pointer;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;

    &:checked {
      & + .checkbox-mark {
        opacity: 1;
      }
    }
  }
`;
