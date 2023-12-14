/* eslint-disable react/jsx-no-target-blank */
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa"





const Footer = () => {
    return (

      
   

<div className="footericons text-white py-10 ">
    <h4 className='text-center'> <p>Copyright © 2021 - All right reserved by Dev Rabbani Sarkar</p></h4>
<div className='flex justify-center mt-5'>

<a target="_blank" href="https://www.facebook.com/developerrabbani" className='text-2xl mr-2'>
  <FaFacebook/> 
  
  </a>
  <a  target="_blank" href="https://www.linkedin.com/in/rabbani-sarker-86ab60205/" className='text-2xl mr-2'>
  <FaLinkedin/>
  
  </a>
  <a  target="_blank" href="https://github.com/programmerrabbanii" className='text-2xl mr-2'>
  <FaGithub/>
  
  </a>

  <a  target="_blank" href="https://www.instagram.com/rabbani_sarker_/" className='text-2xl mr-2'>
  <FaInstagram/>
  
  </a>

  <a  target="_blank" href="/"  className='text-2xl mr-2'>
  <FaYoutube/>
  
  </a>
</div>
</div>
            
        
    );
};

export default Footer;