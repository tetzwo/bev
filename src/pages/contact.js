import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import Highlight from "../components/highlight"
import Breadcrumb from "../components/breadcrumb"

export default function Contact() {
  return (
    <Layout>
      <SEO title="contactez-nous" />
      <Highlight highlightText="Contactez-nous" highlightClass="highlight-contact" />

      <section>
        <Container>
          <Breadcrumb current="contactez-nous" />
          
          <div className="row">
            <div className="col-12 col-md-8 colContent">
              <h2>par email</h2>
              <p>
                N'hésitez pas, vous avez une question sur un produit, une commande, un événement, c'est avec plaisir que nous vous répondrons :)<br />
                Pour nous écrire :<br />
                <br />
                contact@baise-en-ville-skateboards.com
              </p>

              <form name="contact" method="post" data-netlify="true">
                <p>
                  <label>Your Name: <input type="text" name="name" /></label>   
                </p>
                <p>
                  <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                  <label>Your Role: <select name="role[]" multiple>
                    <option value="leader">Leader</option>
                    <option value="follower">Follower</option>
                  </select></label>
                </p>
                <p>
                  <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                  <button type="submit">Send</button>
                </p>
              </form>
            </div>
            <div className="col-12 col-md-4">
              <h2>depuis Paris</h2>
              <p>
                Besoin de conseils, envie d'essayer nos cruisers, rencontrons nous sur Paris !<br />
                <br />
                Nous appeler :<br />
                + 33 6 61 95 23 87
              </p>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}