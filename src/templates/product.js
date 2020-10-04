import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import Highlight from "../components/highlight"
import Card from "../components/card"
import productStyles from "./product.module.scss"

export default function Product({ data }) {
  const post = data.productCard
  return (
    <Layout>
      <SEO
        title={post.boardName}
        description="Achetez un cruiser skate en bois fabriqué artisanalement en France. Nos skates complets sont montés avec des trucks et roues de marque allemande, assurant qualité, confort et durabilité."
      />

      <Highlight
        highlightClass="highlight-product"
        highlightText={post.boardName}
        highlightSubText={post.subCategory}
      />
      
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
                {post.boardName} {post.subCategory}
              </li>
            </ol>
          </nav>
        </Container>
      </section>
      
      <section className={productStyles.section}>
        <Container>
          <div className="row">
            <div className="col-12 col-md-8">
              <Img fluid={post.image.childImageSharp.fluid} className="productVisual" alt={post.boardName} />
            </div>
            <div className="col-12 col-md-4">
              <div className={productStyles.productTitle}>
                {post.boardName}<br />
                {/* post.availability */}
                {post.subCategory}
              </div>
              <span className={productStyles.productPrice}>{post.price}</span>
              <p className={productStyles.productShipping}>
                15,00€ livraison partout en France
              </p>
              <div className={productStyles.productContact}>
                <p>
                  Le paiement en ligne arrive bientôt ! En attendant pour commander cette planche, veuillez nous contacter par email !
                </p>
                <Link to="/contact/" className="btn">nous contacter</Link>
              </div>
              <div className={productStyles.productDetails}>
                <p>
                  {post.details}
                </p>
              </div>
            </div>
          </div>

          <h2>et aussi...</h2>  
          <div className="row">
            {data.allProductCard.edges.map(({ node }, index) => (
              <div className="col-6 col-md-3" key={index}>
                <Card
                  url={'../../'+ node.url }
                  image={ node.image.childImageSharp.fluid }
                  boardName={ node.boardName }
                  availability={ node.availability }
                  price={ node.price }
                  subCategory={ node.subCategory }
                />
              </div>
            ))}
            </div>
        </Container>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($url: String!) {
    productCard(url: { eq: $url }) {
      image {
        childImageSharp {
          fluid(
            maxWidth: 760
            traceSVG: { background: "#f6f6f6", color: "#888" }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      boardName
      price
      subCategory
      availability
      details
      url
    }
    
    allProductCard(limit: 4) {
      edges {
        node {
          image {
            childImageSharp {
              fluid(
                maxWidth: 760
                traceSVG: { background: "#f6f6f6", color: "#888" }
              ) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          boardName
          price
          subCategory
          availability
          url
          slug
        }
      }
    }
  }
`