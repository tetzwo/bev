import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import Highlight from "../components/highlight"

export default function Contact() {
  return (
    <Layout>
      <SEO title="contactez-nous" />
      <Highlight highlightText="Contact" highlightClass="highlight-contact" />

      <section>
        <Container>
          <p>
            N’hésitez pas, vous avez une question sur un produit, une commande, un événement, c’est avec plaisir que nous vous répondrons :)<br />
            Pour nous écrire : contact@baise-en-ville-skateboards.com
          </p>

          <h2>from Paris</h2>
          <p>
            Se rencontrer :<br />
            Besoin de conseils, envie d’essayer nos cruisers, rencontrons nous sur Paris.<br />
            <br />
            Nous appeler :<br />
            + 33 6 61 95 23 87
          </p>
        </Container>
      </section>
    </Layout>
  )
}