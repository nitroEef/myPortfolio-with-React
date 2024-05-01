import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('your message is sent!');
        },
        (error) => {
          console.log('oshi lo te...', error.text);
        },
      );
  };

  return (
    <div className='contacted'>
      <h3 className='send'>Contact Me</h3> 
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder='Name' />

      <input type="email" name="user_email" placeholder='Email'  />

      
      <input type="number" name="user_number" placeholder='Phone Number'  />


      <textarea name="message" placeholder='Send your Message' />

      <button className='bttn'>Send Message</button>

    </form>
    </div>
  );
};
export default Contact
