import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const [product] = useLoaderData();
    return (
        <div className='w-11/12 md:w-10/12 mx-auto my-5'>
            <h1>{product.title}</h1>
        </div>
    );
};

export default Checkout;