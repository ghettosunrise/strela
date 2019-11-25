import React from "react"
import { Link } from "gatsby"
import AgencyHeader from "../../containers/AgencyHeader"
import Flex from "../../styled/flex"
import Layout from "../../components/layout"
// import MainSc1 from "../../components/UI/containers/mainsc1"
import SEO from "../../components/seo"

const AgencyHome = () => (
  <Flex width="100%" paddingAll="46px 49px">
    <SEO title="Home" />
    <AgencyHeader />
  </Flex>
)

export default AgencyHome
