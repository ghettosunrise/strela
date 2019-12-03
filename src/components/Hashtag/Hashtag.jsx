import React from "react"
import MyHashtag from "./styles"

const Hashtag = (text, link) => {
  return <MyHashtag to={link}>{text}</MyHashtag>
}

export default Hashtag
