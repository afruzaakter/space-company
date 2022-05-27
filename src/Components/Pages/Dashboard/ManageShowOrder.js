import React from 'react';

const ManageShowOrder = ({order,index}) => {
    const {img, Name, price} = order;
    console.log(order);
    return (
       
            <tr>
                <th>{index+1}</th>
                <td>{Name}</td>
                <td>
                    <img className='w-28' src={img} alt="" />
                </td>
                <td>{price}</td>
                <td>
                    <button className='btn btn-primary'>Pending</button>
                </td>
                <td>
                    <button className='btn btn-primary'>shipped</button>
                </td>
            </tr>
       
    );
};

export default ManageShowOrder;