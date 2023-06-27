import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'


const Navbar = () => {
    
  
    const menuItem = <>
        <li className='mr-2 font-bold text-secondary'><NavLink to="/">About</NavLink></li>
        <li className='mr-2 font-bold text-secondary'><NavLink to="blogs">BLOGS</NavLink></li>
        <li className='mr-2 font-bold text-secondary'><NavLink to="myportfolio">MY PORTFOLIO</NavLink></li>
        

       
      

    </>
    return (
            <div className="navbar menubar p-5 pl-28 fixed top-0 z-40 bg-blue-200">
            <div className="navbar-start">
                <div className="dropdown w-full flex justify-between  ">
                    {/* <div> <a className="btn btn-ghost normal-case text-xl">daisyUI</a> </div> */}
                    <div> <img src={logo} alt="logo" /> </div>
                    <div>
                        <label tabIndex="0" className="btn text-white font-bold btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box ">

                            {menuItem}

                        </ul>
                    </div>
                </div>

            </div>
            <div className="navbar-center hidden  lg:flex">
                <ul className="menu menu-horizontal  p-0">
                    {menuItem}
                </ul>
            </div>

        </div>
       
    );
};

export default Navbar;