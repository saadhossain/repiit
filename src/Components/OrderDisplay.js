import React from 'react';

const OrderDisplay = ({ order, handleOrderCancel, handlePayment }) => {
    const {title, thumbnail, price } = order.product;
    return (
        <div>
            <div className='flex border rounded-lg p-2 justify-between mb-3'>
                <img src={thumbnail} alt='' className='w-24 rounded-lg mr-3' />
                <div>
                    <h2 className='text-lg font-semibold'>{title}</h2>
                    <p>Quantity: 1</p>
                </div>
                <h2 className='text-lg font-semibold'>Price: ${price}</h2>
                <div className='flex gap-2 items-center'>
                    <label onClick={()=> handlePayment(order._id)} htmlFor="payment-modal" className={`py-1 px-2 rounded ${order.status ? 'bg-green-700': 'bg-pri'} text-white font-semibold cursor-pointer`}>{order.status ? order.status : 'Payment'}</label>
                    <button onClick={() => handleOrderCancel(order._id)} className='py-1 px-2 rounded bg-pri text-white font-semibold'>Cancel</button>
                </div>
            </div>

            {/* Paymnt Modal Codes */}
        </div>
    );
};

export default OrderDisplay;