import bannarr from '../../assets/rabbani.png'
import { FaEnvelope } from "react-icons/fa";

const Bannar = () => {
    return (
        <div>
          

<div className="hero w-full min-h-screen bg-[#1F2937] text-white pt-16 lg:pt-0  ">
  <div className="hero-content flex-col lg:flex-row-reverse md:gap-64 ">
    <img  src={bannarr} className="max-w-sm rounded-full border-8  border-[#4A00FF] shadow-2xl " />
    <div >
      <h1 className=" text-2xl md:text-5xl font-bold  ">I'M Programmer And <br /> FrontEnd Web Developer.
</h1>
      <p className="py-6">Junior Frontend Developer with a passion for Web Applications <br /> Development. Passionate about learning new <br /> technologies. Seeking opportunities and <br /> challenges that will improve my skill set.
.</p>
      {/* <a href='#contact' className="btn btn-primary hover:border-2 border-white"> <FaEnvelope />
 Contacat Me</a> */}
       
       <a href="#contact">
          <button className=" btn c-button  c-button--gooey  text-sm  rounded-2xl">
            {" "}
            Contact ME
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

            

            
        </div>
    );
};

export default Bannar;