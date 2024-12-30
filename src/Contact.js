
import React from 'react';
import './Contact.css';


function Contact() {
  return (
    <div className='contact-container'>
             <marquee scrollamount="15" className="marquee" direction='right'>
            <h1 className="radial-text-gradient" style={{ color: 'hsl(299, 84%, 17%)'}}>Contact Me  and let's work together </h1>
        </marquee>
      <div className='contact-info'>
        <p className='mobile'><strong style={{ color: 'hsl(299, 84%, 17%)'}}>Mobile Number:</strong> +91 9347071423</p>
        <a href="mailto:ramyapavurala1@gmail.com" className="hireme-email">ramyapavurala1@gmail.com</a>
        <a href="https://www.linkedin.com/in/ramya-pavurala-9b29b528a/" target="_blank" rel="noopener noreferrer" className="hireme-linkedin">
          LinkedIn Profile
        </a>
        <img src='/workingWomen.png' className='contactimg'></img>
      </div>
    </div>
  );
}

export default Contact;

