import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Container from "./container"
import highlightStyles from "./highlight.module.scss"

export default function Highlight(props) {
  const fromHome = props.highlightImg;
  
  const data = useStaticQuery(graphql`
    query {
      homeImg: file(relativePath: { eq: "home_couv.jpg" }) {
        childImageSharp {
          fixed(height: 500) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  if (fromHome) {
    return (
      <section className={`highlight ${ props.highlightClass }`}>
        <Img fixed={data.homeImg.childImageSharp.fixed} />
        <Container>
          <h1 className={highlightStyles.title}>{props.highlightText}</h1>
        </Container>
      </section>
    )
  }
  return (
    <section className={`highlight ${ props.highlightClass }`}>
      <Container>
        <h1 className={highlightStyles.title}>{props.highlightText}</h1>
      </Container>
    </section>
  )
}