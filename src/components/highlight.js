import React from "react"
import Container from "./container"
import highlightStyles from "./highlight.module.scss"

export default function Highlight(props) {
  return (
    <section className={`highlight ${ props.highlightClass }`}>
      <Container>
        <h1 className={highlightStyles.title}>{props.highlightText}</h1>
      </Container>
    </section>
  )
}