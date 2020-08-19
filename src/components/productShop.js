import React from "react"
import { Link } from "gatsby"
import { useState, useEffect, useMemo } from "react"
import { prepareVariantsWithOptions, prepareVariantsImages } from "../utils"
import { useAddItemToCart } from "gatsby-theme-shopify-manager"
import { css } from "@emotion/core"

export default function ProductShop(props) {
  const sizes = props.product.options.find(
    option => option.name.toLowerCase() === "size"
  ).values

  const variants = useMemo(
    () => prepareVariantsWithOptions(props.product.variants),
    [props.product.variants]
  )
  const images = useMemo(() => prepareVariantsImages(variants, "size"), [
    variants,
  ])
  const addItemToCart = useAddItemToCart()
  const [variant, setVariant] = useState(variants[0])
  const [size, setSize] = useState(variant.size)
  useEffect(() => {
    const newVariant = variants.find(variant => {
      return variant.size === size
    })

    if (variant.shopifyId !== newVariant.shopifyId) {
      setVariant(newVariant)
    }
  }, [size, variants, variant.shopifyId])
  function handleAddToCart() {
    addItemToCart(variant.shopifyId, 1)
  }
  return (
    <section className="py-20">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center">
        <img
          src={variant.image.localFile.childImageSharp.fluid.src}
          alt={props.product.title}
        />
        <div>
          <div className="my-12 md:my-0 mx-4 md:mx-auto md:max-w-md">
            <h2 className="heading border-b border-gray-400 pb-4">
              {props.product.title}
            </h2>
            <div
              className="mb-8"
              dangerouslySetInnerHTML={{
                __html: props.product.descriptionHtml,
              }}
            />
            <h3 className="heading">${variant.price}</h3>
            <div className="flex flex-col items-start">
              <div
                className="mb-4 relative"
                css={css`
                  &:after {
                    content: "";
                    border-left: 1px solid black;
                    border-bottom: 1px solid black;
                    display: block;
                    height: 10px;
                    width: 10px;
                    position: absolute;
                    top: 15px;
                    right: 12px;
                    z-index: 1;
                    transform: rotate(-45deg);
                  }
                `}
              >
                {/* <label>Size</label> */}
                <select
                  onChange={e => setSize(e.target.value)}
                  value={size}
                  className="border border-secondary p-4 py-2 pr-8 rounded-full appearance-none relative"
                >
                  {sizes.map(size => (
                    <option value={size} key={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              <Link
                className="btn-small"
                to="/cart"
                onClick={() => handleAddToCart()}
              >
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
