import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import OrderTable from './OrderTable';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user',{
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if(isLoading){
        return<Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-center text-2xl mt-5 mb-5 font-bold text-primary'>Make Admin:{users.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr >
                            <th className='text-xl'>S.No</th>
                            <th className='text-xl'>Email</th>
                            <th className='text-xl'>Role</th>
                            <th className='text-xl'>Delete Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                      
                       {
                           users?.map((user,index) =><OrderTable
                            key={user._id}
                               user = {user}
                               index={index}
                               refetch={refetch}
                           >   
                           </OrderTable> )
                       }

                  
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;