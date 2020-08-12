import React from "react"

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
          <form action="#" className="mb-0">
            <div className="flex flex-col bg-gray-300 rounded-lg p-4 mb-4">
              <label htmlFor="email">Email Address</label>
              <input
                className="bg-gray-300"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <button className="btn-large">Sign Up</button>
          </form>
        </div>
      </div>
    </section>
  )
}
