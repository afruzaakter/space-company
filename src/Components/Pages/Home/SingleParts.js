import React from 'react';

const SingleParts = ({ part }) => {
    const { name, img, quantity, minimumOrderQuantity, available, description, price } = part;
    return (
       <div>
           
         
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">Price:{price}$</h2>
                    <h2 className="card-title">Quantity: {quantity}ps</h2>
                    <h2 className="card-title">Available:{available}ps</h2>
                    <p>{description}</p>
                    <p >MiniMum Order Quantity: {minimumOrderQuantity}ps</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
      
       </div>
    );
};

export default SingleParts;