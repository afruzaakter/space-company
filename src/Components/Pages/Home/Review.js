import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Review = ({review}) => {
    const {designation,description} = review;
    const [user, loading] = useAuthState(auth);
    return (
        <div>
             <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={user?.photoURL} alt="Shoes" class="rounded-full" />
                </figure>
                
                <div class="card-body items-center text-center">
                <h2 class="card-title ">{user?.displayName}</h2>
                    <h2 class="card-title">{designation}</h2>
                    <p>{description}</p>
                    
                   
                </div>
            </div>
        </div>
    );
};

export default Review;