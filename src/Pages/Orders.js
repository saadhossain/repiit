import React, { useContext, useEffect, useState } from 'react';
import OrderDisplay from '../Components/OrderDisplay';
import { AuthContext } from '../Context/AuthProvider';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useContext(AuthContext);
    useEffect(()=> {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [user.email])
    return (
        <div className='w-11/12 md:w-2/4 mx-auto my-5 min-h-[50vh]'>
            <h1 className='text-2xl font-bold text-pri text-center mb-5'>{orders.length ? `Total Orders: ${orders.length}` : 'No Orders Found'}</h1>
            <div>
                {
                    orders.map(order => <OrderDisplay
                    key={order._id}
                    order={order}
                    ></OrderDisplay>)
                }
            </div>
        </div>
    );
};

export default Orders;