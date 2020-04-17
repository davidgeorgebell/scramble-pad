import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Pad from "../components/pad"
import Sidebar from "../components/sidebar"

const IndexPage = () => (
  <Layout>
    <SEO title="Scramble Pad" />
    <Pad />
    <Sidebar />
  </Layout>
)

export default IndexPage
