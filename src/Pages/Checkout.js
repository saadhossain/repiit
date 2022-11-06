import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate} from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
const Checkout = () => {
    const [product] = useLoaderData();
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [userInfo, setUserInfo] = useState()

    const handlePlaceOrder = () => {
        const orderInfo = {
            product_Id: product._id,
            email: user.email,
            name: userInfo.name,
            address: userInfo.address,
            phone: userInfo.phone,
            product,
        }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers :{
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Order Placed Successful')
                navigate('/orders')
            }
        })
        .catch(err => console.error(err))
    }
    const handleOrderInfo = (e) => {
        e.preventDefault()
        const field = e.target.name;
        const value = e.target.value;
        const newOrderInfo = {...userInfo}
        newOrderInfo[field] = value;
        setUserInfo(newOrderInfo)
    }
    return (
        <div className='w-11/12 md:w-10/12 mx-auto my-5 md:flex gap-6'>
            <div className='w-full md:w-8/12 mb-10 md:mb-0'>
                <div className="flex flex-col max-w-md p-6 rounded-md bg-2nd dark:text-gray-100">
                    <form className="space-y-5 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm text-gray-900">Enter Name</label>
                                <input onBlur={handleOrderInfo} type="text" name="name" id="name" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-gray-900" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm text-gray-900">Phone Number</label>
                                <input onBlur={handleOrderInfo} type="text" name="phone" id="phone" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-gray-900" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm text-gray-900">Email address</label>
                                <input type="email" name="email" id="email" defaultValue={user?.email} placeholder={user?.email} readOnly className="w-full px-3 py-2 border rounded-mdborder-gray-700 bg-white text-gray-900" />
                            </div>
                            <div>
                                <label htmlFor="address" className="block mb-2 text-sm text-gray-900">Shipping Address</label>
                                <input onBlur={handleOrderInfo} type="text" name="address" id="address" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-gray-900" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='w-full md:w-4/12 border rounded-lg p-5'>
                <div className='flex items-start justify-between border-b pb-2'>
                    <img src={product.thumbnail} alt='' className='w-24 rounded-lg' />
                    <h4>{product.title}</h4>
                    <h4>Price: ${product.price}</h4>
                </div>
                <h2 className='text-xl font-bold text-end mt-10'>Subtotal : ${product.price}</h2>
                <div className='flex justify-end'>
                    <button onClick={handlePlaceOrder} type='submit' className='rapiit-btn'>Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;