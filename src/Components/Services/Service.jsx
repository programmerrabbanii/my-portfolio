import { GiServerRack } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";
import { DiResponsive } from "react-icons/di";
import { LuShoppingBag } from "react-icons/lu";
import { IoBugOutline } from "react-icons/io5";
import { GrSystem } from "react-icons/gr";






const Service = () => {
  return (
    <div>
      <div className="text-center text-white my-16">
        <h3 className="text-4xl py-2">Sevices</h3>
        <h4>What i do for buyer</h4>
      </div>
      {/* card b0x */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
        <div className="card card-compact   bg-black text-white py-11 px-4 text-center shadow-xl border-2 border-[#4A00FF]">
            <GiServerRack className="mx-auto text-8xl "/>
          
          <div className="card-body">
            <h2 className="font-bold text-lg text-center">Build Full Website</h2>
            <p>I will design and redesign any type of website for your business. I provide a unique, clean & awesome graphical design interface.</p>
            
          </div>
        </div>
        <div className="card card-compact   bg-black text-white py-11 px-4 text-center shadow-xl border-2 border-[#4A00FF]">
            <GrSystem className="mx-auto text-8xl "/>
          
          <div className="card-body">
            <h2 className="font-bold text-lg text-center">Maintenance & Optimized</h2>
            <p>Slow loading website it’s the biggest problem for every website. I can boost your website’s speed by optimization your website. And if you don’t have time to maintain your website don’t worry I’m here.</p>
            
          </div>
        </div>
        <div className="card card-compact   bg-black text-white py-11 px-4 text-center shadow-xl border-2 border-[#4A00FF]">
            <MdDesignServices className="mx-auto text-8xl "/>
          
          <div className="card-body">
            <h2 className="font-bold text-lg text-center">Unique Design</h2>
            <p>The unique design is very important for every website. You and your customer seeing this website will be very fascinated.</p>
            
          </div>
        </div>
        <div className="card card-compact   bg-black text-white py-11 px-4 text-center shadow-xl border-2 border-[#4A00FF]">
            <DiResponsive className="mx-auto text-8xl "/>
          
          <div className="card-body">
            <h2 className="font-bold text-lg text-center">Different Layout & Responsive</h2>
            <p>I will provide you different layout design website and full responsive that this website you see any pixel it's will all time right.</p>
            
          </div>
        </div>
        <div className="card card-compact   bg-black text-white py-11 px-4 text-center shadow-xl border-2 border-[#4A00FF]">
            <LuShoppingBag className="mx-auto text-8xl "/>
          
          <div className="card-body">
            <h2 className="font-bold text-lg text-center">Maintenance & Optimized</h2>
            <p>I can create a fully functional online store with any type of payment gateway support and add shopping cart functionality into you’re existing website with your any required.</p>
            
          </div>
        </div>
        <div className="card card-compact   bg-black text-white py-11 px-4 text-center shadow-xl border-2 border-[#4A00FF]">
            <IoBugOutline className="mx-auto text-8xl "/>
          
          <div className="card-body">
            <h2 className="font-bold text-lg text-center">Bug Fixing</h2>
            <p>I will solve and fix malware, bug problem, and error. That very dangerous for your website. Don’t worry I am here. I will provide you clear and clean website. That will be very useful.

</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
