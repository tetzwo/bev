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
          fixed(
            height: 500
            traceSVG: { background: "#fee1de", color: "#888" }
          ) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  if (fromHome) {
    return (
      <section className={`highlight ${ props.highlightClass }`}>
        <Img fixed={data.homeImg.childImageSharp.fixed} alt="lorem" />
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
        <p className={highlightStyles.subTitle}>{props.highlightSubText}</p>
      </Container>
    </section>
  )
}