import React from "react"
import SubscribeForm from "./subscribeForm"

export default function SubscribeBanner(props) {
  return (
    <section className="py-12 px-4 md:px-12">
      <div
        style={{
          background: `url(${props.bg.fluid.src}) center center/cover`,
          borderRadius: "50px",
        }}
        className="w-full p-12 container mx-auto"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left text-white font-bold">{props.heading}</h2>
          <SubscribeForm />
        </div>
      </div>
    </section>
  )
}
