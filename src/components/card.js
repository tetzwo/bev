import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import cardStyles from "./card.module.scss"

export default function Card(props) {
  return (
    <div className={cardStyles.productCard}>
      <div className={cardStyles.visual}>
        <Link to={ props.slug }>
          <Img fluid={ props.image } />
        </Link>
      </div>
      <div className={cardStyles.content}>
        <p>
          { props.boardName }<br />
          { props.subCategoryDetails }
        </p>
        <span>{ props.price }</span>
      </div>
    </div>
  )
}