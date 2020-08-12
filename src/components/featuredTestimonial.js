import React from "react"

export default function FeaturedTestimonial(props) {
  return (
    <section
      className="grid lg:grid-cols-4 lg:grid-rows-3 text-white p-4 lg:p-20"
      style={{ background: `url(${props.bg.fluid.src}) center center/cover` }}
    >
      <h2
        className="text-white self-center col-span-1 row-span-3 text-center uppercase pb-64 lg:py-20"
        style={{ fontSize: "8vw" }}
      >
        {props.headline}
      </h2>
      <div className="lg:col-start-3 lg:col-span-2 lg:row-start-3">
        <div className="top flex flex-col-reverse lg:grid lg:grid-cols-2">
          <div className="border-b-2 border-white flex flex-col justify-end">
            <p className="text-3xl font-bold">{props.testimonial.name}</p>
            <p className="text-3xl font-bold">
              {props.testimonial.instagramHandle}
            </p>
          </div>
          <h3 className="lg:text-right font-semibold text-4xl uppercase mb-20 lg:mb-0">
            {props.testimonial.headline}
          </h3>
        </div>
        <p className="body text-2xl mt-12">
          {props.testimonial.description.description}
        </p>
      </div>
    </section>
  )
}
