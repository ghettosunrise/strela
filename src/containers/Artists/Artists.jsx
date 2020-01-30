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
          artistText1 {
            artistText1
          }
          artistText1Ru {
            artistText1Ru
          }
          linkId
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

  const data = artistData.allContentfulArtist.nodes

  return (
    <Flex width="100%" paddingAll=" 0 49px" tabletPadding="0 30px" mobilePadding="0 20px">
      <Flex width="100%" paddingBottom="140px" z="2">
        <S.Title id="artists">Artists</S.Title>
        {artistData.allContentfulArtist.nodes.map(artist => (
          <Artist key={artist.id} artist={artist} data={data} />
        ))}
      </Flex>
    </Flex>
  )
}

export default Artists
