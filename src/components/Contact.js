import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="contact-form"
        >
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message" />
          <button type="submit" className="form-submit">
            Send
          </button>
        </form>
      </div>
    )
  }
}
