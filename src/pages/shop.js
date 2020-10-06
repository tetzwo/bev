import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import Highlight from "../components/highlight"
import Card from "../components/card"
import Breadcrumb from "../components/breadcrumb"
import shopStyles from "./shop.module.scss"

export default function Shop({ data }) {
  const listItems = data.allFilters.distinct.map((filter) =>
    <li key={filter}>
      <Link to={ filter.replace(/\s+/g, '-').toLowerCase() }>{filter}</Link>
    </li>
  );

  return (
    <Layout>
      <SEO
        title="easy shop"
        description="Achetez un cruiser skate en bois fabriqué artisanalement en France. Nos skates complets sont montés avec des trucks et roues de marque allemande, assurant qualité, confort et durabilité."
      />
      
      <Highlight
        highlightClass="highlight-shop"
        highlightText="Easy Shop"
      />

      <section className={shopStyles.section}>
        <Container>
          <Breadcrumb current="shop" />

          <div className="row">
            <div className="col-12 col-md-3">
              <ul className="filtersList">
                {listItems}
              </ul>
            </div>
            <div className="col-12 col-md-9">
              <div className="row rowContent">
              {data.allProductCard.edges.map(({ node }, index) => (
                <div className="col-6 col-lg-4" key={index}>
                  <Card
                    url={ node.url }
                    image={ node.image.childImageSharp.fluid }
                    boardName={ node.boardName }
                    availability={ node.availability }
                    price={ node.price }
                    subCategory={ node.subCategory }
                  />
                </div>
              ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allFilters: allProductCard {
      distinct(field: subCategory)
    }
    
    allProductCard {
      edges {
        node {
          image {
            childImageSharp {
              fluid(
                maxWidth: 280
                traceSVG: { background: "#f6f6f6", color: "#888" }
              ) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          boardName
          subCategory
          availability
          price
          url
        }
      }
    }
  }
`