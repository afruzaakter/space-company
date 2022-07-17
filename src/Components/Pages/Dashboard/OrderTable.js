import React from 'react';
import { toast } from 'react-toastify';


const OrderTable = ({ user, index, refetch }) => {

    const { email, role } = user;
    //make admin
    const makeAdmin = () => {
        fetch(`https://evening-lake-38137.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
            })
            .then(data => {
                if (data.modifiedCount > 0) {

                    toast.success(`Successfully made an admin`);
                    refetch();
                }
                console.log(data)
            })
    }

    //   delete user 
    const removeUser = (id) => {
        const proceed = window.confirm('Are you sure?')
        fetch(`https://evening-lake-38137.herokuapp.com/user/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {

                refetch();
                toast.success(`Successfully Remove User`)

            })
    }


    return (

        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
                {role !== 'admin' && <button onClick={makeAdmin} className='btn btn-primary btn-sm'>Make Admin</button>}
            </td>
            <td>
                <button onClick={() => removeUser(user._id)} className='btn btn-primary btn-sm'>Remove User</button>
            </td>
        </tr>


    );
};

export default OrderTable;