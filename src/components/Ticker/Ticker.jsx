import styled, { css, keyframes } from "styled-components"
import React, { useEffect, useState, useRef } from "react"
import Flex from "../../styled/flex"
import * as S from "./styles"
import arrw from "../../images/arrw.svg"

const TickerText = styled.a`
  font-family: Neue Machina;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.07em;
  position: relative;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  color: #fff;
  padding: 0px 38px;
  position: relative;
  &::after {
    width: 26px;
    height: 13px;
    content: "";
    background-image: url(${arrw});
    position: absolute;
    right: -13px;
    background-size: 100%;
    top: 7px;
  }
`

const moveXAnimation = keyframes`
  0% {
    transform: translateX(-50%);
  }

  100% {
    transform: translateX(0%);
  }
`

const moveX = css`
  animation: ${moveXAnimation} 17s infinite linear;
`

const MovingContainer = styled(Flex).attrs({
  row: true,
})`
  ${moveX}
`

const Ticker = () => {
  const text = useRef()
  const container = useRef()
  const [textWidth, setTextWidth] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    if (text.current) {
      setTextWidth(text.current.clientWidth)
    }

    if (container.current) {
      setContainerWidth(container.current.clientWidth)
    }
  }, [text.current, container.current])

  console.log("textWidth", textWidth)
  console.log("container width", containerWidth)

  const textsInContainer = Math.ceil(containerWidth / textWidth)

  const copiesLength = !!textsInContainer ? textsInContainer * 2 - 1 : 0

  console.log(textsInContainer)

  return (
    <Flex
      width="100%"
      align="center"
      height="58px"
      background="#2403a6"
      row
      ref={container}
      overflow="hidden"
    >
      <MovingContainer>
        <TickerText href="#" ref={text}>
          New mix from Criminal Practice – <span>Play now</span>
        </TickerText>
        {Array(copiesLength)
          .fill(0)
          .map((_, idx) => (
            <TickerText href="#" key={idx}>
              New mix from Criminal Practice – <span>Play now</span>
            </TickerText>
          ))}
      </MovingContainer>
    </Flex>
  )
}

export default Ticker