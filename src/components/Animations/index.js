import styled, { keyframes } from 'styled-components';

const animate = keyframes`
 0% { left: -100% }
 60% { left: 0 }
 100% { left: 0% }
`;

const animateBack = keyframes`
 0% { left: 0% }
 60% { left: 100% }
 100% { left: 100% }
`;

export const AnimatedBlock = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 100%;
  background: ${props =>
    props.navigateTo === 'agency' || props.agency ? 'black' : '#2403a6'};
  animation-name: ${props => (props.firstPage ? animateBack : animate)};
  animation-duration: 0.7s;
  animation-play-state: ${props =>
    props.navigateTo !== null ? 'running' : 'paused'};
  z-index: 99999;
`;

// export const AnimatedBlock2 = styled.div`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   left: 0%;
//   background: ${props =>
//     props.navigateTo === 'agency' || props.agency ? 'black' : '#2403a6'};
//   animation-name: ${animateBack};
//   animation-duration: infinite;
//   animation-play-state: running;
//   z-index: 99999;
// `;
