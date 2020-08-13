import React from "react"

export default function SubscribeForm(props) {
  const btnClasses = "btn-large" + (props.full ? " w-full" : "")
  return (
    <form action="#" className="mb-0">
      <div className="flex flex-col bg-gray-300 rounded-lg p-4 mb-4">
        <label htmlFor="email">Email Address</label>
        <input className="bg-gray-300" type="email" name="email" id="email" />
      </div>
      <button className={btnClasses}>Sign Up</button>
    </form>
  )
}
