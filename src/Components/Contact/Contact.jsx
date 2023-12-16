// import animation from '../../assets/projectimg/Animation - 1702472183100.gif'
import Lottie from 'lottie-react';
import animation from '../../assets/projectimg/Animation - 1702633862722.json'

const Contact = () => {
  return (
    <div  className='px-2' id="contact" >
      <h3 className="text-center text-white text-4xl my-11">Contact Me</h3>

      <div className="contant-main flex items-center flex-col lg:flex-row gap-8 ">
        <div className="contact-map ">
         
         <div  className=' w-full' >
          <Lottie className='w-full overflow-hidden' animationData={animation} loop={true}/>
          
        
         </div>

          
        </div>
        <div className="contact-from text-white">
          <h2 className="text-4xl capitalize">Get in touch</h2>
          <p>Fill in the form to start a conversation</p>

          <form className='lg:w-[500px]'>
            <input className=" w-full mt-2 p-2 px-2" type="text" name="name" placeholder="Type Your Name" /> <br />
            <input className="w-full my-2 py-2 px-2" type="email" name="email" placeholder="Type Your Email" /><br />
            <textarea className="w-full pt-2 px-2" name="" id="" cols="30" rows="10" placeholder="Type Your Comment "></textarea>

            <input className=" w-full  p-2 px-2 cursor-pointer hover:bg-gray-500" type="submit" value="SUBMIT"/>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
