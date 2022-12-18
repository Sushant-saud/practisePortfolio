import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("thank you, i ll reply ASAP!");
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="Image/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          <p>{message}</p>
        </form>
      </div>
    </div>
  );
}