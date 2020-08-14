import { Link } from "gatsby"
import React, { useState } from "react"
import MobileNav from "./mobileNav"
import Hamburger from "./hamburger"
import { css } from "@emotion/core"

import logo from "../images/slf-logo.svg"

const Header = props => {
  const [navOpen, setNavOpen] = useState(false)
  const logoPos = props.home ? "translateY(70%) scale(1.6)" : ""

  return (
    <>
      <header className="flex absolute top-0 inset-x-0 items-center justify-center ">
        <Link
          to="/"
          className="p-4 z-20 order-2"
          css={css`
            transform: ${logoPos};
          `}
        >
          <img
            src={logo}
            alt="Saving Lives Fitness"
            className="w-2/3 lg:w-full mx-auto"
          />
        </Link>
        {props.links.map((l, i) => {
          const divide = i + 1 > props.links.length / 2
          return (
            <Link
              to={l.dest}
              className={
                "text-white m-4 xl:m-8 hidden lg:inline-block" +
                (divide ? " order-3" : " order-1")
              }
            >
              {l.name}
            </Link>
          )
        })}
        <Hamburger open={navOpen} setOpen={setNavOpen} />
      </header>
      <MobileNav open={navOpen} links={props.links} />
    </>
  )
}

export default Header
