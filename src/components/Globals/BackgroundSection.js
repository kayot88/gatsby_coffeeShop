import React from "react"
import BackgroungImage from "gatsby-background-image"

const BackgroundSection = ({ img, styleClass, title, children }) => {
  return (
    <BackgroungImage className={styleClass} fluid={img}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
      {children}
    </BackgroungImage>
  )
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background"
}

export default BackgroundSection
