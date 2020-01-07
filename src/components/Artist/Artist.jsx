import React, { useState, useRef } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Flex from "../../styled/flex"
import * as S from "./styles"
import Btn from "../../components/Buttons/ButtonBlue"

const Artist = ({
  artist: {
    id,
    artistNameL: title,
    artistPicture,
    artistLogo,
    facebookLink: fbLink,
    igLink: igLink,
    raLink: raLink,
    pressKit,
    soundCloudTrackLinks: { soundCloudTrackLinks },
    scLink,
    artistText1: { artistText1: desc1 },
    artistText2: { artistText2: desc2 },
    artistText3: { artistText3: desc3 },
    artistText1Ru: { artistText1Ru: desc1Ru },
    artistText2Ru: { artistText2Ru: desc2Ru },
    artistText3Ru: { artistText3Ru: desc3Ru },
  },
}) => {
  const [isHidden, setIsHidden] = useState(1)
  const [isEnglish, setIsEnglish] = useState(1)

  const parsed1 = JSON.parse(desc1)
  const parsed1Ru = JSON.parse(desc1Ru)
  const parsed2 = JSON.parse(desc2)
  const parsed2Ru = JSON.parse(desc2Ru)
  const parsed3 = JSON.parse(desc3)
  const parsed3Ru = JSON.parse(desc3Ru)
  const parsed4 = JSON.parse(soundCloudTrackLinks)
  console.log(pressKit)

  return (
    <S.ArtistWrapper
      row
      width="100%"
      justify="space-between"
      isHidden={isHidden}
      marginTop="60px"
    >
      <Flex marginRight="2.6%">
        <img src={artistLogo?.fluid?.src}></img>
      </Flex>
      <S.ArtistContent>
        <Flex width="100%" isHidden={isHidden}>
          <S.ArtistTitle>{title || "Artist name"}</S.ArtistTitle>
          <S.DecriptionFirts>
            {isEnglish
              ? documentToReactComponents(parsed1)
              : documentToReactComponents(parsed1Ru)}
          </S.DecriptionFirts>

          {isHidden === 0 ? (
            <>
              <img src={artistPicture?.fluid?.src}></img>
            </>
          ) : null}
        </Flex>
        <Flex width="100%" row justify="space-between" isHidden={isHidden}>
          {isHidden === 0 ? (
            <>
              <Flex width="64%">
                <S.DescriptionSecond>
                  {isEnglish
                    ? documentToReactComponents(parsed2)
                    : documentToReactComponents(parsed2Ru)}
                </S.DescriptionSecond>
                <S.DescriptionThird>
                  {isEnglish
                    ? documentToReactComponents(parsed3)
                    : documentToReactComponents(parsed3Ru)}
                </S.DescriptionThird>
              </Flex>
              <Sidebar
                fbLink={fbLink}
                igLink={igLink}
                raLink={raLink}
                scLink={scLink}
                pressKit={pressKit}
                setIsEnglish={setIsEnglish}
              ></Sidebar>
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
                src={
                  `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/` +
                  documentToReactComponents(parsed4) +
                  `&color=%232403a6&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`
                }
              ></iframe>
            </>
          ) : null}
        </>

        {/* <Flex width="100%" isHidden={isHidden}>
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
        </Flex> */}
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

const Iframe = ({ isHidden, scTrack }) => {
  return (
    <iframe
      width="100%"
      height="166"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      src=""
    ></iframe>
  )
}

const Sidebar = ({
  isHidden,
  isEnglish,
  setIsEnglish,
  igLink,
  fbLink,
  raLink,
  scLink,
  pressKit,
}) => {
  const textarea = useRef()

  return (
    <S.Sidebar isHidden={isHidden}>
      <textarea
        ref={textarea}
        style={{ position: "absolute", left: -9999 }}
        value={window.location.href}
      />
      <p>Translate to</p>
      <Flex row width="72px" marginBottom="30px" justify="space-between">
        <S.Translate
          onClick={() => {
            setIsEnglish(1)
          }}
        >
          eng
        </S.Translate>
        <S.Translate
          onClick={() => {
            setIsEnglish(0)
          }}
        >
          ru
        </S.Translate>
      </Flex>
      <p>In social media</p>
      <Flex width="100%" marginBottom="30px" row justify="space-between">
        <S.Link href={fbLink}>FB</S.Link>
        <S.Link href={igLink}>IG</S.Link>
        <S.Link href={raLink}>RA</S.Link>
        <S.Link href={scLink}>SOUNDCLOUD</S.Link>
      </Flex>
      <p>share with</p>
      <Flex width="93px" marginBottom="30px" row justify="space-between">
        <S.Copy
          onClick={() => {
            textarea.current.select()
            document.execCommand("copy")
          }}
        />
        <S.Fb></S.Fb>
      </Flex>
      <p>download</p>
      <Btn download pressKit={pressKit.file.url} />
    </S.Sidebar>
  )
}

export default Artist
