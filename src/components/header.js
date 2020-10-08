import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import TransitionLink from "gatsby-plugin-transition-link"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import Container from "./container"
import headerStyles from "./header.module.scss"

export default function Header() {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "baise-en-ville-logo_x2.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
  `)
  return (
    <header className={headerStyles.header}>
      <Container>
        <div className={headerStyles.content}>
          <Link to="/" className={headerStyles.logo}>
            <Img fluid={data.file.childImageSharp.fluid} alt="Baise-en-ville Skateboards" />
          </Link>

          <ul className={headerStyles.nav}>
            <li><Link to="/">accueil</Link></li>
            <li><Link to="/shop/" activeStyle={{ color: "#fec2c2" }} partiallyActive={true}>shop</Link></li>
            <li><Link to="/a-propos/">à propos</Link></li>
            <li><Link to="/contact/">contact</Link></li>
          </ul>
        </div>
      </Container>
    </header>
  )
}