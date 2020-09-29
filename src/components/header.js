import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Container from "./container"
import headerStyles from "./header.module.scss"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "baise-en-ville-logo_x2.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
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
            <ListLink to="/">Home</ListLink>
            <ListLink to="/shop/">Shop</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul>
        </div>
      </Container>
    </header>
  )
}