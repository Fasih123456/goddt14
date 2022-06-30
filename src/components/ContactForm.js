import React from "react"

import '../css/contactform.css'

const ContactForm = () => {
    return (
        <React.Fragment>
            <div class="main-block">
      <div class="left-part">
        <i class="fas fa-envelope"></i>
        <i class="fas fa-at"></i>
        <i class="fas fa-mail-bulk"></i>
      </div>
      <form action="/">
        <h1>Contact Us</h1>
        <div class="info">
          <input class="fname" type="text" name="name" placeholder="Full name" />
          <input type="text" name="name" placeholder="Email" />
          <input type="text" name="name" placeholder="Phone number" />
          <input type="text" name="name" placeholder="Website" />
        </div>
        <p>Message</p>
        <div>
          <textarea rows="4"></textarea>
        </div>
        <button type="submit" href="/">Submit</button>
      </form>
    </div>
        </React.Fragment>
    )
}

export default ContactForm;