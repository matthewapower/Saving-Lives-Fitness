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
      <header className="flex absolute top-0 inset-x-0 items-center justify-center ">
        <Link
          to="/"
          className="p-4 z-50 order-2 w-1/2 lg:w-1/5"
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
        {props.links.map((l, i) => {
          const divide = i + 1 > props.links.length / 2
          return (
            <Link
              to={l.dest}
              className={
                "text-white m-4 xl:m-8 hidden lg:inline-block relative z-30 uppercase" +
                (divide ? " order-3" : " order-1")
              }
            >
              {l.name}
            </Link>
          )
        })}
        <Hamburger open={props.navOpen} setOpen={props.setNavOpen} />
      </header>
      <MobileNav open={props.navOpen} links={props.links} />
    </>
  )
}

export default Header
