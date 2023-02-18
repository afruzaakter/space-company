import React, { useState, useEffect } from 'react';

import Review from './Review';


const ShowAddReview = ({ review }) => {


    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('https://y-psi-indol.vercel.app/review')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, []);
    return (
        <div>
            <div>  <h1 className='text-4xl text-center mb-5 font-bold text-primary'>User Client Say !!</h1></div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews?.map(review => <Review
                        key={review._id}
                        review={review}
                    >

                    </Review>)
                }
            </div>

        </div>
    );
};

export default ShowAddReview;