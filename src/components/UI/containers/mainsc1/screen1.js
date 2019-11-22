import React from "react"
import Flex from "../../../../styled/flex"
import Nav from "../../../UI/Nav"
import Social from "../../../UI/Social"
import { SecondNav, MainScreen1 } from "./styles"

export const MainSc1 = () => {
  return (
    <MainScreen1 maxWidth="1058px" width="100%" justify="space-between">
      <Flex>
        <Nav></Nav>
        <Social></Social>
      </Flex>
      <h1>Мы PR агенство, которое поможет узнать тебя во всем мире! </h1>
    </MainScreen1>
  )
}
export default MainSc1
