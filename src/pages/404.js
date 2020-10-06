import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Container from "../components/container"
import Video from "../components/video"

export default function Image() {
  const data = useStaticQuery(graphql`
    query {
      img404: file(relativePath: { eq: "404.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 730
            traceSVG: { background: "#FFF", color: "#888" }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <section>
      <Container>
        <h1>Woops, something went wrong!</h1>
        <p>
          <Link to="/">Let's go back home</Link>
        </p>
        <Video
            videoSrcURL="https://www.youtube.com/embed/w89nQzJeBV0"
            videoTitle="Baise-en-Ville Breaksdown the Skateboard (subtitles in english)"
          />
        <Img fluid={data.img404.childImageSharp.fluid} />
      </Container>
    </section>
  )
}