import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Menu from './../components/Home/Menu';
import Products from './../components/Home/Products'

const IndexPage = ({ data }) => {
  // console.log(data);
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        styleClass="default-background"
        title="Regular Roman's"
      />
      <Info />
      <Menu items={data.menu} />
      <Products/>
    </Layout>
  )
}

export const query = graphql`
         {
           img: file(relativePath: { eq: "default-background.jpeg" }) {
             childImageSharp {
               fluid {
                 ...GatsbyImageSharpFluid_tracedSVG
               }
             }
           }
           menu: allContentfulCoffeeItem {
             edges {
               node {
                 id
                 title
                 price
                 category
                 description {
                   description
                 }
                 image {
                   fixed(width: 50, height: 50) {
                     ...GatsbyContentfulFixed_tracedSVG
                   }
                 }
               }
             }
           }
         }
       `

export default IndexPage
