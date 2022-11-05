import React, { useEffect, useState } from 'react';
import ProductsDisplay from '../Components/ProductsDisplay';
import HomeBanner from './HomeBanner';

const Home = () => {
    const [products, setproducts] = useState([]);
    const [count, setCount] = useState(0);
    const [productPerPage, setProductPerpage] = useState(12);
    console.log(productPerPage);
    const [currentPage, setCurrentPage] = useState(0);
    const totalPage = Math.ceil(count / productPerPage);
    useEffect(() => {
        fetch(`http://localhost:5000/products?currentPage=${currentPage}&productPerPage=${productPerPage}`)
            .then(res => res.json())
            .then(data => {
                setproducts(data.products);
                setCount(data.count)
            })
    }, [currentPage, productPerPage])
    return (
        <div>
            <HomeBanner></HomeBanner>
            <div className='w-11/12 md:w-10/12 mx-auto my-4 flex justify-end gap-2'>
                <label htmlFor="itemsPerPage" className='text-lg font-semibold'>Products Per Page</label>
                <select onChange={e => setProductPerpage(e.target.value)} className='border rounded font-semibold'>
                    <option value='6'>6 Products</option>
                    <option value='12' selected>12 Products</option>
                    <option value='15'>15 Products</option>
                </select>
            </div>
            <div className='w-11/12 md:w-10/12 mx-auto grid md:grid-cols-4 gap-5 my-5'>
                {
                    products.map(product => <ProductsDisplay key={product._id} product={product}></ProductsDisplay>)
                }
            </div>
            <div className='flex gap-2 justify-center'>
                {
                    [...Array(totalPage).keys()].map(number => <button
                        key={number}
                        onClick={() => setCurrentPage(number)}
                        className='bg-pri text-white py-1 px-2 rounded-md duration-300 ease-in-out hover:bg-2nd'

                    >
                        {number + 1}
                    </button>)
                }
            </div>
        </div>
    );
};

export default Home;