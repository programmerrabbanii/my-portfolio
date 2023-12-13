import { Link } from 'react-router-dom';
import projecone from '../../assets/projectone.png'
const Project = () => {
  return (
    <div>
      <div className='text-center text-white mt-24'>
        <h4>Latest Works</h4>
        <h2 className='text-2xl mb-6'>Our Recent Projects</h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className="card w-96 bg-black text-white">
          <figure>
            <img className='h-[200px] bg-cover w-full'
              src={projecone} 
              alt="car!"
            />
          </figure> 
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <Link to='/'>
              <button className=" rounded-full border-2 py-2 px-14 mt-5  border-[#4A00FF] shadow-2xl">Live Link</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-black text-white">
          <figure>
            <img className='h-[200px] bg-cover w-full'
              src={projecone} 
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <Link to='/'>
              <button className=" rounded-full border-2 py-2 px-14 mt-5  border-[#4A00FF] shadow-2xl">Live Link</button>
              </Link>
            </div>
          </div>
        </div>


        <div className="card w-96 bg-black text-white">
          <figure>
            <img className='h-[200px] bg-cover w-full'
              src={projecone} 
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <Link to='/'>
              <button className=" rounded-full border-2 py-2 px-14 mt-5  border-[#4A00FF] shadow-2xl">Live Link</button>
              </Link>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default Project;
