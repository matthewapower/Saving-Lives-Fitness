import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import MobileNav from "./mobileNav"
import Hamburger from "./hamburger"
import { css } from "@emotion/core"

import logo from "../images/slf-logo.svg"

const Header = props => {
  const [logoPos, setLogoPos] = useState(
    props.home || props.navOpen ? "translateY(70%) scale(1.6)" : ""
  )
  useEffect(() => {
    if (props.navOpen) {
      setLogoPos("")
    } else if (props.home) {
      setLogoPos("translateY(70%) scale(1.6)")
    }
  }, [props.navOpen, setLogoPos])

  return (
    <>
      <header className="grid absolute top-0 inset-x-0 items-center justify-center grid-cols-5">
        <div class="order-1 flex col-span-2 justify-end">
          {props.links.map((l, i) => {
            if (i + 1 <= props.links.length / 2)
              return (
                <Link
                  to={l.dest}
                  className={
                    "text-white m-4 xl:m-8 hidden relative z-30 uppercase lg:flex"
                  }
                >
                  {l.name}
                </Link>
              )
          })}
        </div>
        <Link
          to="/"
          className="p-4 z-50 order-2"
          css={css`
            transform: ${logoPos};
            max-width: 400px;
            transition: transform 0.4s ease;
          `}
        >
          <img
            src={logo}
            alt="Saving Lives Fitness"
            className="w-full mx-auto"
          />
        </Link>
        <div class="order-3 flex col-span-2">
          {props.links.map((l, i) => {
            if (i + 1 > props.links.length / 2)
              return (
                <Link
                  to={l.dest}
                  className={
                    "text-white m-4 xl:m-8 hidden relative z-30 uppercase lg:flex"
                  }
                >
                  {l.name}
                </Link>
              )
          })}
        </div>
        <Hamburger open={props.navOpen} setOpen={props.setNavOpen} />
      </header>
      <MobileNav open={props.navOpen} links={props.links} />
    </>
  )
}

export default Header
