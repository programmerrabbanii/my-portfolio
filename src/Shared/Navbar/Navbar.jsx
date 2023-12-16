import { Link, NavLink } from "react-router-dom";
import navbarlogo from '../../assets/projectimg/alllogo.png'
import resume from'../../../src/assets/projectimg/resume.pdf'

const Navbar = () => {
    const navbar=<>
     <li className="uppercase ml-2 font-lg">
    <NavLink to="/">home</NavLink>
   </li>
   
    
    
    <li className="uppercase ml-2 font-lg">
    <a href="#about">About</a>
   </li>
   <li className="uppercase ml-2 font-lg">
    <a href="#servics"> Servics</a>
   </li>

   <li className="uppercase ml-2 font-lg">
    <a href="#project" to="/addcard"> Project</a>
   </li>

   <li className="uppercase ml-2 font-lg">
    <a href="#skills" > Skills</a>
   </li>

   <li className="uppercase ml-2 font-lg">
    <a  href="#contact"> Contact</a>
   </li>
    </>
  


    
    return (
        <div>

<div className="navbar lg:w-[1060px] w-full mx-auto text-white fixed  lg:top-0 z-20 bg-transparent backdrop-blur">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            navbar
        }
      </ul>
    </div>
   <Link to='/'>
    <img  className=" lg:w-[110px]  h-20 " src={navbarlogo} alt="" />
   </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        navbar 
      }
    </ul>
  </div>
  <div className="navbar-end">

    {/* <a href={resume} download="download resume"  className="btn">Download CV</a> */}

    <a href={resume} download=" rabbanir  Resume">
          <button className=" hidden md:block btn c-button  c-button--gooey  text-sm  rounded-2xl">
            {" "}
            Download 
            <div className="c-button__blobs  rounded-xl">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
        </a>

  </div>
</div>
            
        </div>
    );
};

export default Navbar;