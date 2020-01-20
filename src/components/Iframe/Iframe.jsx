import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Iframe = ({ src }) => {
  // const txt = documentToReactComponents(src)
  return (
    <iframe
      width="100%"
      height="166"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      src={src}
    ></iframe>
  )
}

export default Iframe
