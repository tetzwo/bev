import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import cardStyles from "./card.module.scss"

export default function Card(props) {
  const availability = props.availability !== "disponible" ?
    '['+ props.availability +']' : '';
  return (
    <div className={cardStyles.productCard}>
      <Link to={ props.url } className={cardStyles.visual}>
        <Img fluid={ props.image } alt={ props.boardName } />
      </Link>
      <div className={cardStyles.content}>
        <span>{ props.boardName }</span>
        <span>{ props.price }</span>
      </div>
      <div className={cardStyles.details}>
        { availability }
        <span>{ props.subCategory }</span>
      </div>
    </div>
  )
}