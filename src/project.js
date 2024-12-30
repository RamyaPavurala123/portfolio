
import React from 'react';
import './project.css';

function Project() {
  return (
    <div className='project-container'>
      <marquee scrollamount="15" className="marquee" direction='right'>
            <h1 className="radial-text-gradient" style={{ color: 'hsl(299, 84%, 17%)'}}> Welcome To My Projects</h1>
        </marquee>
      <section className='project1'>
        <h2 style={{ color: 'hsl(299, 84%, 17%)'}}>Flipkart Clone</h2>
        <p style={{ color: 'black'}}>
          The <strong style={{ color: 'hsl(299, 84%, 17%)'}}>Flipkart Clone</strong> is a web application built to replicate the core functionalities of Flipkart.
          Developed using <strong style={{ color: 'hsl(299, 84%, 17%)'}}>HTML</strong> and <strong style={{ color: 'hsl(299, 84%, 17%)'}}>CSS</strong>, it features:
        </p>
        <ul >
          <li style={{ color: 'hsl(299, 84%, 17%)'}}>User Authentication (Login and Sign Up)</li>
          <li style={{ color: 'hsl(299, 84%, 17%)'}}>Product Search and Wishlist functionality</li>
          <li style={{ color: 'hsl(299, 84%, 17%)'}}>Responsive design for mobile and desktop views</li>
        </ul>
        <p style={{ color: 'black'}}>
          This project helped me enhance my front-end skills and understand how to create dynamic user interfaces with <strong style={{ color: 'hsl(299, 84%, 17%)'}}> HTML </strong>  and<strong style={{ color: 'hsl(299, 84%, 17%)'}}>CSS</strong> 
        </p>
      </section>

      
      <section className='project2'>
        <h2 style={{ color: 'hsl(299, 84%, 17%)'}}>Talent Boost Application</h2>
        <p style={{ color: 'black'}}>
          The <strong style={{ color: 'hsl(299, 84%, 17%)'}}>Talent Boost Application</strong> is designed to assess and improve talent skills. The following features are implemented:
        </p>
        <ul>
          <li style={{ color: 'black'}}>Personalized Recommendations</li>
          <li style={{ color: 'black'}}>Analytics to track progress and improvement</li>
        </ul>
        <p style={{ color: 'black'}}>
          The following sections are still under development:
        </p>
        <ul>
          <li style={{ color: 'black'}}>Navbar for easy navigation</li>
          <li><strong style={{ color: 'hsl(299, 84%, 17%)'}}>Login and Sign-Up Pages</strong></li>
          <li> <strong style={{ color: 'hsl(299, 84%, 17%)'}}>Side Menu for enhanced user interaction</strong></li>
          <li><strong style={{ color: 'hsl(299, 84%, 17%)'}}>OTP Verification for registration</strong></li>
          <li><strong style={{ color: 'hsl(299, 84%, 17%)'}}>Forgot Password functionality</strong></li>
        </ul>
        <p style={{ color: 'black'}}>
          This project helped me enhance my front-end skills and understand how to create dynamic user interfaces with <strong style={{ color: 'hsl(299, 84%, 17%)'}}> HTML </strong> 
          ,<strong style={{ color: 'hsl(299, 84%, 17%)'}}>CSS</strong>,<strong style={{ color: 'hsl(299, 84%, 17%)'}}>JavaScript</strong> and<strong style={{ color: 'hsl(299, 84%, 17%)'}}   >React.js</strong>
        </p>

        <p style={{ color: 'black'}}>
          This application is being built using <strong style={{ color: 'hsl(299, 84%, 17%)'}}>React.js</strong>  focusing on integrating front-end and back-end technologies.
        </p>
      </section>
    </div>
  );
}

export default Project;
