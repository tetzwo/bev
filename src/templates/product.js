import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Container from "../components/container"
import Highlight from "../components/highlight"
import productStyles from "./product.module.scss"

export default function Product({ data }) {
  const post = data.dataJson
  return (
    <Layout>
      <Highlight highlightText={post.name} highlightClass="highlight-product" />
      
      <section>
        <Container>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">baise-en-ville skateboards</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/shop/">shop</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {post.name} {post.subCategoryDetails}
              </li>
            </ol>
          </nav>
        </Container>
      </section>
      
      <section className={productStyles.section}>
        <Container>
          <div className="row">
            <div className="col-12 col-md-8">
              <img src={post.image} alt="" />
            </div>
            <div className="col-12 col-md-4">
              <div className={productStyles.productTitle}>
                {post.name}<br />
                {post.subCategoryDetails}
              </div>
              <span className={productStyles.productPrice}>{post.price}</span>
              <p className={productStyles.productShipping}>
                15,00€ livraison partout en France
              </p>
              <div className={productStyles.productContact}>
                <p>
                  Le paiement en ligne arrive bientôt ! En attendant pour commander cette planche, veuillez nous contacter par email !
                </p>
                <Link to="/contact/">nous contacter</Link>
              </div>
              <div className={productStyles.productDetails}>
                <p>
                  {post.details}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    dataJson(id: { eq: $id }) {
      image
      name
      price
      subCategory
      subCategoryDetails
      details
    }
  }
`