import React, { useState } from "react"

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
    }).catch(error => alert(error))
  }
  return (
    <form
      className="mb-0"
      name="contactForm"
      method="post"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      id="contact-form"
    >
      <input type="hidden" name="form-name" value="subscribeForm" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <div className="flex flex-col bg-gray-300 rounded-lg p-4 mb-4">
        <label htmlFor="name">Your Name</label>
        <input
          className="bg-gray-300"
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col bg-gray-300 rounded-lg p-4 mb-4">
        <label htmlFor="email">Email Address</label>
        <input
          className="bg-gray-300"
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col bg-gray-300 rounded-lg p-4 mb-4">
        <label htmlFor="message">Your Message</label>
        <textarea
          className="bg-gray-300"
          name="message"
          id="message"
          onChange={handleChange}
        />
      </div>
      <button className="btn-large">Submit</button>
    </form>
  )
}
