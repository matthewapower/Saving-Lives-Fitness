import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useState, useEffect, useMemo } from "react"
import { prepareVariantsWithOptions, prepareVariantsImages } from "../utils"
import { useAddItemToCart } from "gatsby-theme-shopify-manager"
import OptionPicker from "./optionPicker"

export default function ProductShop(props) {
  const pos1options = props.product.options[0]
    ? props.product.options[0].values
    : false
  const pos2options = props.product.options[1]
    ? props.product.options[1].values
    : false
  const pos3options = props.product.options[2]
    ? props.product.options[2].values
    : false
  const variants = useMemo(
    () => prepareVariantsWithOptions(props.product.variants),
    [props.product.variants]
  )
  const images = useMemo(() => prepareVariantsImages(variants, "color"), [
    variants,
  ])
  console.log(images)
  const addItemToCart = useAddItemToCart()
  const [variant, setVariant] = useState(variants[0])
  const [option1, setOption1] = useState(
    variant.selectedOptions[0] ? variant.selectedOptions[0].value : false
  )
  const [option2, setOption2] = useState(
    variant.selectedOptions[1] ? variant.selectedOptions[1].value : false
  )
  const [option3, setOption3] = useState(
    variant.selectedOptions[2] ? variant.selectedOptions[2].value : false
  )
  useEffect(() => {
    const newVariant = variants.find(variant => {
      if (variant.selectedOptions.length === 1) {
        return variant.selectedOptions[0].value === option1
      } else if (variant.selectedOptions.length === 2) {
        return (
          variant.selectedOptions[0].value === option1 &&
          variant.selectedOptions[1].value === option2
        )
      } else if (variant.selectedOptions.length === 3) {
        return (
          variant.selectedOptions[0].value === option1 &&
          variant.selectedOptions[1].value === option2 &&
          variant.selectedOptions[2].value === option3
        )
      } else {
        return variants[0]
      }
    })

    if (variant.shopifyId !== newVariant.shopifyId) {
      setVariant(newVariant)
    }
  }, [option1, option2, option3, variants, variant.shopifyId])
  function handleAddToCart() {
    addItemToCart(variant.shopifyId, 1)
  }

  // const gallery =
  //   images.length > 1 ? (
  //     <div className="grid grid-cols-6 gap-2">
  //       {images.map(({ src, color }) => {
  //         console.log(src.localFile.childImageSharp.fluid.src)
  //         return (
  //           <button onClick={() => setOption2(color)}>
  //             <Img fluid={src.localFile.childImageSharp.fluid} />
  //           </button>
  //         )
  //       })}
  //     </div>
  //   ) : null

  return (
    <section className="py-20">
      <div className="container mx-auto grid md:grid-cols-2 items-start justify-center">
        <div class="w-full relative">
          <Img
            fluid={variant.image.localFile.childImageSharp.fluid}
            className="absolute inset-0"
          />
          {/* {gallery} */}
        </div>
        <div>
          <div className="my-12 md:my-0 mx-4 md:mx-auto md:max-w-md">
            <h2 className="heading border-b border-gray-400 pb-4">
              {props.product.title}
            </h2>
            <h3 className="heading">${variant.price}</h3>
            <div className="flex flex-col items-start">
              {variant.selectedOptions.length >= 1 ? (
                <OptionPicker
                  key={props.product.options[0].name}
                  name={props.product.options[0].name}
                  options={pos1options}
                  selected={option1}
                  onChange={event => setOption1(event.target.value)}
                />
              ) : (
                ""
              )}
              {variant.selectedOptions.length >= 2 ? (
                <OptionPicker
                  key={props.product.options[1].name}
                  name={props.product.options[1].name}
                  options={pos2options}
                  selected={option2}
                  onChange={event => setOption2(event.target.value)}
                />
              ) : (
                ""
              )}
              {variant.selectedOptions.length === 3 ? (
                <OptionPicker
                  key={props.product.options[2].name}
                  name={props.product.options[2].name}
                  options={pos3options}
                  selected={option3}
                  onChange={event => setOption3(event.target.value)}
                />
              ) : (
                ""
              )}
              <Link
                className="btn-small mb-12"
                to="/cart"
                onClick={() => handleAddToCart()}
              >
                Add to Cart
              </Link>
              <div
                className="mb-8"
                dangerouslySetInnerHTML={{
                  __html: props.product.descriptionHtml,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
