import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';

const EditProfile = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className="hero  bg-base-200">
            <div className=" flex justify-around gap-28 items-start ">
                <div className='mt-36'>
                    <h1 className='text-xl text-primary mb-4 '>My Profile</h1>
                    {/* <img src="" className="max-w-sm rounded-lg shadow-2xl" />
                */}
                    <div class="avatar online">
                        <div class="w-24 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=28212" />
                        </div>
                    </div>

                    <div>
                        <input className='hidden' id='ProfilePhoto' name='ProfilePhoto' type="file" />
                        <label for="ProfilePhoto" className='btn flex btn-primary mt-5 btn-sm' >

                            <div className='flex gap-1'>
                                <span>Update</span>
                                <span>photo</span>
                            </div>
                        </label>
                    </div>

                 
                </div>

                {/* //////// */}
                <div className="hero w-80 min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input type="text" placeholder="Address" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input type="text" placeholder="Phone Number" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                   
                                   <input type="url" placeholder="LinkedIn profile link" className="input input-bordered" />
                                  
                               </div>
                                <button className='btn btn-primary btn-sm'>Save Change</button>

                            </div>
                        </div>
                    </div>
                </div>
                {/* //// */}
            </div>
        </div>
    );
};

export default EditProfile;