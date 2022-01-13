import { device } from "styles/size";

export const FontLarge =  `
  font-size: 4.5vw;
  @media ${device.tablet} {
    font-size: 7.5vw;
  }
  @media ${device.tablet} and (orientation: landscape) {
    font-size: 6.5vw;
  }
`;
export const FontMedium = `
  font-size: 3.5vw;
  @media ${device.tablet} {
    font-size: 5.5vw;
  }
  @media ${device.tablet} and (orientation: landscape) {
    font-size: 4.5vw;
  }
`;
export const FontSmall = `
  font-size: 2.5vw;
  @media ${device.tablet} {
    font-size: 5.5vw;
  }
  @media ${device.tablet} and (orientation: landscape) {
    font-size: 3.5vw;
  }
`;