import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Flex from "../../styled/flex"
import { Link } from "gatsby"
import * as S from "./styles"


const Artist = ({
  artist: {
    artistNameL: title,
    artistLogo,
    linkId,
    artistText1: { artistText1: desc1 },
    artistText1Ru: { artistText1Ru: desc1Ru },
  },
}) => {
  const parsed1 = JSON.parse(desc1)
  const parsed1Ru = JSON.parse(desc1Ru)
  // console.log(pressKit)

  return (
    <S.ArtistWrapper row width="100%" justify="space-between" marginTop="60px" mobileMargin="10px 0 0">
      <Flex marginRight="2.6%">
        <img src={artistLogo?.fluid?.src}></img>
      </Flex>
      <S.ArtistContent>
        <Flex width="100%">
          <S.ArtistTitle>{title || "Artist name"}</S.ArtistTitle>
          <S.DecriptionFirts>
            {documentToReactComponents(parsed1)}
          </S.DecriptionFirts>
        </Flex>
        {/* <Flex width="100%" >
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
        <S.ArrowWrap row align="center" justify="center" width="auto">
          <S.Arrow />

          <S.CloseTxt>
            <Link to={`/booking/${linkId}`}>Read more</Link>
          </S.CloseTxt>
        </S.ArrowWrap>
      </S.ArtistContent>
    </S.ArtistWrapper>
  )
}

// export const Event = ({ date, club, city, name, isHidden }) => {
//   return (
//     <Flex width="23.6%">
//       <S.EventDate>
//         <span>{date}</span>/ <br />
//         <span>{city}</span>
//       </S.EventDate>
//       <S.EventName>
//         <p>{name} at</p>
//         <a href="#">{club}</a>
//       </S.EventName>
//     </Flex>
//   )
// }

export default Artist
