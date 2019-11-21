import styled from "styled-components";

//let jasf = window.screen.width * 0.0622;

export const Title = styled.h1`
  font-family: Adca;
  font-style: normal;
  font-weight: normal;
  font-size: ${window.screen.width * 0.0522 + "px"};
  line-height: 113%;
  /* or 79px */
  text-transform: uppercase;
  max-width: 1000px;
  z-index: 5;
  color: #ffffff;
  position: absolute;
  left: 0;
  top: 0;
`;

export const BottomTxt = styled.p`
  font-family: Adca;
  font-size: 100px;
  color: #000;
  position: relative;
`;

export const ArrowWrap = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;
