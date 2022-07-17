import React from 'react';
import { Link } from 'react-router-dom';

const ShowAllProduct = ({part}) => {
    const {img,name, minimumOrderQuantity,availableQuantity,price,description} = part;
    return (
        <div>
              <div class="card w-80 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-md" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <h2 class="card-title">Price: $ {price}</h2>
                    <h2 class="">Available Quantity: {availableQuantity}</h2>
                    <h2 class="">Minimum Order Quantity : {minimumOrderQuantity}</h2>
                    <div class="card-actions">
                    <Link to={`/productdetails/${part._id}`}>
                      <button className="btn btn-primary">Purchase</button>
                      </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowAllProduct;