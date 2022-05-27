import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';


import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    console.log(user);
  if(loading){
      return <Loading></Loading>
  }

    return (
        <div className="hero  bg-base-200">
            <div className=" flex justify-around sm:flex-cols gap-28 items-start ">
               <div className='mt-36'>
               <h1 className='text-xl text-primary mb-4 '>My Profile</h1>
               <img src={user?.photoURL} className="max-w-sm rounded-full shadow-2xl" />
                    
                     <Link to="/editprofile" className='btn flex btn-primary mt-5 btn-sm'>
                     <div className='flex gap-1'>
                      <span>Edit</span>
                      <span>profile</span>
                      </div>
                     </Link>
               </div>
               
                {/* //////// */}
                <div className="hero  min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card w-80 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" disabled value={user?.displayName} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email Address</span>
                                    </label>
                                    <input type="text" disabled value={user?.email} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    
                                    <input type="text" placeholder="Address" className="input input-bordered" />
                                   
                                </div>
                                <div className="form-control">
                                    
                                    <input type="text" placeholder="Phone Number" className="input input-bordered" />
                                   
                                </div>
                                <div className="form-control">
                                   
                                    <input type="url" placeholder="LinkedIn profile link" className="input input-bordered" />
                                   
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                {/* //// */}
            </div>
        </div>
    );
};

export default MyProfile;