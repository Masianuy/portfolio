import React, { useContext, useRef, useState } from 'react';
import './contact.scss';
import Phone from '../../img/phone.png';
import Address from '../../img/address.png';
import Email from '../../img/gmail.png';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_7reg1ux', 'template_8tcgejg', form.current, 'ctBtXq7QwaJ2DuUG7')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  }
  
  return (
    <div className="contact">
      <div className="contact-line"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h2 className="contact_title">Open to work</h2>
          <div className="contact_info">
            <div className="contact_info-item">
              <img src={Phone} alt="Phone" />
              <a href="tel:+380961776689">+38 096 177 66 89</a>
            </div>
            <div className="contact_info-item">
              <img src={Email} alt="Email" />
              <a href="mailto:Masianuy91@gmail.com">Masianuy91@gmail.com</a>
            </div>
            <div className="contact_info-item">
              <img src={Address} alt="Address" />
              <span>Ukraine, Kremenchuk</span>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-right-discription">I would like <span>to grow and improve my professional skills</span></p>
          <form className="contact-right_form" ref={form} onSubmit={sendEmail}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" autoComplete="name" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="email" autoComplete="email" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} name="message" placeholder="Message" id="message" rows="5"></textarea>
            <button>Submit</button>
            {done && " Thank you!"}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact