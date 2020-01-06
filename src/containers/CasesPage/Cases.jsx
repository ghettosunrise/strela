import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Case from "../../components/Case"
import Flex from "../../styled/flex"
import ButtonBig from "../../components/Buttons/ButtonBig"
import caseimgsmall from "../../images/caseimg1.png"
import caseimgmedium from "../../images/caseimgmedium.png"
import caseimgbig from "../../images/caseimgbig.png"

const Cases = () => {
  const caseData = useStaticQuery(graphql`
    query CasePage {
      allContentfulCase {
        nodes {
          id
          size
          title
          subtitle
          image {
            file {
              url
            }
          }
        }
      }
    }
  `)

  return (
    <Flex width="100%" paddingAll="0px 49px">
      <Flex
        row
        width="100%"
        justify="space-between"
        align="stretch"
        wrap="wrap"
      >
        {caseData.allContentfulCase.nodes.map(
          ({
            id,
            size,
            title,
            subtitle,
            image: {
              file: { url },
            },
          }) => (
            <Case
              id={id}
              img={url}
              size={size}
              label={title}
              sublabel={subtitle}
              content="stretch"
            />
          )
        )}
      </Flex>
    </Flex>
  )
}

export default Cases
