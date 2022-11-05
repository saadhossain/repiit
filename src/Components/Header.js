import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {RiLogoutCircleRLine} from 'react-icons/ri'
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
    return (
        <div className='py-2 bg-2nd'>
           <div className='w-11/12 md:w-10/12 mx-auto flex justify-between items-center'>
            <Link to='/'> <img src={logo} alt='' className='h-[40px]'/></Link>
            <div className='flex gap-2'>
                <ul className='flex gap-2 text-white font-semibold items-center'>
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
            </div>
           </div>
        </div>
    );
};

export default Header;