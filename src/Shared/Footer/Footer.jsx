import logofooter from '../../assets/projectimg/alllogo.png'
const Footer = () => {
    return (
        <div className='mainfooter text-white   bg-[#1F2937] grid grid-cols-1 lg:grid-cols-4 py-8 gap-6 '>
      
    <div className="mainfooter  ">
    <div className="footerlogo">
     <aside>
    <img className='w-[170px] bg-[#1F2937]' src={logofooter} alt="" />
    <p>Hello, and welcome to my website! My name is Md Jahid Hasan, and I am a web designer and developer with 3 years of experience in the field
</p>
  </aside> 
     </div>
    </div> 
   <div className="services-footer">
   <nav>
  
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Full website creation</a> <br />
    <a className="link link-hover">E-commerce website</a> <br />
    <a className="link link-hover">Business Website</a> <br />
    <a className="link link-hover">Landing page</a> <br />
    <a className="link link-hover">Website Maintenance</a> <br />
  </nav> 
   </div>
    
     <div className="footerses">
     <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
     </div>
     <div className="footerses">
     <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
     </div>


            
        </div>
    );
};

export default Footer;