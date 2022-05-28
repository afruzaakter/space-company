import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';

const EditProfile = () => {
    const [user, loading] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    if (loading) {
        return <Loading></Loading>
    }

    

    const onSubmit = (data) => {
        console.log(data);
        const url = 'http://localhost:5000/profile'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
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
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <figure class="px-10 pt-10">
                        <img src={user?.photoURL} alt="Shoes" class="rounded-full" />
                    </figure>

                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{user?.displayName}</h2>

                        <input className='mb-2 w-full p-3 border-2 border-primary rounded-md' placeholder='Address' {...register("address")} />
                        <input className='mb-2 w-full p-3 border-2 border-primary rounded-md' placeholder='Phone Number' {...register("phone")} />
                        <input className='mb-2 w-full p-3 border-2 border-primary rounded-md' placeholder='Linkedin Profile Link' {...register("url")} />
                       
                        {/* <div class="card-actions">
                            <Link to='/dashboard'>
                            <button class="btn btn-primary">Add Review</button>
                            </Link>
                        </div> */}
                        <input className='w-full btn btn-primary' type="submit" value="Save" />
                    </div>
                </form>
                {/* //// */}
            </div>
        </div>
    );
};

export default EditProfile;