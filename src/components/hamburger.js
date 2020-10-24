import React from "react"
import { useSpring, animated } from "react-spring"

export default function Hamburger(props) {
  const animation = useSpring({
    transform: props.open ? "translateX(0)" : "translateX(-100%)",
    x: props.open ? 100 : 0,
    from: { x: 0 },
  })
  return (
    <button
      onClick={() => props.setOpen(!props.open)}
      className="block lg:hidden absolute top-0 right-0 m-4 z-50"
    >
      <animated.svg viewBox="0 0 20 20" className="w-8">
        <animated.path
          d="M0 5 H20"
          stroke="white"
          strokeDashoffset={animation.x.interpolate({
            range: [0, 100],
            output: [0, 100],
          })}
          strokeDasharray="100"
        />
        <animated.path
          d="M0 10 H20"
          stroke="white"
          strokeDashoffset={animation.x.interpolate({
            range: [0, 100],
            output: [0, -100],
          })}
          strokeDasharray="100"
        />
        <animated.path
          d="M0 15 H20"
          stroke="white"
          strokeDashoffset={animation.x.interpolate({
            range: [0, 100],
            output: [0, 100],
          })}
          strokeDasharray="100"
        />
        <animated.path
          d="M0 0 L20 20"
          stroke="white"
          strokeDashoffset={animation.x.interpolate({
            range: [0, 100],
            output: [100, 0],
          })}
          strokeDasharray="100"
        />
        <animated.path
          d="M20 0 L0 20"
          stroke="white"
          strokeDashoffset={animation.x.interpolate({
            range: [0, 100],
            output: [100, 0],
          })}
          strokeDasharray="100"
        />
      </animated.svg>
    </button>
  )
}
