import React, { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function ContactForm(props) {
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
        toast.info("Thanks we'll be in touch!")
        form.querySelectorAll(".empty-on-submit").forEach(f => (f.value = ""))
      })
  }
  return (
    <form
      className="mb-0"
      name="contact"
      method="post"
      action="/thanks"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" value="contact" />
        </label>
      </p>
      <div className="flex flex-col bg-gray-300 rounded-lg p-4 mb-4">
        <label htmlFor="name">Your Name</label>
        <input
          className="bg-gray-300 empty-on-submit"
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col bg-gray-300 rounded-lg p-4 mb-4">
        <label htmlFor="email">Email Address</label>
        <input
          className="bg-gray-300 empty-on-submit"
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col bg-gray-300 rounded-lg p-4 mb-4">
        <label htmlFor="message">Your Message</label>
        <textarea
          className="bg-gray-300 empty-on-submit"
          name="message"
          id="message"
          onChange={handleChange}
        />
      </div>
      <button className="btn-large">Submit</button>
      <ToastContainer />
    </form>
  )
}
