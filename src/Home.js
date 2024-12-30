
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className='container'>
        <marquee scrollamount="15" className="marquee" direction='right'>
            <h1 className="radial-text-gradient" style={{ color: 'hsl(299, 84%, 17%)'}}> Welcome To My Portfolio</h1>
        </marquee>

        <div className="about-me">
            <h2 style={{ color: 'hsl(299, 84%, 17%)'}}>About Me</h2>
            <p style={{ color: 'black'}}>
    Hello! I'm Ramya Pavurala, a passionate and motivated Front-End Developer with a strong foundation in web development. As a recent graduate, I have hands-on experience with technologies like HTML, CSS, JavaScript, React.js, SQL, and basic Java programming. I am enthusiastic about building responsive and user-friendly websites that deliver an excellent user experience. My focus is on continuously improving my skills, staying updated with the latest trends in front-end development, and contributing effectively to any project. I am eager to join a dynamic team where I can apply my technical skills and grow as a developer.
</p>
        </div>

        <div className="skills">
            <h2 style={{ color: 'hsl(299, 84%, 17%)'}}>Skills</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>SQL</li>
                <li>Java</li>
            </ul>
        </div>
    </div>
  )
}

export default Home;
