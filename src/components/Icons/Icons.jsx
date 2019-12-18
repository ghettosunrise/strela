import styled, { css } from "styled-components"
import arrR from "../../images/arrowr.svg"
import arrRBl from "../../images/arrowrbl.svg"
import arrRWh from "../../images/arrowrwh.svg"
import arrL from "../../images/arrowl.svg"

const left = css`
  background-image: url(${arrL});
  margin-right: ${props => props.margin || 0};
`

const right = css`
  background-image: url(${arrR});
  margin-left: ${props => props.margin || 0};
`

const rightBlue = css`
  background-image: url(${arrRBl});
  margin-left: ${props => props.margin || 0};
`

const rightWhite = css`
  background-image: url(${arrRBl});
  margin-left: ${props => props.margin || 0};
`

const Arrow = styled.div`
  width: 48px;
  height: 23px;

  ${props => (props.direction === "R" ? right : left)};
`

export default Arrow

/* background-image: url(${props =>
    props.direction == "R" ? arrR : props.direction == "L" ? arrL : "none"});
  background-size: 100%;
  margin-left: ${props => (props.margin ? props.margin : 0)}; */
