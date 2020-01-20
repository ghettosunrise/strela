import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import CaseInfo from "../containers/CaseInfo"
import Divider from "../components/Divider"

const Case = ({ data }) => {
  const [isClosed, setIsClosed] = useState(true)
  const [isClosedMobile, setIsClosedMobile] = useState(true)

  return (
    <Layout
      isClosed={isClosed}
      setIsClosed={setIsClosed}
      isClosedMobile={isClosedMobile}
      setIsClosedMobile={setIsClosedMobile}
    >
      <SEO title="Case" />
      {/* <Mobile /> */}
      <Banner
        cases
        title={data.contentfulCase.title}
        description={data.contentfulCase.bannerDescription.bannerDescription}
        image={data.contentfulCase.bannerImage.file.url}
        hashtags={data.contentfulCase.hashtags}
      />
      <CaseInfo
        titleFirst={data.contentfulCase.selectedText}
        textFirst={data.contentfulCase.caseDescription.caseDescription}
        textSecond={data.contentfulCase.whatWeDoText.whatWeDoText}
        titleSecond="Что мы сделали"
        imgDesc1={data.contentfulCase.firstImageDescription}
        imgDesc2={data.contentfulCase.secondImageDescription}
        imgSrc1={data.contentfulCase.caseAdditionalImages[0].fluid.src}
        imgSrc2={data.contentfulCase.caseAdditionalImages[1].fluid.src}
      />
      <Divider text={data.contentfulCase.dividerText}></Divider>
      {/* <News /> */}
    </Layout>
  )
}

export const query = graphql`
  query FullCase($id: String, $customId: String) {
    contentfulCase(id: { eq: $id }, customId: { eq: $customId }) {
      id
      title
      customId
      subtitle
      selectedText
      dividerText
      secondImageDescription
      firstImageDescription
      bannerImage {
        file {
          url
        }
      }
      hashtags {
        id
        name
        value
      }
      caseAdditionalImages {
        fluid {
          src
        }
      }
      caseDescription {
        caseDescription
      }
      bannerDescription {
        bannerDescription
      }
      whatWeDoText {
        whatWeDoText
      }
    }
  }
`

export default Case
