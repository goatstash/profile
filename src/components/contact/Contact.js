import "./contact.css";
import phone from "../../img/phone.png";
import email from "../../img/email.png";
import github from "../../img/github.png";
import link from "../../img/link.png";
import resume from "../../img/resume.png";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TobiasBedford from "../../img/TobiasBedford.pdf";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    document.querySelector(".textarea").value = "";

    let itms = document.querySelectorAll(".userinputs");
    for (let itm of itms) {
      itm.value = "";
    }

    emailjs
      .sendForm(
        "service_fh7vxks",
        "template_z5wczcw",
        formRef.current,
        "mhYkqvVVsQZ1u1ogA"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's talk</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" />
              +61 490 522 328
            </div>
            <div className="c-info-item">
              <img src={email} alt="" className="c-icon" />
              tobiaspbedford@gmail.com
            </div>
            <div className="c-info-item">
              <img src={resume} alt="" className="c-icon" />
              <a href={TobiasBedford} target="_blank">
                CV
              </a>
            </div>
            <div className="c-info-item">
              <img src={github} alt="" className="c-icon" />
              <a href="https://github.com/goatstash">github.com/goatstash</a>
            </div>
            <div className="c-info-item">
              <img src={link} alt="" className="c-icon" />
              <a href="https://www.linkedin.com/in/tobias-bedford/">
                linkedin.com/in/tobias-bedford
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-description">
            <b>Who are you?</b> I'm interested in all projects big or small!
            Always happy to have a coffee chat or Zoom, or to meet in person if
            possible. Leave me a message and you'll hear from me shortly.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="name"
              name="user_name"
              className="userinputs"
            />
            <input
              type="text"
              placeholder="subject"
              name="user_subject"
              className="userinputs"
            />
            <input
              type="text"
              placeholder="email"
              name="user_email"
              className="userinputs"
            />
            <textarea
              rows="5"
              placeholder="please enter your message..."
              name="message"
              className="textarea"
            ></textarea>
            <button>Submit</button>
            {done && "      Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
