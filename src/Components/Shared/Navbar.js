import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const menuItem = <>
        <li className='mr-2'><NavLink to="/">Home</NavLink></li>
        <li className='mr-2'><NavLink to="/blogs">Blogs</NavLink></li>
        <li className='mr-2'><NavLink to="/myportfolio">My Portfolio</NavLink></li>
        <li className='mr-2'><NavLink to="login">Login</NavLink></li>

    </>
    return (
        <div class="navbar p-5 pl-28">
            <div class="navbar-start">
                <div class="dropdown w-full flex justify-between  ">
                    <div> <a class="btn btn-ghost normal-case text-xl">daisyUI</a> </div>
                    <div>
                        <label tabindex="0" class="btn btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box ">
                          
                          {menuItem}

                        </ul>
                    </div>
                </div>

            </div>
            <div class="navbar-center hidden  lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;