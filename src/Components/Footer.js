import React from 'react';
import logo from '../assests/repiit-logo.png'
const Footer = () => {
    return (
        <div className='bg-[#122033] py-5 mt-5'>
            <div className='w-11/12 md:w-10/12 mx-auto grid md:grid-cols-4'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl font-semibold text-white'>Repiit Shop</h1>
                    <img src={logo} alt='' className='h-12 w-32'/>
                    <ul className='text-white'>
                        <li>Electronics</li>
                        <li>Coumputer and Laptops</li>
                        <li>Smartphones and Tablet</li>
                        <li>Cameras and Pad</li>
                        <li>Video Games and Console</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl font-semibold text-white'>Top Brands</h1>
                    <ul className='text-white'>
                        <li>Coco Lee</li>
                        <li>Apple</li>
                        <li>Samsung</li>
                        <li>LG (Life's Good)</li>
                        <li>Hitachi</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl font-semibold text-white'>About Company</h1>
                    <ul className='text-white'>
                        <li>About Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Shipping & Return Policy</li>
                        <li>Reward Programs</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl font-semibold text-white'>Customer Center</h1>
                    <ul className='text-white'>
                        <li>Payment Support</li>
                        <li>Consultant</li>
                        <li>Warrenty Claim</li>
                        <li>Membership</li>
                        <li>Complaint and Care</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;