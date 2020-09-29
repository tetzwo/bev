import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../components/container"
import Img from "gatsby-image"

export default function Image() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "lorem.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 730) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <section>
      <Container>
        <div className="row">
          <div className="col-12 col-md-8">
            <Img fluid={data.file.childImageSharp.fluid} title="Pouet" backgroundColor="#F00" alt="" />
          </div>
          <div className="col-12 col-md-4">
            lorem
          </div>
        </div>
      </Container>
    </section>
  )
}