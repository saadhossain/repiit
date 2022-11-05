import React from 'react';

const ProductsDisplay = ({ product }) => {
    const { title, description, price, thumbnail, stock, rating, discountPercentage } = product;
    return (
        <div>
            <div className="max-w-xs rounded-lg shadow-lg bg-slate-200 text-gray-900">
                <img src={thumbnail} alt="" className="rounded-t-lg h-36 w-full" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">{title.length > 20 ?title.slice(0, 20) : title }</h2>
                        <p>{description.length > 50 ? description.slice(0, 50) + '...': description}</p>
                    </div>
                    <button type="button" className="rapiit-btn">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsDisplay;