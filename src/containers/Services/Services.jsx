import React, { useState } from "react"
import Flex from "../../styled/flex"
import Button from "../../components/Buttons/ButtonBig"
import { NewButton, InvisButton } from "./styles"

const Services = () => {
  const [activeService, setActiveService] = useState(0)

  return (
    <Flex width="100%" paddingAll="0 49px">
      <Flex row marginBottom="60px" width="500px" justify="space-between">
        <Flex width="245px" onClick={() => setActiveService(0)}>
          {activeService === 0 ? (
            <NewButton small txt="Организаторам"></NewButton>
          ) : (
            <InvisButton>Организаторам</InvisButton>
          )}
        </Flex>
        <Flex width="245px" onClick={() => setActiveService(1)}>
          {activeService === 1 ? (
            <NewButton small txt="Артистам"></NewButton>
          ) : (
            <InvisButton>Артистам</InvisButton>
          )}
        </Flex>
      </Flex>

      <Flex width="100%"></Flex>
    </Flex>
  )
}

export default Services
