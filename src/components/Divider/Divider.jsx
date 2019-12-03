import React from "React"
import Flex from "../../styled/flex"
import { DividerText, DividerArrow } from "./styles"

const Divider = props => {
  return (
    <Flex width="100%" row paddingAll="0px 49px">
      <DividerText>{props.text}</DividerText>
      <DividerArrow />
    </Flex>
  )
}

export default Divider
