import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"
import Img from "gatsby-image"

export default function Image({ data }) {
  return (
    <section>
      <Container>
        <div className="row">
          <div className="col-12 col-md-8">
            <Img fluid={data.imageOne.childImageSharp.fluid} />
            <Img fluid={data.imageTwo.childImageSharp.fluid} />
            <Img fluid={data.imageThree.childImageSharp.fluid} />
          </div>
          <div className="col-12 col-md-4">
            lorem
          </div>
        </div>
      </Container>
    </section>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "deck_coco_00.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "deck_loveme_00.jpg" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "deck_ballerine_00.jpg" }) {
      ...fluidImage
    }
  }
`;