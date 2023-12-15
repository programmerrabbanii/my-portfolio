// import animation from '../../assets/projectimg/Animation - 1702472183100.gif'
const Contact = () => {
  return (
    <div  id="contact" >
      <h3 className="  text-center text-white text-4xl my-11 ">Contact Me</h3>

      <div className="contant-main flex items-center flex-col lg:flex-row gap-8 ">
        <div className="contact-map ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58149.39926507754!2d89.2305408!3d24.369561599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1702468592605!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* <img  className='w-full' src={animation} alt="" /> */}

        </div>
        <div className="contact-from text-white">
          <h2 className="text-4xl capitalize">Get in touch</h2>
          <p>Fill in the form to start a conversation</p>

          <form>
            <input className="w-[500px] mt-2 p-2 px-2" type="text" name="name" placeholder="Type Your Name" /> <br />
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
