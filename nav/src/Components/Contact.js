/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/style-prop-object */
import React from 'react';

const Contact = () => {
  return (
    <div id="contact" class="form">
            <form action="">
                // eslint-disable-next-line react/style-prop-object
                <h1 style="text-align: center;">Contact Me</h1>
                <input type="text" id="name" placeholder="Your Name" required />
                <input type="email" id="email" placeholder="Email id" required />
                <input type="text" id="phone" placeholder="Phone no." required />
                <textarea id="message" rows="4" placeholder="How can I help you?"></textarea>
                <button type="submit">Send</button>
            </form>
    </div>
  );
}

export default Contact;