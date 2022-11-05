import React from 'react';

const ProductsDisplay = ({ product }) => {
    const { title, description, price, thumbnail, stock, rating, discountPercentage } = product;
    const discount = (price / discountPercentage);
    const salePrice = (price - discount).toFixed(2);
    return (
        <div>
            <div className="max-w-xs rounded-lg shadow-lg bg-slate-200 text-gray-900 relative">
                <img src={thumbnail} alt="" className="rounded-t-lg h-36 w-full" />
                <p className='bg-pri text-white absolute right-2 top-2 rounded px-2'>Sale {Math.round(discountPercentage)}%</p>
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">{title.length > 20 ? title.slice(0, 20) : title}</h2>
                        <p>{description.length > 50 ? description.slice(0, 50) + '...' : description}</p>
                        <div className='flex justify-between'>
                            <h3 className='text-lg font-semibold text-2nd line-through'>${price}</h3>
                            <h3 className='text-lg font-semibold text-pri'>Price: ${salePrice}</h3>
                        </div>
                        <div className='flex justify-between text-2nd font-bold'>
                            <span className='bg-2nd text-white px-2 rounded'>Stock: {stock}</span>
                            <span className='bg-2nd text-white px-2 rounded'>Rating: {rating}</span>
                        </div>
                    </div>
                    <button type="button" className="rapiit-btn">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsDisplay;