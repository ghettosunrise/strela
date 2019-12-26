import React from "react"
import Artist from "../../components/Artist"
import Flex from "../../styled/flex"
import * as S from "./styles"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Artists = () => {
  const artistData = useStaticQuery(graphql`
    query Artist {
      allContentfulArtist(sort: { fields: artistName, order: ASC }) {
        nodes {
          id
          artistName
          artistPicture {
            fluid {
              src
            }
          }
          pressKit {
            file {
              url
            }
          }
          artistText1 {
            artistText1
          }
          artistText1Ru {
            artistText1Ru
          }
          artistText2 {
            artistText2
          }
          artistText2Ru {
            artistText2Ru
          }
          artistText3 {
            artistText3
          }
          artistText3Ru {
            artistText3Ru
          }
          facebookLink
          igLink
          soundCloudTrackLinks {
            soundCloudTrackLinks
          }
          raLink
          scLink
          artistLogo {
            fluid {
              src
            }
          }
        }
      }
    }
  `)

  console.log("data", artistData)

  return (
    <Flex width="100%" paddingAll=" 0 49px">
      <Flex width="100%" paddingBottom="140px" background="#FFF">
        <S.Title id="artists">Artists</S.Title>

        {/* <Artist />
      <Artist />
      <Artist />
      <Artist /> */}
        {/* <Artist
        desc1="Criminal practice is a project consisting of three Kiev-based DJs and sound producers, Ghetto Sunrise, Roma Khropko and Hopper Field. In November 2019, the trio will be celebrating their 2-year anniversary as a promo group, which has been making some of the most trending parties in Kyiv and Odesa."
        desc2="As well as playing themselves in their unique b2b2b2 style, Criminal Practice give way to their gifted local colleagues and often invite international artists. Among their guests is the resident of the famous Frankfurt club Robert Johnson, Markus Sommer, as well as Phil Evans, Manuel Schatz, Rudolf C, Sweely and Leo Pol."
        desc3="Criminal Practice play vinyl sets that differ in their own sound, already labeled as the Kyiv sound. This is house and techno in various forms. The trio has already shared the stage with such musicians as Markus Sommer, DJ Haus, Sweely, Leo Pol, Manuel Shatz, Kashavar and others. In addition to organizing parties and DJing, they also actively write and release their own music. The list of their releases includes a record on the British label Three Point Oh, a cassette release on the Canadian Philthtrax and Of Paradise VA release. July 22 has marked a special occasion for the musicians, as this was when their newly-established label Criminal Practice Records released the very first vinyl. Circle Movement EP features tracks by the founders themselves as well as their allies, local DJs and producers Grec and Sasha Zlykh."
      /> */}
        {artistData.allContentfulArtist.nodes.map(
          ({
            id,
            artistName,
            artistPicture,
            artistLogo,
            facebookLink,
            igLink,
            raLink,
            pressKit,
            soundCloudTrackLinks: { soundCloudTrackLinks },
            scLink,
            artistText1: { artistText1 },
            artistText2: { artistText2 },
            artistText3: { artistText3 },
            artistText1Ru: { artistText1Ru },
            artistText2Ru: { artistText2Ru },
            artistText3Ru: { artistText3Ru },
          }) => (
            <Artist
              key={id}
              desc1={artistText1}
              desc2={artistText2}
              desc3={artistText3}
              desc1Ru={artistText1Ru}
              desc2Ru={artistText2Ru}
              desc3Ru={artistText3Ru}
              fbLink={facebookLink}
              igLink={igLink}
              raLink={raLink}
              scLink={scLink}
              title={artistName}
              imgMain={artistPicture?.fluid?.src}
              imgLogo={artistLogo?.fluid?.src}
              pressKit={pressKit?.file?.url}
              scTrack={soundCloudTrackLinks}
            />
          )
        )}
      </Flex>
    </Flex>
  )
}

export default Artists
