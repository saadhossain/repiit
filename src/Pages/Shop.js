import React, { useState } from 'react';
import { useEffect } from 'react';
import ProductsDisplay from '../Components/ProductsDisplay';
import HomeBanner from './HomeBanner';

const Home = () => {
const [products, setproducts] = useState([]);
const [count, setCount] = useState();
console.log(products);
console.log('total products', count);
useEffect(()=> {
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => {
        setproducts(data.products);
        setCount(data.count)
    })
}, [])
    return (
        <div>
            <HomeBanner></HomeBanner>
            <div className='w-11/12 md:w-10/12 mx-auto grid md:grid-cols-4 gap-5 my-5'>
                {
                    products.map(product => <ProductsDisplay key={product._id} product={product}></ProductsDisplay>)
                }
            </div>
        </div>
    );
};

export default Home;