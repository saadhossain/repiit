import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/repiit-logo-white.png'
const Header = () => {
    return (
        <div className='py-2 bg-2nd'>
           <div className='w-11/12 md:w-10/12 mx-auto flex justify-between items-center'>
            <Link to='/'> <img src={logo} alt='' className='h-[40px]'/></Link>
            <div className='flex gap-2'>
                <ul className='flex gap-4 text-white font-semibold'>
                    <li><Link to='/'>Shop</Link></li>
                    <li><Link to='/orders'>Order</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </div>
           </div>
        </div>
    );
};

export default Header;