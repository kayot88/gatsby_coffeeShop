import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />

        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted md-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
              quod, obcaecati numquam tenetur ut omnis unde deleniti dolor
              maiores officiis quo voluptatibus impedit accusantium voluptas
              nostrum iste culpa aperiam illum vel magnam. Numquam, sunt
              molestias cumque asperiores, omnis maxime, modi odio vitae aliquam
              excepturi veniam illum nisi! Delectus, magni alias?
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">About</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
