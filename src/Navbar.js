
import React from 'react'
import './Navbar.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';


function Navbar() {
  const navigate = useNavigate();

  const handleOnclickHome = ()=>
  {
    navigate('/Home');
  }
  const handleOnclickAbout = ()=>
  {
    navigate('/About');
  }
  const handleOnclickProject=()=>{
    navigate("/Project");
  }

  const handleOnclickContact=()=>
  {
    navigate("/Contact");
  }
  const handleOnclickHireMe=()=>
  {
    navigate("/HireMe");
  }
  return (
  <div className='maincontainer'>
      <div className='leftside'>
      <h1 className="name" style={{ color: 'hsl(299, 84%, 17%)'}}>Ramya Pavurala</h1>
          <h2 className='role' style={{ color: 'hsl(299, 84%, 17%)'}}>FrontEnd Developer</h2>
          <h2 className='home' onClick={handleOnclickHome}>Home</h2>
          <h2 className='home'onClick={handleOnclickAbout}>About</h2>
          <h2 className='home' onClick={handleOnclickProject}>Project</h2>
          <h2 className='home' onClick={handleOnclickContact}>Contact</h2>
      </div>
     <div className='rightside'>
       <h2 className='heading'style={{ color: 'hsl(299, 84%, 17%)'}}>Hi There...</h2>  
       <h2 className='heading1'style={{ color: 'hsl(299, 84%, 17%)'}} >My Name Is <h1  style={{ color: 'hsl(299, 84%, 17%)'}}>RAMYA PAVURALA</h1></h2>  
       <h2 className='heading2'style={{ color: 'hsl(299, 84%, 17%)'}}>I Am A Front End Developer </h2>
       <h1 className='heading3' onClick={handleOnclickHireMe}>Hire Me</h1>
       <div className='social-meida'>
        <a className='iconslinkedIn'  href="https://www.linkedin.com/in/ramya-pavurala-9b29b528a/" target="_blank" rel="noopener noreferrer" > <LinkedInIcon/>
        </a>
        <a className='iconsgmail'  href="mailto:ramyapavurala1@gmail.com" target="_blank" rel="noopener noreferrer" > <EmailIcon/>
        </a>
        <a className='iconsgithub'  href="https://github.com/RamyaPavurala123" target="_blank" rel="noopener noreferrer" > <GitHubIcon/>
        </a> 
       </div>
    </div>
   </div>
  )
}

export default Navbar;
