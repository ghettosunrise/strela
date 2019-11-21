import styled, { css } from "styled-components";

export const LogoBlock = styled.div`
  max-width: 36.5vw;
  /* max-height: 67vh; */
  background: #ff1938;
  mix-blend-mode: difference;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const LogoElement1 = styled.div`
  width: 43.6%;
  height: 180%;
  /* height: 800px; */
  background: #0000ff;
  mix-blend-mode: color-dodge;
  position: absolute;
  /* transition: ease, .6s, all; */
  left: 22%;

  /* left: ${props => 22 + props.currentY + "%"}; */
  transform: translateX(${({ currentY }) => currentY}%);
  bottom: 0;
  z-index: 1;
`;

export const LogoElement2 = styled.div`
  width: 248.5%;
  height: 52px;
  background: #c4c4c4;
  position: fixed;
  mix-blend-mode: exclusion;
  top: 30%;
  left: 0;

  /* transition: linear, 0.2s, transform; */
  z-index: 1;
  /* transform: translateY(${({ currentY }) => currentY}%); */
  /* props.currentY >= 79 ? 79 + "%" : props.currentY + "%"}); */
`;
