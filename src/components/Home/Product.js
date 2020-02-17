import React from "react"
import Img from "gatsby-image"

const Product = ({ product }) => {
  console.log(product.image)
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img fluid={product.image.fixed} className="card-img-top" />
        <div className="card-body text-center">
          <h6>{product.title}</h6>
          <h6 className="price">${product.price}</h6>
          <button className="btn btn-yellow mt-3 text-capitalize">
            add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
