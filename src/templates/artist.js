import React, { useState } from "react"
import { graphql } from "gatsby"
import Mobile from "../containers/MobileMenu"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ArtistPage from "../containers/ArtistPage"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Artist = ({ data }) => {
  const [isClosed, setIsClosed] = useState(true)
  const [isClosedMobile, setIsClosedMobile] = useState(true)

  // return null

  return (
    <Layout
      isClosed={isClosed}
      setIsClosed={setIsClosed}
      isClosedMobile={isClosedMobile}
      setIsClosedMobile={setIsClosedMobile}
    >
      <SEO title="Case" />
      <ArtistPage data={data} />
      {/* <Mobile /> */}
    </Layout>
  )
}

export const query = graphql`
  query MyArtist($linkId: String) {
    contentfulArtist(linkId: { eq: $linkId }) {
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
`

export default Artist
