import React from "react"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"

export default function MobileNav(props) {
  const animation = useSpring({
    transform: props.open ? "translateX(0)" : "translateX(-100%)",
    x: props.open ? 100 : 0,
    from: { x: 0 },
  })

  return (
    <animated.nav
      style={animation}
      className="font-display uppercase fixed bg-primary inset-0 flex lg:hidden flex-col items-center justify-center z-40 text-center text-white"
    >
      <ul>
        {props.links.map((l, i) => {
          return (
            <li key={i}>
              <Link to={l.dest}>{l.name}</Link>
            </li>
          )
        })}
      </ul>
    </animated.nav>
  )
}
