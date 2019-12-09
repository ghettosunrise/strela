import React from "react"
import Flex from "../../styled/flex"
import News from "../../components/News"
import news2 from "../../images/news2.png"

const CasesNews = () => {
  return (
    <Flex
      paddingAll="0 49px"
      width="100%"
      row
      justify="space-between"
      wrap="wrap"
    >
      <News
        size="small"
        title="Мы просто умеем развлекаться: Closer 6 лет"
        link="#"
        src={news2}
      ></News>
      <News
        size="small"
        title="Мы просто умеем развлекаться: Closer 6 лет"
        link="#"
        src={news2}
      ></News>
      <News
        size="small"
        title="Мы просто умеем развлекаться: Closer 6 лет"
        link="#"
        src={news2}
      ></News>
      <News
        size="small"
        title="Мы просто умеем развлекаться: Closer 6 лет"
        link="#"
        src={news2}
      ></News>
    </Flex>
  )
}

export default CasesNews
