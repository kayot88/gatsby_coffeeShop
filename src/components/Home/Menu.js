import React, { Component } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"

const getCategories = items => {
  const tempCategories = items.map(item => item.node.category)
  const uniqueCategories = Array.from(new Set(tempCategories))
  const categories = ["all", ...uniqueCategories]
  return categories
}

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: this.props.items.edges,
      coffeeItems: this.props.items.edges,
      categories: getCategories(this.props.items.edges),
    }
  }

  handlerItems = category => {
    let tempItems = [...this.state.items]

    if (category === "all") {
      return this.setState({ coffeeItems: tempItems })
    } else {
      let filteredItems = tempItems.filter(
        item => item.node.category === category
      )
      return this.setState({ coffeeItems: filteredItems })
    }
  }
  render() {
    const { categories } = this.state
    if (this.state.items.length > 0) {
      const { coffeeItems } = this.state
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="our menu" />
            {/* categories */}
            <div className="row mb-5 justify-content-center">
              <div className="col col-md-6 d-flex justify-content-around flex-grow-1">
                {categories.map((cat, index) => (
                  <button
                    onClick={() => this.handlerItems(cat)}
                    key={index}
                    className="btn text-uppercase btn-yellow"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            {/* items */}
            <div className="row">
              {coffeeItems.map(({ node }) => {
                return (
                  <div key={node.id} className="col-11 col-md-6 my-3 d-flex">
                    <div>
                      <Img fixed={node.image.fixed} />
                    </div>
                    <div className="flex-grow-1">
                      <div className=" d-flex justify-content-between">
                        <h6 className="mb-0 mx-3">{node.title}</h6>
                        <h6 className="price"> ${node.price} </h6>
                      </div>
                      <p className="itemDescription mx-3 text-muted">
                        {node.description.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Our menu" />
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h1>there are no items to display</h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}
