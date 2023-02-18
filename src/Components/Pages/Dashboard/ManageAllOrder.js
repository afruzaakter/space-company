import React, { useEffect, useState } from 'react';
import ManageShowOrder from './ManageShowOrder';

const ManageAllOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://y-psi-indol.vercel.app/purchase')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <h1>This is manage all order{setOrders.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th className='text-xl'>S.No</th>
                            <th className='text-xl'>Name</th>
                            <th className='text-xl'>Photo</th>
                            <th className='text-xl'>Price</th>
                            <th className='text-xl'>Pending</th>
                            <th className='text-xl'>shipped </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders?.map((order, index) => <ManageShowOrder
                                key={order._id}
                                order={order}
                                index={index}
                            >
                            </ManageShowOrder>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrder;