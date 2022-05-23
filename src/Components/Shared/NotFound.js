import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../assets/images/404 image.png'
const NotFound = () => {
    return (
        <div  className='text-center mb-5'>
           <div className='w-full'>
           <img src={notfound} alt="" />
        
           </div>
          <div className='mt-5'>
              
           <h4 className='text-primary text-xl font-bold mb-3'>Try Search again or go to Home Page</h4>
            <Link  to="/" className='btn btn-primary'> Home Page</Link> 
          </div>

        </div>
    );
};

export default NotFound;