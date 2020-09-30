import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Container from "../components/container"
import ContainerFluid from "../components/container-fluid"
import Highlight from "../components/highlight"
import indexStyles from "./index.module.scss"

export default function Home({ data }) {
  return (
    <Layout>
      <Highlight highlightText="baise-en-ville skateboards" highlightClass="highlight-home" highlightImg="home_couv.jpg" />

      <section className={indexStyles.section}>
        <Container>
          <div className="row">
            <div className="col-6 col-md-6">
              <Img fluid={data.imageOne.childImageSharp.fluid} />
            </div>
            <div className="col-6 col-md-6">
              <Img fluid={data.imageTwo.childImageSharp.fluid} />
            </div>
          </div>
        </Container>
      </section>
      
      {/* <video class="video" width="1200" preload="auto" autoplay="" loop="" muted="muted">
        <source src="http://www.baise-en-ville-skateboards.com/wp-content/uploads/2016/06/baise-en-ville-home.webm" type="video/webm">
        <source src="http://www.baise-en-ville-skateboards.com/wp-content/uploads/2016/06/baise-en-ville-home.mp4" type="video/mp4">
        <source src="http://www.baise-en-ville-skateboards.com/wp-content/uploads/2016/06/baise-en-ville-home.ogv" type="video/ogg">
      </video> */}

      <section className={indexStyles.section}>
        <Container>
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>easy ride</h2>
              <p>
                Baise-en-ville skateboards conçoit et fabrique dans une démarche locale et artisanale des cruisers skates taillés pour la balade en ville. Monter sur un skate c'est rechercher et expérimenter une sensation de liberté unique, s'offrir un regard critique et créatif sur le monde qui nous entoure. C'est dans cet état d'esprit que nous proposons des cruisers et accessoires de qualité, pour tous et dans un seul but : découvrir la ville !
              </p>
            </div>
            <div className="col-12 col-md-6">
              <h2>easy walk</h2>
              <p>
                Se déplacer en skateboard c'est aussi passer du temps à pied la planche à la main. Pour nous, la marche est un trait d'union dans le skateboard, elle doit être un plaisir, une invitation à la découverte. Nos cruisers sont dimensionnés pour être pratiques et agréables à porter. Nos modèles avec un trou dans le nose permettront a certains moments une prise en main plus facile.
              </p>
            </div>
          </div>
        </Container>

        <ContainerFluid>
          <Img fluid={data.imageThree.childImageSharp.fluid} className="center mw1110" />
        </ContainerFluid>
      </section>
    </Layout>
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
    imageOne: file(relativePath: { eq: "home_gauche.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "home_droit.jpg" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "apropos_easyconcept.jpg" }) {
      ...fluidImage
    }
  }
`;