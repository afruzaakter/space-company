
import { Link, useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Payment = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const url = `http://localhost:5000/service/${id}`;
    console.log(url);

    const { data: payments, isLoading } = useQuery(['service', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>

            <p>payment</p>
            {/* <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {user?.displayName}</p>
                    <h2 class="card-title">Please Pay for {payments.name}</h2>
                    <p>Please pay: ${payments.price}</p>
                </div>
            </div> */}
            {/* <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100"> 
                 <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div> 
            </div> */}
        </div> 
    );
};

export default Payment;