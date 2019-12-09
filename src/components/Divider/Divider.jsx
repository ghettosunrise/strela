import React from "React"
import Flex from "../../styled/flex"
import { DividerText, DividerArrow } from "./styles"

const Divider = props => {
  return (
    <Flex
      width="100%"
      align="flex-end"
      row
      paddingAll="0px 49px"
      marginBottom="50px"
    >
      <DividerText>{props.text}</DividerText>
      <DividerArrow />
    </Flex>
  )
}

export default Divider
