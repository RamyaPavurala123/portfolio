
import React from 'react';
import './HireMe.css';


function HireMe() {
  return (
    <div className="hireme-container">
      <marquee scrollamount="15" className="marquee" direction='right'>
            <h1 className="radial-text-gradient" style={{ color: 'hsl(299, 84%, 17%)'}}> Hire Me – Fresher Full Stack Developer</h1>
        </marquee>  
      <p className="hireme-intro">
        Dear Recruiter's,
      </p>
      <p className="hireme-body" >
        I hope this message finds you well. My name is Ramya Pavurala, and I am a skilled  fresher . I specialize in technologies such as <strong style={{ color: 'hsl(299, 84%, 17%)'}}>JavaScript, React.js, HTML, CSS, Java,  and SQL</strong>, and have experience working with both front-end and back-end development.
      </p>
      <p className="hireme-body">
  I have successfully completed the following projects, which demonstrate my full-stack development skills:

  <strong style={{ color: 'hsl(299, 84%, 17%)'}}><br/>
    1. Flipkart-like E-commerce Application:</strong><br />
  This project is a full-fledged e-commerce platform built using <strong style={{ color: 'hsl(299, 84%, 17%)'}}>HTML,CSS </strong>. It highlights my ability to create intuitive user interfaces, integrate with back-end services, and manage databases efficiently. The application includes features like product listings, a shopping cart, and user authentication.<br /><br />

  <strong style={{ color: 'hsl(299, 84%, 17%)'}}>2. Talent Boost Application:</strong><br />
  In this project, I developed a responsive and feature-rich application for talent management using <strong style={{ color: 'hsl(299, 84%, 17%)'}}>HTML,CSS,JavaScript,And ,React.js and Node.js and MySQL</strong>. The app enables users to explore talent profiles, manage connections, and track skill development. I focused on creating a seamless user experience and efficient data handling.<br />
</p>

      <p className="hireme-body">
        I am looking for opportunities to contribute my skills and grow in a collaborative environment. I would love to discuss how my background and expertise can be valuable to your team.
      </p>
      <p className="hireme-body">
        Thank you for your time and consideration. I look forward to hearing from you.
      </p>
      <p className="hireme-footer">
        Best regards,<br />
        Ramya Pavurala<br />
      
        <a href="mailto:ramyapavurala1@gmail.com" className="hireme-email" style={{ color: 'hsl(299, 84%, 17%)'}}>ramyapavurala1@gmail.com</a><br />
        <a href="https://www.linkedin.com/in/ramya-pavurala-9b29b528a/" target="_blank" rel="noopener noreferrer" className="hireme-linkedin">
          LinkedIn Profile
        </a>
      </p>
    </div>
  );
}     

export default HireMe;
