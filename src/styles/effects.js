import { css, keyframes } from 'styled-components';

const breath = keyframes`
  0% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
  50% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
`
const blink = keyframes`
  0%, 100% {
    transform: scale(1, .05);
  }
  5%,
  95% {
    transform: scale(1, 1);
  }
`;

export const Breath = css`
  -webkit-animation: ${breath} 5s ease-out infinite normal;
  animation: ${breath} 5s ease-out infinite normal;
  -webkit-font-smoothing: antialiased;
`;

export const Blink = css`
  animation: ${blink} 5s infinite;
`;
