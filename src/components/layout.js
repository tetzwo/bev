import React from "react"
import { Link } from "gatsby"
import layoutStyles from "./layout.module.scss"
import Container from "./container"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div>
      <header className={layoutStyles.header}>
        <Container>
          <div className={layoutStyles.content}>
            <Link to="/" className={layoutStyles.logo}>
              <img src="/img/baise-en-ville-logo_x2.png" alt="Baise-en-ville Skateboards lorem" />
            </Link>

            <ul className={layoutStyles.nav}>
              <ListLink to="/">Home</ListLink>
              <ListLink to="/shop/">Shop</ListLink>
              <ListLink to="/contact/">Contact</ListLink>
            </ul>
          </div>
        </Container>
      </header>

      {children}

      <section className={layoutStyles.reinsurance}>
        <Container>
          <span className={layoutStyles.title}>easy shop</span>
          <div className="row">
            <div className="col-12 col-md-4">
            <img src="/img/ico-easy-contact.png" className="center" alt="" />
              <p>
                Contactez-nous par mail, par téléphone, nous sommes là pour vous !
              </p>
            </div>
            <div className="col-12 col-md-4">
            <img src="/img/ico-easy-payment.png" className="center" alt="" />
              <p>
                Chèque, virement ou PayPal, vous choisissez votre mode de paiement. :)
              </p>
            </div>
            <div className="col-12 col-md-4">
            <img src="/img/ico-easy-deliver.png" className="center" alt="" />
              <p>
                Livraison internationale, Europe, France ou remise en main propre à Paris !
              </p>
            </div>
          </div>
        </Container>
      </section>

      <footer className={layoutStyles.footer}>
        <Container>
          Footer
        </Container>
      </footer>
    </div>
  )
}