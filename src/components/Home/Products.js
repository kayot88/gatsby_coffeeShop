import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Title from "./../Globals/Title"
import Product from './Product';

const getProducts = graphql`
  {
    products: allContentfulCoffeeProducts {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 426) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Products = () => {
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title="our products" />
              <div className="row">
                 {data.products.edges.map(({node:product}) => {
                  //  console.log(data);
                   return <Product key={product.id} product={product}/>
                 }  )}
              </div>
            </div>
          </section>
        )
      }}
    ></StaticQuery>
  )
}

export default Products
