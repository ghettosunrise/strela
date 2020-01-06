import styled from "styled-components"
import Burger from "../../../../images/burger.svg"
import BurgerClose from "../../../../images/burgerclose.svg"

export const BurgerButton = styled.button`
  width: 45px;
  height: 45px;
  outline: none;
  background-color: transparent;
  border: 0;
  background-image: url(${props =>
    props.isClosedMobile == true ? Burger : BurgerClose});
`
