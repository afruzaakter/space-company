import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';

const AddReviews = () => {
    const [user, loading] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    console.log(user);
    if (loading) {
        return <Loading></Loading>
    }
const onSubmit = (data) =>{
  console.log(data);
}
    return (
        <div className='flex justify-center items-center h-screen'>
            
            <div class="card w-96 bg-base-100 shadow-xl text-center">
            <h2 className="text-center text-primary text-2xl font-bold ">ADD REVIEW</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <figure class="px-10 pt-10">
                    <img src={user?.photoURL}alt="Shoes" class="rounded-full" />
                </figure>

                <div class="card-body items-center text-center">
                    <h2 class="card-title">{user?.displayName}</h2>
                    {/* <h2 class="card-title">{user?.displayName}</h2> */}
                    <textarea className='mb-2 w-full p-3 border-2 border-primary rounded-md' placeholder='Description' {...register("data")} />
                    <div class="card-actions">
                        <button class="btn btn-primary">Add Review</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
};

export default AddReviews;