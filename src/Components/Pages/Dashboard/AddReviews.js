import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import ShowAddReview from '../Home/ShowAddReview';

const AddReviews = () => {
    const [user, loading] = useAuthState(auth);
    const [reviews, setReviews] = useState([]);
    const { register, formState: { errors }, handleSubmit } = useForm();

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

   
    if (loading) {
        return <Loading></Loading>
    }





    const onSubmit = (data) => {
        console.log(data);
        const url = 'http://localhost:5000/review'
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
        <div className='flex justify-center items-center h-screen'>

            <div class="card w-96 bg-base-100 shadow-xl text-center">
                <h2 className="text-center text-primary text-2xl font-bold ">ADD REVIEW</h2>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <figure class="px-10 pt-10">
                        <img src={user?.photoURL} alt="Shoes" class="rounded-full" />
                    </figure>

                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{user?.displayName}</h2>

                        <input className='mb-2 w-full p-3 border-2 border-primary rounded-md' placeholder='Designation' {...register("designation")} />
                        <textarea className='mb-2 w-full p-3 border-2 border-primary rounded-md' placeholder='Description' {...register("description")} />
                        <div class="card-actions">
                            <Link to='/home'>
                            <button class="btn btn-primary">Add Review</button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>

           
        </div>
    );
};

export default AddReviews;