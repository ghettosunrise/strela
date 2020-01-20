import styled from "styled-components"
import { Link } from "gatsby"

export const MyHashtag = styled(Link)`
  font-family: Neue Machina;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: ${props => (props.color ? props.color : "#000000")};
  margin-right: 5px;
  margin-bottom: ${props => props.bottom};

  &:last-child {
    margin-right: 0;
  }
`
