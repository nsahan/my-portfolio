import React from 'react'
import './Contact.css'
import mail_icon  from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "8b972acd-d75c-48a7-9070-a8dbb183d67b");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            alert(res.message);    
        }
      };

  return (
    <div id='contact' className='contact'>
      <div className="con-title">
        <h1>Get in touch</h1>
        
      </div>
      <div className="con-section">
        <div className="con-left">
            <h1>Let's Work together</h1>
            <div className="con-details">
                <div className="details">
                    <img src={mail_icon} alt="" /> <p>nisurasahan12@gmail.com</p>
                </div>
                <div className="details">
                    <img src={location_icon} alt="" /> <p>Narammala, Sri Lanka</p>
                </div>
                <div className="details">
                    <img src={call_icon} alt="" /> <p>076-9034458</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className='con-right'>
            <label htmlFor="Your Name"></label>
            <input type="text" placeholder='Enter Your Name' name='name' />
            <label htmlFor="Your Email"></label>
            <input type="email" placeholder='Enter Your email' name='email' />
            <label htmlFor="Your Message"></label>
            <textarea name="message"  rows="8" placeholder='Type Your Message Here'></textarea>
            <button type='submit' className="submit">Send Message</button>

        </form>
      </div>
    </div>
  )
}

export default Contact
