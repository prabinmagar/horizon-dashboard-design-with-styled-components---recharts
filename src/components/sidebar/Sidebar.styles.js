import styled from "styled-components";
import { media, theme } from "../../styles/theme/theme";

export const SidebarWrap = styled.div`
  width: 260px;
  background: ${theme.colors.spaceCadet1};
  z-index: 1000;
  color: ${theme.colors.white};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 20px 30px;

  ${media.xxl`
        width: 240px;
    `}

  ${media.xl`
        width: 72px;
    `}

    ${media.md`
        width: 260px;
        transform: translateX(-100%);
    `}
    .sidebar-content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .sidebar-head {
    padding: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    column-gap: 12px;
    min-height: 72px;

    ${media.xl`
        padding: 16px 12px;
        justify-content: center;
    `}

    ${media.md`
        justify-content: flex-start;
    `}

    .site-icon {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;

      svg {
        width: 28px;
        height: 28px;
      }
    }

    .site-name {
      font-size: 24px;
      font-weight: 700;
      text-transform: uppercase;

      ${media.xl`
         display: none;
    `}

      ${media.md`
            display: block;
        `}
    }

    .sidebar-close-btn {
      color: ${theme.colors.white};
      margin-left: auto;
      display: none;

      ${media.md`
        display: block;
    `}
    }
  }

  .sidebar-nav {
    padding: 32px 20px;
    min-height: calc(100% - 90px);
    overflow-y: scroll;
    flex: 1;

    ${media.xl`
        padding: 24px 16px;
    `}

    .sidenav-list {
      display: grid;
      row-gap: 20px;

      ${media.lg`
            row-gap: 16px;
        `}
    }

    .sidenav-item {
      min-height: 36px;
      display: flex;
      align-items: center;

      ${media.xl`
            justify-content: center;
        `}

      ${media.md`
            justify-content: flex-start;
        `}
    }

    .sidenav-link {
      display: flex;
      align-items: center;
      column-gap: 12px;
      font-size: 16px;

      &:hover {
        opacity: 0.8;
        transition: ${theme.transitions.easeInOut};
      }

      .link-icon {
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .link-text {
        font-weight: 500;

        ${media.xl`
                display: none;
            `}

        ${media.md`
                display: block;
            `}
      }
    }
  }

  &.sidebar-active {
    width: 260px;
    position: fixed;

    .sidebar-head {
      justify-content: flex-start;
      padding: 16px;

      .site-name {
        display: block;
      }

      .sidebar-close-btn {
        display: inline-flex;
      }
    }

    .sidebar-nav {
      .sidenav-item {
        justify-content: flex-start;

        .sidenav-link {
          .link-text {
            display: block;
          }
        }
      }
    }

    ${media.md`
        transform: translateX(0);
    `}
  }
`;
