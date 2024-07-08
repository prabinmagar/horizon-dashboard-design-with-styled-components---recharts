import styled from "styled-components";
import { BlockWrapStyles } from "../../../../styles/global/default";
import { theme } from "../../../../styles/theme/theme";

export const CustomCalendarWrap = styled.div`
  ${BlockWrapStyles}
  min-width: 100%;

  .react-calendar {
    background: transparent;
    border: none;
    font-family: ${theme.typography.fontFamily}!important;
    margin-right: auto;
    margin-left: auto;

    .react-calendar__navigation {
      .react-calendar__navigation__arrow {
        color: ${theme.colors.white};
        border-radius: 100vh;

        &:hover {
          background: ${theme.colors.spaceCadet2};
        }
      }

      button:disabled,
      button:enabled:focus {
        background: ${theme.colors.spaceCadet2};
      }

      .react-calendar__navigation__label {
        color: ${theme.colors.white}!important;
        background: ${theme.colors.spaceCadet2};
        border-radius: 100vh;

        &:hover {
          background: ${theme.colors.spaceCadet2};
        }
      }
    }

    .react-calendar__tile {
      color: ${theme.colors.white};
      border-radius: 100vh;
      font-size: 12px;

      &:hover {
        background: ${theme.colors.majorelleBlue};
      }

      &.react-calendar__tile--now {
        background: ${theme.colors.majorelleBlue};
        &.react-calendar__tile--active {
          background: ${theme.colors.majorelleBlue};
        }
      }
    }
  }
`;
