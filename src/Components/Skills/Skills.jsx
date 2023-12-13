import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { BiLogoFirebase } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFilePowerpoint } from "react-icons/fa";












const Skills = () => {
  return (
    <div>
     <div className="text-white  text-center ">
     <h2 className="text-3xl py-3">Skills</h2>
      <h4 className="text-base">
        Skills are the expertise or talent needed in order to do a job or task.
      </h4>
     </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 px-5 lg:w-[600px] mx-auto mt-16">
        <div className="card bg-black w-[100px]  shadow-lg to-black p-3 my-3 ">
          <figure>
          <FaHtml5 className="text-5xl text-[#FFFF00]" />

          </figure>
          <div className="">
            <h2 className="text-white text-center">HTML5</h2>

            
          </div>
        </div>
        <div className="card bg-black w-[100px]  shadow-lg to-black p-3 my-3 ">
          <figure>
          < FaCss3Alt className="text-5xl text-[#FFFF00]" />

          </figure>
          <div className="">
            <h2 className="text-white text-center">CSS3</h2>

            
          </div>
        </div>
        <div className="card bg-black w-[100px]  shadow-lg to-black p-3 my-3 ">
          <figure>
          <IoLogoJavascript className="text-5xl text-[#FFFF00]" />

          </figure>
          <div className="">
            <h2 className="text-white  text-center">JavaScript</h2>

            
          </div>
        </div>
        <div className="card bg-black w-[100px]  shadow-lg to-black p-3 my-3 ">
          <figure>
          <SiTailwindcss className="text-5xl text-[#FFFF00]" />

          </figure>
          <div className="">
            <h2 className="text-white  text-center">Tailwindcss</h2>

            
          </div>
        </div>
        <div className="card bg-black w-[100px]  shadow-lg to-black p-3 my-3">
          <figure>
          <FaBootstrap className="text-5xl text-[#FFFF00]" />

          </figure>
          <div className="">
            <h2 className="text-white  text-center">Bootstrap</h2>

            
          </div>
        </div>
        <div className="card bg-black w-[100px]  shadow-lg to-black p-3 my-3 ">
          <figure>
          <FaReact className="text-5xl text-[#FFFF00]" />

          </figure>
          <div className="">
            <h2 className="text-white  text-center">React</h2>

            
          </div>
        </div>
        <div className="card bg-black w-[100px]  shadow-lg to-black p-3 my-3">
          <figure>
          < BiLogoFirebase className="text-5xl text-[#FFFF00]" />

          </figure>
          <div className="">
            <h2 className="text-white  text-center">Firebase</h2>

            
          </div>
        </div>
        <div className="card bg-black w-[100px]  shadow-lg to-black p-3 my-3">
          <figure>
          <FaNodeJs className="text-5xl text-[#FFFF00]" />

          </figure>
          <div className="">
            <h2 className="text-white text-center">Node.js</h2>

            
          </div>
        </div>
        <div className="card bg-black w-[100px]  shadow-lg to-black p-3 my-3">
          <figure>
          <FaWordpress className="text-5xl text-[#FFFF00]" />

          </figure>
          <div className="">
            <h2 className="text-white  text-center">Wordpress</h2>

            
          </div>
        </div>

        <div className="card bg-black w-[100px]  shadow-lg to-black p-3 my-3">
          <figure>
          <FaGitAlt className="text-5xl text-[#FFFF00]" />

          </figure>
          <div className="">
            <h2 className="text-white  text-center">Git</h2>

            
          </div>
        </div>

        <div className="card bg-black w-[100px]  shadow-lg to-black p-3 my-3">
          <figure>
          <FaGithub className="text-5xl text-[#FFFF00]" />

          </figure>
          <div className="">
            <h2 className="text-white  text-center">Github</h2>

            
          </div>
        </div>

        <div className="card bg-black w-[100px]  shadow-lg to-black p-3 my-3">
          <figure>
          <FaFilePowerpoint className="text-5xl text-[#FFFF00]" />

          </figure>
          <div className="">
            <h2 className="text-white  text-center">Powerpoint</h2>

            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Skills;
