import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Bannar from "../Components/Bannar/Bannar";
import About from "../Pages/About/About";
import Footer from "../Shared/Footer/Footer";

const  Root = () => {
    return (
       <div className="bg-[#1F2937]">
         <div className=" lg:w-full max-w-[1160px] mx-auto">
            <Navbar></Navbar>
            <Bannar></Bannar>
            <About></About>
            
            <Outlet></Outlet>
           
           <Footer></Footer>
           
            
        </div>
       </div>
    );
};

export default Root;