import aboutlogo from '../../assets/aboutlogo.jpg'
const AboutSelf = () => {
  return (
    <div>
      <h2 className='text-white text-4xl py-10 text-center'> About my self</h2>
      <div className=" text-white hero min-h-screen bg-black">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img 
            src={aboutlogo}
            className=" w-full lg:max-w-sm rounded-lg shadow-2xl"
          />
          <div> 
            <h1 className=" text-2xl lg:text-5xl font-bold py-8 ">Personal information</h1>
            <p><span className='font-bold uppercase'>Address:</span>Dhaka Bangladesh</p>
            <p className='text-lg mt-2'><span className='font-bold uppercase'>NAME:</span> Golam Rabbani Sarkar </p>
            <p className='text-lg mt-2'><span className='font-bold uppercase'>Phone:</span>+880 179 8950 302</p>
            <p className='text-lg mt-2'><span className='font-bold uppercase'>Email:</span>rabbanisarkar642@gmail.com</p>
            <p className='text-lg mt-2'><span className='font-bold uppercase'>Langages:</span> Bengali, English Arabic (Basic), Hindi (Basic)
                                                      </p>
            <p></p>
           
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default AboutSelf;
