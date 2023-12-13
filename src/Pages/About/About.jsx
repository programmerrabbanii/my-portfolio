import { CiLaptop } from "react-icons/ci";
import { Tilt } from "react-tilt";
import { PiHandshakeLight } from "react-icons/pi";
import { CiLock } from "react-icons/ci";
import { MdOutlineSupportAgent } from "react-icons/md";




const About = () => {
    return (
        <div>
            <div className="about-contant flex flex-col max-w-[1111px] mx-auto lg:flex-row justify-center  py-10 lg:py-24  text-white gap-20">
                <div className="about-information px-5 lg:w-[50%] lg:px-0  salad">
                    <h2 className="text-5xl  font-bold">Hello! You're Welcome </h2>
                    <h3 className="text-2xl py-7">Professional Full-Stack Web Developer & WordPress Specialis</h3>
                    <p className="text-2xl">
                    I’m Rabbani Sarkar Passionate at web development. I’m working minimum of 13-14 hours every day, I love to do this it’s my life-everything. My goal is to satisfy clients, try to understand what they want for there website, help them from beginning to end the project and give support for every problem. If need I communicate by video or audio conversations to understand the problems and project requirements. After completing website and projects I give instructions, How they can manage, edit, update, add page and post on the website by themselves. if needed I send video tutorials.

                    </p>
                    <button className="btn btn-primary hover:border-2 border-white mt-5">Contact me</button>
                </div>
                <div className="about-box lg:w-[50%] w-full">
                    <div className="box-inner flex flex-col lg:flex-row  ">
                        <Tilt  className="box-one text-center roun bg-[#151030] p-6 m-4 rounded-lg border-2 border-[#4A00FF]">
                        <CiLaptop className="text-8xl mx-auto" />
                          <h3 className="text-2xl">Quality</h3>
                          <p>
                          Design Quality is very important for every website, I make sure 100% quality & satisfaction before delivering the project.
                          </p>

                        </Tilt>
                        <Tilt className=" rounded-lg box-one box-one text-center roun bg-[#151030] p-6 m-4 border-2 border-[#4A00FF] ">
                        <PiHandshakeLight className="text-8xl mx-auto" />
                          <h3 className="text-2xl">Integrite</h3>
                          <p>
                          Friendly coding and design professionality increase website speed and SEO result, only experienced person can make sure this.
                          </p>

                        </Tilt>
                    </div>

                    <div className="box-inner flex flex flex-col lg:flex-row   gap-8">
                        <Tilt className="box-one   rounded-lg box-one box-one text-center roun bg-[#151030] p-6 m-4 border-2 border-[#4A00FF]  ">
                        <CiLock className="text-8xl mx-auto" />
                          <h3 className="text-2xl">security& safety</h3> 
                          <p>
                          Get complete security website and safe your all data and information. Super Safe.
                          </p>

                        </Tilt>
                        <Tilt className="box-one  rounded-lg box-one box-one text-center roun bg-[#151030] p-6 m-4 border-2 border-[#4A00FF]">
                        <MdOutlineSupportAgent className="text-8xl mx-auto" />
                          <h3 className="text-2xl">Support</h3>
                          <p>
                          Get life time working relationship & support with full instructions.
                          </p>

                        </Tilt> 
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default About;