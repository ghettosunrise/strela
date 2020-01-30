import styled, { css } from "styled-components"
import arrR from "../../images/arrowr.svg"
// import arrRBl from "../../images/arrowrbl.svg"
// import arrRWh from "../../images/arrowrwh.svg"
import arrL from "../../images/arrowl.svg"

const left = css`
  background-image: url(${arrL});
  margin-right: ${props => props.margin || 0};


  @media only screen and (max-width: 768px) {
    margin-right: 1px;
  };
`

const right = css`
  background-image: url(${arrR});
  margin-left: ${props => props.margin || 0};


  @media only screen and (max-width: 768px) {
    margin-left:1px;
  };
`

// const rightBlue = css`
//   background-image: url(${arrRBl});
//   margin-left: ${props => props.margin || 0};
// `

// const rightWhite = css`
//   background-image: url(${arrRWh});
//   margin-left: ${props => props.margin || 0};
// `

const Arrow = styled.div`
  width: 48px;
  height: 23px;

  @media only screen and (max-width: 768px) {
    width: 28px;
    height: 13px;
    background-size : 100%
  };

  ${props => (props.direction === "R" ? right : left)};
`

export default Arrow

/* background-image: url(${props =>
    props.direction == "R" ? arrR : props.direction == "L" ? arrL : "none"});
  background-size: 100%;
  margin-left: ${props => (props.margin ? props.margin : 0)}; */
