import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const OrderTable = ({order,index}) => {
    const [user, loading] = useAuthState(auth);
  
    console.log(order);
    // const {email} = order;
    return (
        <div>
            
          
             <tr>

     <th>{index+1}</th>
     <td>{order.Name}</td>
     <td>{user.email}</td>
     <td>
         <img className='w-10' src={order.img} alt="" />
     </td>
    <td>{order.quantity}</td>
    <td>
     {/* <button onClick={() => handleDelete(order._id)} className='btn btn-danger' >Delete</button> */}
     </td>
 </tr>
        </div>
    );
};

export default OrderTable;