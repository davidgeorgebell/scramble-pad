import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ScramblePad from "../components/scramblePad"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ScramblePad />
  </Layout>
)

export default IndexPage
