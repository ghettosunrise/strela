import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Case from "../../components/Case"
import Flex from "../../styled/flex"
import ButtonBig from "../../components/Buttons/ButtonBig"

const Cases = () => {
  const caseData = useStaticQuery(graphql`
    query Case {
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
      <ButtonBig link="/agency/cases" txt="Все кейсы"></ButtonBig>
    </Flex>
  )
}

export default Cases

/* /* <Case
          size="small"
          sublabel="Артисты"
          img={caseimgsmall}
          content="stretch"
        >
          Criminal Practice
        </Case>
        <Case
          description="Brave! Factory Festival is a festival of independent music and culture that was created by enthusiasts on the premises of a working manufactory."
          size="big"
          img={caseimgbig}
          sublabel="фестиваль"
        >
          Brave! Factory
        </Case>
        <Case size="medium" img={caseimgmedium}>
          Black Is Back!
        </Case>
        <Case size="small" img={caseimgsmall}>
          Black Is Back!
        </Case>
        <Case size="small" justify="flex-end" img={caseimgsmall}>
          Black Is Back!
        </Case>
        <Case size="small" img={caseimgsmall}>
          Pakabakam
        </Case>
        <Case size="small" img={caseimgsmall}>
          Zip
        </Case>
        <Case size="medium" img={caseimgmedium}>
          Sergey Yatsenko
        </Case>
        <Case size="small" img={caseimgsmall}>
          Oleg Vinnik
        </Case>
        <Case size="small" img={caseimgsmall}>
          Vova Klk
        </Case>
        <Case size="small" img={caseimgsmall}>
          Koka Vlv
        </Case>
        <Case size="small" img={caseimgsmall}>
          Timur Cleymoore
        </Case> */
