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
           
         
            <div className="card w-96 bg-base-100 m-10 border-4  shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl w-36" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-xl">{name}</h2>
                    <h2 className="card-title text-secondary">Price: {price}$</h2>
                    <p className="font-bold">Available Quantity: {availableQuantity}ps</p>
                    <p className='font-bold'>Minimum Order Quantity: {minimumOrderQuantity}ps</p>
                    
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