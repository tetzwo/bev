import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import Highlight from "../components/highlight"
import Card from "../components/card"
import shopStyles from "./shop.module.scss"

export default function Shop({ data }) {
  const listItems = data.allFilters.distinct.map((filter) =>
    <li key={filter}>
      <button>{filter}</button>
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
        highlightSubText="lorem"
      />

      <section className={shopStyles.section}>
        <Container>
          <div className="row">
            <div className="col-12 col-md-3">
              <ul className={shopStyles.filtersList}>
                {listItems}
              </ul>
            </div>
            <div className="col-12 col-md-9">
              <div className="row">
              {data.allProductCard.edges.map(({ node }, index) => (
                <div className="col-6 col-lg-4" key={index}>
                  <Card
                    slug={ node.slug }
                    image={ node.image.childImageSharp.fluid }
                    boardName={ node.boardName }
                    price={ node.price }
                    subCategoryDetails={ node.subCategoryDetails }
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
      distinct(field: subCategoryDetails)
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
          subCategoryDetails
          price
          slug
        }
      }
    }
  }
`