import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons"
import Container from "./container"
import footerStyles from "./footer.module.scss"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      footerOne: file(relativePath: { eq: "ico-easy-contact.png" }) {
        childImageSharp {
          fixed(height: 40) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      footerTwo: file(relativePath: { eq: "ico-easy-payment.png" }) {
        childImageSharp {
          fixed(height: 40) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      footerThree: file(relativePath: { eq: "ico-easy-deliver.png" }) {
        childImageSharp {
          fixed(height: 40) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <div>
      <section className={footerStyles.reinsurance}>
        <Container>
          <span className={footerStyles.title}>easy shop</span>
          <div className="row">
            <div className="col-12 col-md-4">
              <div className={footerStyles.reinsuranceCard}>
                <div className={footerStyles.visual}>
                  <Img fixed={data.footerOne.childImageSharp.fixed} alt="" />
                </div>
                <p>
                  Contactez-nous par mail, par téléphone, nous sommes là pour vous&nbsp;!
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className={footerStyles.reinsuranceCard}>
                <div className={footerStyles.visual}>
                  <Img fixed={data.footerTwo.childImageSharp.fixed} alt="" />
                </div>
                <p>
                  Chèque, virement ou PayPal, vous choisissez votre mode de paiement. :)
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className={footerStyles.reinsuranceCard}>
                <div className={footerStyles.visual}>
                  <Img fixed={data.footerThree.childImageSharp.fixed} alt="" />
                </div>
                <p>
                  Livraison internationale, Europe, France ou remise en main propre à Paris&nbsp;!
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <footer className={footerStyles.footer}>
        <Container>
          <ul className={footerStyles.socialNav}>
            <li>
              <Link to="/"><FontAwesomeIcon icon={faFacebook} /></Link>
            </li>
            <li>
              <Link to="/"><FontAwesomeIcon icon={faInstagram} /></Link>
            </li>
            <li>
              <Link to="/"><FontAwesomeIcon icon={faPinterest} /></Link>
            </li>
          </ul>
          <p className={footerStyles.copyright}>
            ©Baise-en-ville Skateboards - Tous droits réservés
          </p>
        </Container>
      </footer>
    </div>
  )
}