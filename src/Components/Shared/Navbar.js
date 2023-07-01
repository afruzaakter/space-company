import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo-removebg-preview.png'


const Navbar = () => {
    
  
    const menuItem = <>
        <li className='mr-2 font-bold text-secondary'><NavLink to="/">About</NavLink></li>
        <li className='mr-2 font-bold text-secondary'><NavLink to="/home">Contact</NavLink></li>
        <li className='mr-2 font-bold text-secondary'><NavLink to="/homes">Gallery</NavLink></li>
        <li className='mr-2 font-bold text-secondary'><NavLink to="/homes">Blogs</NavLink></li>
        <li className='lg:ml-16 mr-2 font-bold text-secondary'><NavLink to="/homes">Sign Up</NavLink></li>
        <li className='mr-8 font-bold text-secondary'><NavLink to="/homes">Login</NavLink></li>
        

       
      

    </>
    return (
            <div className="navbar menubar   fixed top-0 z-40 lg:bg-blue-100">
            <div className="navbar-start">
                <div className="dropdown w-full flex justify-between  ">
                    {/* <div> <a className="btn btn-ghost normal-case text-xl">daisyUI</a> </div> */}
                    <div> <img className='w-24 h-16' src={logo} alt="logo" /> </div>
                    <div>
                        <label tabIndex="0" className="btn text-black font-bold btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box ">

                            {menuItem}

                        </ul>
                    </div>
                </div>

            </div>
            <div className="navbar-center  hidden  lg:flex">
                <ul className="menu  menu-horizontal  p-0">
                    {menuItem}
                </ul>
            </div>

        </div>
       
    );
};

export default Navbar;