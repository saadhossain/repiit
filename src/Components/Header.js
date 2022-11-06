import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {RiLogoutCircleRLine} from 'react-icons/ri'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'
import logo from '../assests/repiit-logo-white.png'
import { AuthContext } from '../Context/AuthProvider';
import toast from 'react-hot-toast';
const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then(()=> {
            toast.success('You are Logged Out');
        })
    }
    const [expandMenu, setExpandMenu] = useState(false);
    return (
        <div className='py-2 bg-2nd'>
           <div className='w-11/12 md:w-10/12 mx-auto flex justify-between items-center'>
            <Link to='/'> <img src={logo} alt='' className='h-[40px]'/></Link>
            <div className='flex gap-2 bg-2nd z-50'>
                <ul className={`md:flex gap-2 py-2 px-10 rounded-b-lg text-white font-semibold bg-2nd items-center absolute md:static duration-500 ease-in-out ${expandMenu ? 'top-12 right-0' : 'top-[-200px] right-0'}`}>
                    <li><Link to='/'>Shop</Link></li>
                    <li><Link to='/orders'>Order</Link></li>
                    {
                        user?.uid 
                        ? <>
                        <img src={user.photoURL} alt='' className='w-10'/>
                        <li onClick={handleLogOut}><Link><RiLogoutCircleRLine className='h-6 w-6'></RiLogoutCircleRLine></Link></li>
                        </> 
                        :<li><Link to='/login'>Login</Link></li>
                    }
                </ul>
                <div onClick={()=> setExpandMenu(!expandMenu)} className='h-8 w-8 text-white md:hidden'>
                    {
                        expandMenu? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>
                    }
                </div>
            </div>
           </div>
        </div>
    );
};

export default Header;