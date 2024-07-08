import styled from "styled-components";
import { media } from "../../styles/theme/theme";

export const DashboardScreenWrap = styled.div`
  overflow-x: hidden;
  
  .dboard-blocks-row {
    display: grid;
    gap: 20px;

    &.first-row {
      grid-template-columns: repeat(2, 1fr);

      ${media.xl`
            grid-template-columns: repeat(1, 1fr);
       `}
    }

    &.second-row {
      grid-template-columns: 2fr 400px 1fr;

      ${media.xxxl`
            grid-template-columns: repeat(8, 1fr);

            & > div{
                &:nth-child(1){
                    grid-column: 1 / 5;
                }
                &:nth-child(2){
                    grid-column: 5 / 9;
                }
                &:nth-child(3){
                    grid-column: 1 / 4;
                }
                &:nth-child(4){
                    grid-column: 4 / 9;
                }
                &:nth-child(5){
                    grid-column: 1 / 4;
                    min-width: 400px;
                }
                &:nth-child(6){
                    grid-column: 4 / 9;
                }
            }
        `}

      ${media.lg`
            & > div{
                &:nth-child(1){
                    grid-column: 1 / 9;
                }
                &:nth-child(2){
                    grid-column: 1 / 4;
                }
                &:nth-child(3){
                    grid-column: 4 / 9;
                }
                &:nth-child(4){
                    grid-column: 1 / 9;
                }
                &:nth-child(5){
                    grid-column: 1 / 5;
                    min-width: 400px;
                }
                &:nth-child(6){
                    grid-column: 5 / 9;
                }
            }
        `}

        ${media.md`
            & > div{
                grid-column: 1 / 9!important;
            }
        `}
    }

    ${media.xxxl`
        gap: 12px;
    `}
  }

  [class$="row"].dboard-blocks-row {
    margin-bottom: 20px;

    ${media.xxxl`
        margin-bottom: 12px;
    `}
  }
`;
