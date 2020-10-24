import React from "react"
import SubscribeForm from "./subscribeForm"
import { css } from "@emotion/core"

export default function SubscribeBanner(props) {
  return (
    <section className="py-12 px-4 md:px-12">
      <div
        css={css`
          background: url(${props.bg.fluid.src}) center center/cover;
          position: relative;
          border-radius: 50px;

          &:before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: #3ad6ea;
            z-index: 0;
            opacity: 0.7;
            border-radius: 50px;
          }
        `}
        className="w-full p-12 container mx-auto"
      >
        <div className="max-w-3xl mx-auto relative aspect-ratio--object ">
          <h2 className="text-left text-white font-bold">{props.heading}</h2>
          <SubscribeForm />
        </div>
      </div>
    </section>
  )
}
