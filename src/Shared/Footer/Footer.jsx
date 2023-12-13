import { Link } from 'react-router-dom';
import logofooter from '../../assets/projectimg/alllogo.png'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";





const Footer = () => {
    return (
        <div className='mainfooter text-white   bg-[#1F2937]'>
            <footer className="footer items-center p-4 bg-neutral text-neutral-content">
  <aside className="items-center grid-flow-col">
   <img className='w-[100px]' src={logofooter} alt="" />
    <p>Copyright © 2021 - All right reserved Dev Rabbani Sarkar</p>
  </aside> 
  <Link>
  <FaFacebook/> 
  
  </Link>
  <Link>
  <FaLinkedin/>
  
  </Link>
  <Link>
  <FaGithub/>
  
  </Link>

  <Link>
  <FaInstagram/>
  
  </Link>

  <Link>
  <FaYoutube/>
  
  </Link>
</footer>
      
   


            
        </div>
    );
};

export default Footer;