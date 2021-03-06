import React from "react"
import PersonInfo from "./personInfo"
import Fade from "react-reveal/Fade"

export default function TrainerSection(props) {
  return (
    <section className="bg-gray-300 py-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="heading">{props.heading}</h2>
        <p className="body mb-20 mx-auto">{props.description}</p>
        <Fade bottom cascade>
          <div>
            {props.trainers.map((t, i) => {
              return (
                <div className="grid gap-4 md:grid-cols-3 max-w-2xl mb-20 items-center mx-auto">
                  <div>
                    <div
                      class="rounded-full"
                      style={{
                        background: `url(${t.image.fixed.src}) center center/cover`,
                        paddingBottom: "100%",
                      }}
                    />
                  </div>
                  <PersonInfo
                    className="md:col-span-2"
                    name={t.name}
                    handle={t.instagramHandle}
                    description={t.description.description}
                  />
                </div>
              )
            })}
          </div>
        </Fade>
      </div>
    </section>
  )
}
