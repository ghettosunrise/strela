import React from "react"
import Case from "../../components/Case"
import Flex from "../../styled/flex"
import ButtonBig from "../../components/Buttons/ButtonBig"
import caseimgsmall from "../../images/caseimg1.png"
import caseimgmedium from "../../images/caseimgmedium.png"
import caseimgbig from "../../images/caseimgbig.png"

const Cases = () => {
  return (
    <Flex width="100%" paddingAll="0px 49px">
      <Flex
        row
        width="100%"
        justify="space-between"
        align="stretch"
        wrap="wrap"
      >
        <Case
          size="small"
          label="Criminal Practice"
          sublabel="Артисты"
          img={caseimgsmall}
          content="stretch"
        ></Case>
        <Case
          description="Brave! Factory Festival is a festival of independent music and culture that was created by enthusiasts on the premises of a working manufactory."
          size="big"
          img={caseimgbig}
          label="Brave! Factory"
          sublabel="фестиваль"
        ></Case>
        <Case size="medium" img={caseimgmedium} label="Black Is Back!"></Case>
        <Case size="small" img={caseimgsmall} label="Black Is Back!"></Case>
        <Case
          size="small"
          justify="flex-end"
          img={caseimgsmall}
          label="Black Is Back!"
        ></Case>
        <Case size="small" img={caseimgsmall} label="Pakabakam"></Case>
        <Case size="small" img={caseimgsmall} label="Zip"></Case>
        <Case size="medium" img={caseimgmedium} label="Sergey Yatsenko"></Case>
        <Case size="small" img={caseimgsmall} label="Oleg Vinnik"></Case>
        <Case size="small" img={caseimgsmall} label="Vova Klk"></Case>
        <Case size="small" img={caseimgsmall} label="Koka Vlv"></Case>
        <Case size="small" img={caseimgsmall} label="Timur Cleymoore"></Case>
      </Flex>
      <ButtonBig txt="Все кейсы"></ButtonBig>
    </Flex>
  )
}

export default Cases
