import React from "react"
import { Link } from "gatsby"
import { FaBeer } from "react-icons/fa"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <FaBeer />
  </Layout>
)


export default IndexPage
