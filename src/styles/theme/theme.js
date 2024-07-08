import { css } from "styled-components";

export const theme = {
  colors: {
    spaceCadet1: "#111C44",
    spaceCadet2: "#1B254B",
    oxfordBlue: "#0B1437",
    delftBlue: "#293357",
    white: "#ffffff",
    black: "#000000",
    majorelleBlue: "#7551FF",
    pictonBlue: "#39B8FF",
    paleAzure: "#6AD2FF",
    powderBlue: "#A3AED0",
    success: "#01B574",
    danger: "#EE5D50",
    warning: "#FFCE20",
    frenchGray: "#C2CBDD",
    hover: "",
    active: "",
  },
  typography: {
    fontFamily: `"DM Sans", sans-serif`,
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: 1.6,
  },
  breakpoints: {
    xs: "480px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1440px",
    xxxl: "1600px",
  },
  transitions: {
    easeInOut: "all 0.3s ease-in-out",
  },
};

// Reusable media query function
export const media = {
  xxxl: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.xxxl}) {
      ${css(...args)}
    }
  `,
  xxl: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.xxl}) {
      ${css(...args)}
    }
  `,
  xl: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
      ${css(...args)}
    }
  `,
  lg: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
      ${css(...args)}
    }
  `,
  md: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      ${css(...args)}
    }
  `,
  sm: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      ${css(...args)}
    }
  `,
  xs: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
      ${css(...args)}
    }
  `,
};
