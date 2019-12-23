import React, { useState } from "react"
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
  const [isHidden, setIsHidden] = useState(1)
  const [isEnglish, setIsEnglish] = useState(0)

  return (
    <Flex width="100%" paddingBottom="140px" background="#FFF">
      <S.Title id="artists">Artists</S.Title>
      <S.ArtistWrapper
        row
        width="100%"
        justify="space-between"
        isHidden={isHidden}
      >
        <Flex marginRight="2.6%">
          <img src={img1sm}></img>
        </Flex>
        <S.ArtistContent>
          <Flex width="100%" isHidden={isHidden}>
            <S.ArtistTitle>{title || "Artist name"}</S.ArtistTitle>
            <S.DecriptionFirts>{desc1}</S.DecriptionFirts>

            {isHidden === 0 ? (
              <>
                <img src={img1}></img>
              </>
            ) : null}
          </Flex>
          <Flex width="100%" row justify="space-between" isHidden={isHidden}>
            {isHidden === 0 ? (
              <>
                <Flex width="64%">
                  <S.DescriptionSecond>{desc2}</S.DescriptionSecond>
                  <S.DescriptionThird>{desc3}</S.DescriptionThird>
                </Flex>
                <Sidebar></Sidebar>
              </>
            ) : null}
          </Flex>
          <>
            {isHidden === 0 ? (
              <>
                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  isHidden={isHidden}
                  frameborder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/728599840&color=%232403a6&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                ></iframe>
              </>
            ) : null}
          </>

          <Flex width="100%" isHidden={isHidden}>
            {isHidden === 0 ? (
              <>
                {" "}
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
              </>
            ) : null}
          </Flex>
          <S.ArrowWrap
            row
            align="center"
            justify="center"
            width="auto"
            isHidden={isHidden}
          >
            <S.Arrow isHidden={isHidden} />
            {isHidden === 1 ? (
              <S.CloseTxt onClick={() => setIsHidden(0)}>Read More</S.CloseTxt>
            ) : (
              <S.CloseTxt onClick={() => setIsHidden(1)}>Close</S.CloseTxt>
            )}
          </S.ArrowWrap>
        </S.ArtistContent>
      </S.ArtistWrapper>
    </Flex>
  )
}

export const Event = ({ date, club, city, name, isHidden }) => {
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

const Iframe = ({ isHidden }) => {
  return (
    <iframe
      width="100%"
      height="166"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/728599840&color=%232403a6&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    ></iframe>
  )
}

const Sidebar = ({ isHidden, isEnglish, setIsEnglish }) => {
  return (
    <S.Sidebar isHidden={isHidden}>
      <p>Translate to</p>
      <Flex row width="72px" marginBottom="30px" justify="space-between">
        <S.Translate
          onClick={() => {
            setIsEnglish(0)
          }}
        >
          eng
        </S.Translate>
        <S.Translate
          onClick={() => {
            setIsEnglish(1)
          }}
        >
          ru
        </S.Translate>
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
}

export default Artist
