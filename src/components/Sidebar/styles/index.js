import styled from "styled-components"
import Flex from "../../../styled/flex"
import copy from "../../../images/copylink.svg"
import fb from "../../../images/exportfb.svg"

export const Sidebar = styled(Flex)`
  width: 23.5%;
  margin-left: 10%;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    padding-bottom: 50px;
  };

  p {
    font-family: Formular;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #000000;
    opacity: 0.5;
    margin-bottom: 15px;
  }

  
`;

export const Translate = styled.div`
  font-family: Neue Machina;
  font-size: 13px;
  line-height: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #000000;
  font-weight: bold;
  cursor: pointer;
`;

export const Link = styled.a`
  font-family: Neue Machina;
  font-size: 13px;
  line-height: 13px;
  letter-spacing: 0.06em;
  text-decoration-line: underline;
  text-transform: uppercase;
  color: #000000;
  font-weight: bold;
`;

export const Copy = styled.div`
  width: 37px;
  height: 34px;
  background-image: url(${copy});
  cursor: pointer;
`;

export const Fb = styled.div`
  width: 37px;
  height: 34px;
  background-image: url(${fb});
  cursor: pointer;
`;
