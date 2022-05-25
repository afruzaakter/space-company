import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='mt-28'>
            <h1 className='text-primary font-bold text-5xl text-center'>Your Dashboard</h1>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                    {/* <!-- Page content here --> */}
                    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto  w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li className='my-5'><NavLink to='/dashboard'>My Orders</NavLink></li>
                        <li><NavLink to='/dashboard/addreviews'>Add Reviews</NavLink></li>
                        <li><NavLink to='/dashboard/myprofile'>My Profile</NavLink></li>
                       
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;