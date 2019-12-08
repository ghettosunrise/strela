import React from "react"
import Flex from "../../styled/flex"
import News from "../../components/News"
import ButtonBig from "../../components/Buttons/ButtonBig"
import news1 from "../../images/news1.png"
import news2 from "../../images/news2.png"
import news3 from "../../images/news3.png"
import news4 from "../../images/news4.png"

const NewsContainer = () => {
  return (
    <Flex width="100%" paddingAll="46px 49px">
      <Flex
        row
        width="100%"
        justify="space-between"
        align="stretch"
        wrap="wrap"
      >
        <News
          size="medium"
          title="Мы просто умеем развлекаться: Closer 6 лет"
          link="#"
          src={news1}
        ></News>
        <News
          size="medium"
          title="Мы просто умеем развлекаться: Closer 6 лет"
          link="#"
          src={news1}
        ></News>
        <News
          size="medium"
          title="There was a time when I had to prove to journalists that it’s not just another rave"
          link="#"
          src={news1}
          extraLarge
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
        <News
          size="small"
          title="Мы просто умеем развлекаться: Closer 6 лет"
          link="#"
          src={news2}
        ></News>
        <News
          size="mediumSmall"
          title="Мы просто умеем развлекаться: Closer 6 лет"
          link="#"
          src={news2}
        ></News>
        <News
          size="mediumSmall"
          title="Мы просто умеем развлекаться: Closer 6 лет"
          link="#"
          src={news2}
        ></News>
        <News
          size="mediumSmall"
          title="Мы просто умеем развлекаться: Closer 6 лет"
          link="#"
          src={news2}
        ></News>
      </Flex>
      <ButtonBig txt="Все новости"></ButtonBig>
    </Flex>
  )
}

export default NewsContainer
