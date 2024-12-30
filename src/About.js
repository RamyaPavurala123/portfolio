import React from 'react';
import './About.css';

function About() {
  return (
    <div className='about-container'>
       <marquee scrollamount="15" className="marquee" direction='right'>
            <h1 className="radial-text-gradient" style={{ color: 'hsl(299, 84%, 17%)'}}> Welcome To My AboutPage</h1>
        </marquee>
      <section className='about'>
        <h1  style={{ color: 'hsl(299, 84%, 17%)'}} >About Me</h1>
        <p style={{ color: 'black'}}>I am a fresher front-end developer with a passion for creating user-friendly and responsive web applications. I enjoy coding and learning new technologies to enhance my skills.</p>
      </section>

      <section className='developer-profile'>
        <h2 style={{ color: 'hsl(299, 84%, 17%)'}}>Fresher Front-End Developer</h2>
        <p style={{ color: 'black'}}>Skilled in HTML, CSS, JavaScript, React.js, and SQL. I have a keen interest in building intuitive interfaces and efficient web solutions.</p>
      </section>

      <section className='education-skills'>
        <h2 style={{ color: 'hsl(299, 84%, 17%)' }}>Education and Skills</h2>
        <ul style={{ color: 'black' }}>
          <li style={{ color: 'black' }}>B.Sc in Statistics from Kakatiya University (Grade: 7.9)</li>
          <li style={{ color: 'black' }}>Intermediate: MPC  from Krishnaveni Junior College  (Marks: 621)</li>
          <li style={{ color: 'black' }}>School: SSC from ST.Joseph's  High School  (Grade: 8.5)</li>
          <li style={{ color: 'black' }}>Proficient in HTML, CSS, JavaScript, React.js, Java, and SQL</li>
        </ul>
      </section>

      <section className='projects'>
        <h2 style={{ color: 'hsl(299, 84%, 17%)' }}>Projects</h2>
        <ul>
          <li style={{ color: 'black' }}>
            <strong  style={{ color: 'hsl(299, 84%, 17%)' }}>Flipkart Clone:</strong>
             A web application replicating Flipkart features like user authentication, product search, and wishlist functionality, built using HTML, CSS.
          </li>
          <li style={{ color: 'black' }}>
            <strong style={{ color: 'hsl(299, 84%, 17%)' }}>Talent Boost Application:</strong> 
            A platform for assessing and improving talent skills with personalized recommendations and analytics, developed using HTML,CSS,JavaScript and React.js and MySQL .
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;
