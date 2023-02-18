import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Payment = () => {
    const [user] = useAuthState(auth);
    const [payments, setPayments] = useState([]);
    console.log(payments);
    const { id } = useParams()
    useEffect(() => {
        const url = `https://y-psi-indol.vercel.app/purchase/${id}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setPayments(data))
    }, [])
    return (
        <div>


            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success text-xl font-bold">Hello, {user?.displayName}</p>
                    <h2 class="text-xl card-title">{payments.Name}</h2>
                    <p className='text-xl font-bold'>Please pay: $ {payments.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    {/* <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements> */}
                </div>
            </div>
        </div>
    );
};

export default Payment;