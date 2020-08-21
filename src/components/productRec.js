import React from "react"
import ProductCard from "./productCard"
import Fade from "react-reveal/fade"

export default function ProductRec(props) {
  return (
    <section className="py-24">
      <Fade bottom>
        <div className="container px-4 mx-auto grid md:grid-cols-3 gap-12">
          <h2 className="heading text-center md:col-span-3">
            OTHER PRODUCTS YOU MIGHT ENJOY:
          </h2>
          {props.products.map((p, i) => {
            return (
              <ProductCard
                title={p.title}
                img={p.images[0].localFile.childImageSharp.fixed.src}
                price={p.priceRange.maxVariantPrice.amount}
                slug={`/shop/${p.handle}`}
                key={i}
              />
            )
          })}
        </div>
      </Fade>
    </section>
  )
}
