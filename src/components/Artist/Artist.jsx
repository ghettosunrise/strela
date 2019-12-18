import React from "react"
import Flex from "../../styled/flex"
import * as S from "./styles"
import img1 from "../../images/artist1.png"
import img1sm from "../../images/artist1sm.png"
import Btn from "../../components/Buttons/ButtonBlue"

const Artist = ({
  desc1,
  desc2,
  desc3,
  title,
  eventCity,
  eventClub,
  eventDate,
  eventName,
}) => {
  return (
    <Flex width="100%" row justify="space-between">
      <Flex marginRight="2.6%">
        <img src={img1sm}></img>
      </Flex>
      <Flex width="100%" shrink="1">
        <Flex width="100%">
          <S.ArtistTitle>{title}</S.ArtistTitle>
          <S.DecriptionFirts>{desc1}</S.DecriptionFirts>
          <img src={img1}></img>
        </Flex>
        <Flex width="100%" row justify="space-between">
          <Flex width="64%">
            <S.DescriptionSecond>{desc2}</S.DescriptionSecond>
            <S.DescriptionThird>{desc3}</S.DescriptionThird>
          </Flex>
          <Sidebar></Sidebar>
        </Flex>
        <Flex width="100%">
          <S.Upcoming>Upcoming events</S.Upcoming>
          <Flex width="100%" row justify="space-between">
            <Event
              date={eventDate}
              city={eventCity}
              name={eventName}
              club={eventClub}
            />
            <Event
              date="Thu, 31 Oct 2019"
              city="Vienna(AU)"
              name="Criminal Practice - Halloween"
              club="Grelle Forelle"
            />
            <Event
              date="Thu, 31 Oct 2019"
              city="Vienna(AU)"
              name="Criminal Practice - Halloween"
              club="Grelle Forelle"
            />
            <Event
              date="Thu, 31 Oct 2019"
              city="Vienna(AU)"
              name="Criminal Practice - Halloween"
              club="Grelle Forelle"
            />
          </Flex>
        </Flex>
        <Flex row align="center" justify="center" width="auto">
          <S.Arrow />
          <S.CloseTxt>Close</S.CloseTxt>
        </Flex>
      </Flex>
    </Flex>
  )
}

export const Event = ({ date, club, city, name }) => {
  return (
    <Flex width="23.6%">
      <S.EventDate>
        <span>{date}</span>/ <br />
        <span>{city}</span>
      </S.EventDate>
      <S.EventName>
        <p>{name} at</p>
        <a href="#">{club}</a>
      </S.EventName>
    </Flex>
  )
}

const Sidebar = () => (
  <S.Sidebar>
    <p>Translate to</p>
    <Flex row width="72px" marginBottom="30px" justify="space-between">
      <S.Translate>eng</S.Translate>
      <S.Translate>ru</S.Translate>
    </Flex>
    <p>In social media</p>
    <Flex width="100%" marginBottom="30px" row justify="space-between">
      <S.Link href="#">FB</S.Link>
      <S.Link href="#">IG</S.Link>
      <S.Link href="#">RA</S.Link>
      <S.Link href="#">SOUNDCLOUD</S.Link>
    </Flex>
    <p>share with</p>
    <Flex width="93px" marginBottom="30px" row justify="space-between">
      <S.Copy></S.Copy>
      <S.Fb></S.Fb>
    </Flex>
    <p>download</p>
    <Btn />
  </S.Sidebar>
)

export default Artist
