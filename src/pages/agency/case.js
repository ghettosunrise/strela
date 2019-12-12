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
        title="Сloser"
        description="Как организатор Closer является одним из самых известных среди мировых электронных букингов"
      />
      <CaseInfo
        titleFirst="Closer является одним из самых известных среди мировых электронных букингов."
        textFirst="Как организатор Closer является одним из самых известных среди мировых электронных букингов. На вечеринках и фестивалях Closer играют и легендарные артисты как Moodymann, Lil Louis, Laurent Garnier, Ricardo Villalobos, и самые успешные продюсеры, диджеи и музыкальные лейблы новой волны, например, Jane Fitz, Dj Masda, Apollonia, Giegling и другие."
        textSecond="Как организатор Closer является одним из самых известных среди мировых электронных букингов. На вечеринках и фестивалях Closer играют и легендарные артисты как Moodymann, Lil Louis, Laurent Garnier, Ricardo Villalobos, и самые успешные продюсеры, диджеи и музыкальные лейблы новой волны, например, Jane Fitz, Dj Masda, Apollonia, Giegling и другие."
        titleSecond="Что мы сделали"
      />
      <Divider text="Актуальные материалы о вечеринках Closer, к которым мы приложили руку"></Divider>
      <News />
    </Layout>
  )
}

export default Case
