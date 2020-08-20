import React, { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function SubscribeForm(props) {
  const btnClasses = "btn-large" + (props.full ? " w-full" : "")
  const [submission, setSubmission] = useState({})

  const handleChange = e => {
    setSubmission({ ...submission, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...submission,
      }),
    })
      .catch(error => alert(error))
      .then(() => {
        toast.info("Thanks for signing up!")
        form.querySelectorAll(".empty-on-submit").forEach(f => (f.value = ""))
      })
  }
  return (
    <form
      className="mb-0"
      name="subscribe"
      method="post"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col bg-gray-300 rounded-lg p-4 mb-4">
        <input type="hidden" name="form-name" value="subscribe" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" value="subscribe" />
          </label>
        </p>
        <label htmlFor="email" className="text-left">
          Email Address
        </label>
        <input
          className="bg-gray-300 empty-on-submit"
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
        />
      </div>
      <button className={btnClasses}>Sign Up</button>
      <ToastContainer />
    </form>
  )
}
