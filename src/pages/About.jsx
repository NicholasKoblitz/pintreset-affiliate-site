import emailjs from "emailjs-com";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID
} from "../lib/emailjsConfig";

export default function About() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      e.target,
      EMAILJS_PUBLIC_KEY
    )
    .then(() => alert("Message sent!"))
    .catch(() => alert("Error sending message."));
  }

  return (
    <div>
      <h1>Contact Us</h1>

      <form onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />

        <input type="email" name="email" placeholder="Your Email" required />

        <textarea name="message" placeholder="Your Message" required />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
