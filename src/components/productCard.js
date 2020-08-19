import React from "react"
import { Link } from "gatsby"

export default function ProductCard(props) {
  return (
    <Link to={props.slug}>
      <img src={props.img} alt={props.title} className="mx-auto" />
      <div className="flex justify-between">
        <p>{props.title}</p>
        <p>${parseInt(props.price)}</p>
      </div>
    </Link>
  )
}
