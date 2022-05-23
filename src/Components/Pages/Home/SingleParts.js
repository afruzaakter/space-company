import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const SingleParts = ({ part }) => {
    const {_id, name, img, minimumOrderQuantity, availableQuantity, description, price } = part;
    const navigate = useNavigate();
    const handleBuyNow = (id) =>{
         navigate(`/purchase/${id}`)
    }
    return (
       <div>
           
         
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">Price: {price}$</h2>
                    <h2 className="card-title">Available Quantity: {availableQuantity}ps</h2>
                    <h3 className='card-title'>Minimum Order Quantity: {minimumOrderQuantity}ps</h3>
                    <p>{description}</p>
                    <div className="card-actions">
                        <button className='btn btn-primary' onClick={() => handleBuyNow(_id)}> Buy Now</button>
                       
                    </div>
                </div>
            </div>
      
       </div>
    );
};

export default SingleParts;