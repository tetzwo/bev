import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Container from "../components/container"
import Highlight from "../components/highlight"
import shopStyles from "./shop.module.scss"

export default function Shop({ data }) {
  return (
    <Layout>
      <Highlight highlightText="Easy Shop" highlightClass="highlight-shop" />
      
      <section className={shopStyles.section}>
        <Container>
          <div className="row">
            <div className="col-12 col-md-3">
              Filters
            </div>
            <div className="col-12 col-md-9">
              <div className="row">
              {data.allDataJson.edges.map(({ node }, index) => (
                <div className="col-6 col-lg-4" key={index}>
                  <div className={shopStyles.productCard}>
                    <div className={shopStyles.visual}>
                      <Link to={ node.slug }><img src={ node.image } alt="" /></Link>
                    </div>
                    <div className={shopStyles.content}>
                      <p>
                        { node.name }<br />
                        { node.subCategoryDetails }
                      </p>
                      <span>{ node.price }</span>
                    </div>
                  </div>
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
    allDataJson {
      edges {
        node {
          id
          name
          subCategoryDetails
          price
          image
          slug
        }
      }
    }
  }
`