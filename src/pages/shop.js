import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import Highlight from "../components/highlight"

export default function Shop() {
  return (
    <Layout>
      <Highlight highlightText="Easy Shop" highlightClass="highlight-shop" />
      
      <section>
        <Container>
          <div className="row">
            <div className="col-12 col-md-3">
              Filters
            </div>
            <div className="col-12 col-md-9">
              <p>
                shop
              </p>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}