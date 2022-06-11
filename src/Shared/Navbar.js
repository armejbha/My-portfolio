import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        <li className='font-bold'><Link to='/home'>Home</Link></li>
        <li className='font-bold'><Link to='/allskill'>Skills</Link></li>
        <li className='font-bold'><a href='home#projects'>Projects</a></li>
        <li className='font-bold'><a href='home#contact'>Contact</a></li>
        <li className='font-bold'><Link to='/about'>About</Link></li>
        <li className='font-bold'><Link to='/blog'>Blog</Link></li>
        <li><a target="_blank" href="https://drive.google.com/uc?id=1TDHyw9bviDVQlmPezhJtj8eV2IhHPLQf&export=download" className="btn btn-primary bg-gradient-to-r from-secondary to-primary uppercase font-bold text-white">Download Resume</a></li>
    </>
    return (
        <div className="navbar bg-base-100 sticky top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact bg-base-100 dropdown-content shadow w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl lg:text-3xl font-bold">Abdur Rahim</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;