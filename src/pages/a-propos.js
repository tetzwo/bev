import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import ContainerFluid from "../components/container-fluid"
import Highlight from "../components/highlight"
import Breadcrumb from "../components/breadcrumb"
import Video from "../components/video"

export default function Apropos({ data }) {
  return (
    <Layout>
      <SEO title="A propos" />
      <Highlight highlightText="handmade in France" highlightClass="highlight-a-propos" />

      <section>
        <Container>
          <Breadcrumb current="à propos" />

          <Video
            videoSrcURL="https://www.youtube.com/watch?v=w89nQzJeBV0&t=1s&ab_channel=BeBetterParis"
            videoTitle="Baise-en-Ville Breaksdown the Skateboard (subtitles in english)"
          />
          
          <div className="row rowAlignCenter">
            <div className="col-12 col-md-6 colContent">
              <h2>à propos</h2>
              <p>
                Baise-en-ville Skateboards est une marque indépendante Française créée en 2016, spécialisée dans le cruiser skate. Nous existons pour transmettre, inspirer et offrir des produits de qualité pour le plaisir de se déplacer en skateboard.
              </p>
            </div>
            <div className="col-12 col-md-6 colContent">
              <Img fluid={data.imageOne.childImageSharp.fluid} alt="lorem" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 colContent">
              <h2>fabrication artisanale</h2>
              <p>
                Nos skates sont fabriqués dans des ateliers Français avec des artisans indépendants ayant pour objectifs communs la maîtrise de l’ensemble du processus de création, production et vente.
              </p>
            </div>
            <div className="col-12 col-md-6 colContent">
              <h2>design local</h2>
              <p>
                Nos skates sont fabriqués dans des ateliers Français avec des artisans indépendants ayant pour objectifs communs la maîtrise de l’ensemble du processus de création, production et vente.
              </p>
            </div>
          </div>
        </Container>

        <ContainerFluid>
          <Img fluid={data.imageTwo.childImageSharp.fluid} className="center mw1110" alt="lorem" />
        </ContainerFluid>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "apropos_groupe.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 540
          traceSVG: { background: "#f6f6f6", color: "#888" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    imageTwo: file(relativePath: { eq: "apropos_profil.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1110
          traceSVG: { background: "#f6f6f6", color: "#888" }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;