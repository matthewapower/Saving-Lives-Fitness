import React from "react"

export default function PersonInfo(props) {
  return (
    <div className={"text-left " + props.className}>
      <h3 className="mb-2 tracking-wider">{props.name}</h3>
      <p className="font-bold mb-2">{props.handle}</p>
      <div className="h-px bg-secondary w-32 mb-8" />
      <p>{props.description}</p>
    </div>
  )
}
