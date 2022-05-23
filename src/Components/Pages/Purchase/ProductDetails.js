import React from 'react';

const ProductDetails = ({ product }) => {
    const { name, img, minimumOrderQuantity, availableQuantity, description, price } = product;
    console.log(product);
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <h1 className="text-5xl font-bold">{price}</h1>
                        <h1 className="text-5xl font-bold">{minimumOrderQuantity}</h1>
                        <h1 className="text-5xl font-bold">{availableQuantity}</h1>

                        <p className="py-6">{description}</p>
                        <button className="btn btn-primary">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;