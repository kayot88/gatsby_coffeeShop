import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        styleClass="about-background"
        title="about us"
      />
      <Info />
    </Layout>
  )
}
export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
