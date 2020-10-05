import React from "react"
import { Link } from "gatsby"
import breadcrumbStyles from "./breadcrumb.module.scss"

export default function Breadcrumb(props) {
  const fromCategory = props.fromCategory;
  const fromProduct = props.fromProduct;

  if (fromCategory) {
    return (
      <nav aria-label="breadcrumb">
        <ol className={breadcrumbStyles.breadcrumb}>
          <li className={breadcrumbStyles.breadcrumbItem}>
            <Link to="/">accueil</Link>
          </li>
          <li className={breadcrumbStyles.breadcrumbItem}>
            <Link to="/shop/">shop</Link>
          </li>
          <li className={breadcrumbStyles.breadcrumbItem} aria-current="page">
            { props.current }
          </li>
        </ol>
      </nav>
    )
  }
  if (fromProduct) {
    return (
      <nav aria-label="breadcrumb">
        <ol className={breadcrumbStyles.breadcrumb}>
          <li className={breadcrumbStyles.breadcrumbItem}>
            <Link to="/">accueil</Link>
          </li>
          <li className={breadcrumbStyles.breadcrumbItem}>
            <Link to="/shop/">shop</Link>
          </li>
          <li className={breadcrumbStyles.breadcrumbItem}>
            <Link to={ '/shop/'+ props.categorySlug }>{ props.category }</Link>
          </li>
          <li className={breadcrumbStyles.breadcrumbItem} aria-current="page">
            { props.current }
          </li>
        </ol>
      </nav>
    )
  }
  return (
    <nav aria-label="breadcrumb">
      <ol className={breadcrumbStyles.breadcrumb}>
        <li className={breadcrumbStyles.breadcrumbItem}>
          <Link to="/">accueil</Link>
        </li>
        <li className={breadcrumbStyles.breadcrumbItem} aria-current="page">
          { props.current }
        </li>
      </ol>
    </nav>
  )
}