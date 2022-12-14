import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import OrderDisplay from '../Components/OrderDisplay';
import { AuthContext } from '../Context/AuthProvider';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user, logOut } = useContext(AuthContext);
    useEffect(() => {
        fetch(`https://repiit-server.vercel.app/orders?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('Access_Token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => setOrders(data))
    }, [user?.email, logOut])

    //Handle Order Cancellation
    const handleOrderCancel = (id) => {
        console.log('Cancel Order ID', id);
        const permission = window.confirm('Do you Want to Cancel?')
        if (permission) {
            fetch(`https://repiit-server.vercel.app/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.error('You cancelled the Order')
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining)
                    }
                })
                .catch(err => console.error(err))
        }
    }
    //Handle Payment
    const handlePayment = (id) => {
        console.log('payment approved for', id);
        fetch(`https://repiit-server.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Paid' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Payment Complete')
                    const remaining = orders.filter(order => order._id !== id);
                    const paid = orders.find(order => order._id === id);
                    paid.status = 'Paid';
                    const updatedOrders = [paid, ...remaining]
                    setOrders(updatedOrders)
                }
            })
            .catch(err => console.error(err))
    }
    return (
        <div className='w-11/12 md:w-2/4 mx-auto my-5 min-h-[50vh]'>
            <h1 className='text-2xl font-bold text-pri text-center mb-5'>{orders.length ? `Total Orders: ${orders.length}` : 'No Orders Found'}</h1>
            <div>
                {
                    orders.map(order => <OrderDisplay
                        key={order._id}
                        order={order}
                        handleOrderCancel={handleOrderCancel}
                        handlePayment={handlePayment}
                    ></OrderDisplay>)
                }
            </div>
        </div>
    );
};

export default Orders;