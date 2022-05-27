import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';

const AddReviews = () => {
    const [user, loading] = useAuthState(auth);
    console.log(user);
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            
            <div class="card w-96 bg-base-100 shadow-xl text-center">
            <h2 className="text-center text-primary text-2xl font-bold ">ADD REVIEW</h2>
                <figure class="px-10 pt-10">
                    <img src={user?.photoURL}alt="Shoes" class="rounded-full" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{user?.displayName}</h2>
                    {/* <h2 class="card-title">{user?.displayName}</h2> */}
                    <textarea className='border-gray-700 border-2 rounded-md' name="" id="" placeholder='Add review' cols="30" rows="5"></textarea>
                    <div class="card-actions">
                        <button class="btn btn-primary">Add Review</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReviews;