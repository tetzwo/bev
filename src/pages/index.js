import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import ContainerFluid from "../components/container-fluid"
import Highlight from "../components/highlight"
import indexStyles from "./index.module.scss"

export default function Home() {
  return (
    <Layout>
      <Highlight highlightText="baise-en-ville skateboards" highlightClass="highlight-home" />

      <section className={indexStyles.section}>
        <Container>
          <div className="row">
            <div className="col-6 col-md-6">
              {/* <a href="#">cruisers complets</a> */}
              <img src="/img/home_gauche.jpg" alt="" />
            </div>
            <div className="col-6 col-md-6">
              {/* <a href="#">planches seules</a> */}
              <img src="/img/home_droit.jpg" alt="" />
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
          <img src="/img/apropos_easyconcept.jpg" className="center mw930" alt="" />
        </ContainerFluid>
      </section>
    </Layout>
  )
}