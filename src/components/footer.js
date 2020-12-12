import React from "react"
import { Link } from "gatsby"
import SubscribeForm from "./subscribeForm"
import SocialIcons from "./socialIcons"

export default function Footer(props) {
  return (
    <footer className="bg-sky py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="uppercase tracking-wide">Stay Connected</h2>
          <SocialIcons />
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between md:items-end px-4">
          <div className="flex flex-col">
            {props.links.map((l, i) => {
              return (
                <Link to={l.dest} className="mb-4">
                  {l.name}
                </Link>
              )
            })}
            <Link className="mb-4" to="/terms-conditions">
              Terms & Conditions
            </Link>
            <Link className="mb-4" to="/privacy-policy">
              Privacy Policy
            </Link>
            {/* <Link className="mb-4" to="/cancellations">
              Cancellations & Returns
            </Link> */}
            <p>Saving Lives Fitness {new Date().getFullYear()} ©</p>
          </div>
          <div className="md:w-1/3 mb-12 md:mb-0 text-center md:text-left">
            <h3 className="uppercase">Sign Up For Our Newsletter</h3>
            <SubscribeForm full />
          </div>
        </div>
      </div>
    </footer>
  )
}
