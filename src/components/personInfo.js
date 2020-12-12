import React from "react"

export default function PersonInfo(props) {
  return (
    <div className={"text-left " + props.className}>
      <h3 className="mb-2 tracking-wider">{props.name}</h3>
      {props.handle ? (
        <a
          className="font-bold mb-4 block"
          href={`https://instagram.com/${props.handle.replace("@", "")}`}
          target="_blank"
          rel="noreferrer"
        >
          {props.handle}
        </a>
      ) : (
        ""
      )}
      <div className="h-px bg-secondary w-32 mb-8" />
      <p>{props.description}</p>
    </div>
  )
}
