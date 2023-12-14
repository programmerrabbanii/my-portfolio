/* eslint-disable react/jsx-no-target-blank */
import { Link } from "react-router-dom";
import projectone from "../../assets/projectimg/projectone.png";
import projecttwo from "../../assets/projectimg/projecttwo.png";
import projecttherr from "../../assets/projectimg/project3.png";

const Project = () => {
  return (
    <div>
      <div className="text-center text-white mt-24">
        <h4>Latest Works</h4>
        <h2 className="text-2xl mb-6">Our Recent Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card md:w-96 w-full bg-black text-white">
          <figure>
            <img
              className="h-[200px] bg-cover over w-full"
              src={projectone}
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Food made with love</h2>
            <p>
              Welcome To Our Restaurant, I Hope We Can Give You Good Service
            </p>
            <div className="card-actions justify-end">
              <a  target="_blank" href="https://assingment-eleven.web.app">
                <button className=" rounded-full border-2 py-2 px-14 mt-5  border-[#4A00FF] shadow-2xl">
                  Live Link
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="card md:w-96 w-full  bg-black text-white">
          <figure>
            <img
              className="h-[200px] bg-cover w-full"
              src={projecttwo}
              alt="car!"
            />  
          </figure>
          <div className="card-body"> 
            <h2 className="card-title"> Parcel management software</h2>
            <p>
              Simplify the simplify the parcel management process, log incoming
              mail, outgoing parcels and and digitise your parcel management
              process
            </p>
            <div className="card-actions justify-end">
              <a target="_blank" href="https://assingmenttwelve.web.app">
                <button className=" rounded-full border-2 py-2 px-14 mt-5  border-[#4A00FF] shadow-2xl">
                  Live Link
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="  card md:w-96 w-full bg-black text-white">
          <figure>
            <img
              className=" image-hover-effect h-[200px] bg-cover w-full"
              src={projecttherr}
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">digital products</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <a target="_blank" href="https://programmerrabbanii.github.io/digital-products">
                <button className=" rounded-full border-2 py-2 px-14 mt-5  border-[#4A00FF] shadow-2xl">
                  Live Link
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
