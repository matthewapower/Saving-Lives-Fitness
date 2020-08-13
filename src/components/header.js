import { Link } from "gatsby"
import React, { useState } from "react"
import MobileNav from "./mobileNav"
import Hamburger from "./hamburger"
import { css } from "@emotion/core"

import logo from "../images/slf-logo.svg"

const Header = props => {
  const [navOpen, setNavOpen] = useState(false)
  const logoPos = props.home
    ? "translate(-50%, 70%) scale(1.5)"
    : "translateX(-50%)"

  return (
    <>
      <header>
        <Link
          to="/"
          className="absolute top-0 left-0 p-4 z-20"
          css={css`
            @media (min-width: 1024px) {
              left: 50%;
              transform: ${logoPos};
            }
          `}
        >
          <img
            src={logo}
            alt="Saving Lives Fitness"
            className="w-1/2 lg:w-full"
          />
        </Link>
        <Hamburger open={navOpen} setOpen={setNavOpen} />
      </header>
      <MobileNav open={navOpen} links={props.links} />
      <div className="absolute inset-x-0 top-0 px-8 xl:px-20 pt-12 hidden lg:block">
        {props.links.map((l, i) => {
          const divide = i + 1 > props.links.length / 2
          return (
            <Link
              to={l.dest}
              className={
                "text-white m-4 xl:m-8 inline-block" +
                (divide ? " float-right" : "")
              }
            >
              {l.name}
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Header
