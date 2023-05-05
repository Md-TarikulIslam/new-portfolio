import React, { useRef } from "react";
import "./Contact.css";
import icon from "../../image/My project (3).png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mtao1qb",
        "template_0fvv02l",
        form.current,
        "iHrXOZwuUnKviODpL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
      alert('Success')
  };
  return (
    <div id="contact" className="pt-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl my-3">Take A Coffee & Chat With Me </h2>
        <h5 className="text-xl mb-5">Let's Keep In Touch</h5>
      </div>

      <div className="address">
        <div className="c-flex">
          <img
            className="c-img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
            alt=""
          />
          <p className="gmail">tarikul2605@gmail.com</p>
        </div>
        <div className="c-flex">
          <img className="c-img2" src={icon} alt="" />
          <p className="phone">+8801739-426293</p>
        </div>
      </div>

      <div>
        <form ref={form} onSubmit={handleSubmit} className="form-grid">
          <input
            className="input input-bordered"
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            className="input  input-bordered"
            type="email"
            name="email"
            id=""
            placeholder="Your Email"
          />
          <textarea
            className="textarea  textar"
            name="message"
            id=""
            cols="30"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button className="submit-btn" value="Send" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
