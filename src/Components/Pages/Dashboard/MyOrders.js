import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import OrderTable from './OrderTable';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    // console.log(orders);
    useEffect(() => {
        if (user) {
            fetch(`https://evening-lake-38137.herokuapp.com/purchase?order=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user])


    //delete my item part
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `https://evening-lake-38137.herokuapp.com/purchase/${id}`
            console.log(url);

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    const remaining = orders.filter(order => order._id !== id)
                    setOrders(remaining);
                })

        }
    }

    return (
        <div>
            <h1>This is my orders: {orders.length} </h1>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Photo</th>
                            <th>Price</th>
                            <th>Order Quantity</th>
                            <th>Payment</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) =>

                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{order.Name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <img className='w-10' src={order.img} alt="" />
                                    </td>
                                    <td>$ {order.price}</td>
                                    <td>{order.quantity} Ps</td>
                                    <td>
                                        {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`} className='btn btn-primary'>Pay</Link>}
                                        {(order.price && order.paid) && <span className='text-success'>Paid</span>}

                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(order._id)} className='btn btn-primary' >Cancel</button>
                                    </td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;