import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import qs from "query-string"

import Layout from "../../components/layout"
import Contact from "../../containers/ContactUs"
import SEO from "../../components/seo"
import Banner from "../../components/Banner"
import CaseInfo from "../../containers/CaseInfo"
import Divider from "../../components/Divider"
import News from "../../containers/CasesNews"

const Case = ({ location }) => {
  console.log(location.search)

  const { caseId } = qs.parse(location.search)

  const data = useStaticQuery(
    graphql`
      query FullCase($id: StringQueryOperatorInput) {
        contentfulCase(id: $id) {
          title
          subtitle
          selectedText
          secondImageDescription
          firstImageDescription
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
    `,
    {
      variables: {
        id: caseId,
      },
    }
  )

  console.log(data)

  const [isClosed, setIsClosed] = useState(true)
  return (
    <Layout isClosed={isClosed} setIsClosed={setIsClosed}>
      <SEO title="Case" />
      <Banner
        cases
        title={data.contentfulCase.title}
        description={data.contentfulCase.bannerDescription.bannerDescription}
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
      <Divider text="Актуальные материалы о вечеринках Closer, к которым мы приложили руку"></Divider>
      <News />
    </Layout>
  )
}

export default Case
