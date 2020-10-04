import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import cardStyles from "./card.module.scss"

export default function Card(props) {
  return (
    <div className={cardStyles.productCard}>
      <div className={cardStyles.visual}>
        <Link to={ props.url }>
          <Img fluid={ props.image } alt={ props.boardName } />
        </Link>
      </div>
      <div className={cardStyles.content}>
        <span>{ props.boardName }</span>
        <span>{ props.price }</span>
      </div>
      <div>
        {/* props.availability */}
        { props.subCategory }
      </div>
    </div>
  )
}