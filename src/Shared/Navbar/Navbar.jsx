import { Link, NavLink } from "react-router-dom";
import navbarlogo from '../../assets/projectimg/alllogo.png'

const Navbar = () => {
    const navbar=<>
     <li className="uppercase ml-2 font-lg">
    <NavLink to="/">home</NavLink>
   </li>
   
    
    
    <li className="uppercase ml-2 font-lg">
    <NavLink to="/addproduct">About</NavLink>
   </li>
   <li className="uppercase ml-2 font-lg">
    <NavLink to="/addcard"> Experience</NavLink>
   </li>

   <li className="uppercase ml-2 font-lg">
    <NavLink to="/addcard"> Portfolio</NavLink>
   </li>

   <li className="uppercase ml-2 font-lg">
    <NavLink to="/addcard"> Skils</NavLink>
   </li>

   <li className="uppercase ml-2 font-lg">
    <NavLink to="/addcard"> Contact</NavLink>
   </li>
    </>
  


    
    return (
        <div>

<div className="navbar w-[1060px] mx-auto text-white fixed  lg:top-0 z-20 bg-transparent backdrop-blur">
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
    <img  className="w-[100px]" src={navbarlogo} alt="" />
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
    <a className="btn">Download CV</a>
  </div>
</div>
            
        </div>
    );
};

export default Navbar;