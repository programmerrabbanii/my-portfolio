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

<Link  className='text-2xl mr-2'>
  <FaFacebook/> 
  
  </Link>
  <Link className='text-2xl mr-2'>
  <FaLinkedin/>
  
  </Link>
  <Link className='text-2xl mr-2'>
  <FaGithub/>
  
  </Link>

  <Link className='text-2xl mr-2'>
  <FaInstagram/>
  
  </Link>

  <Link className='text-2xl mr-2'>
  <FaYoutube/>
  
  </Link>
</div>
</div>
            
        
    );
};

export default Footer;