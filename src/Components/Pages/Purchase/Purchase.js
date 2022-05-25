import React,{useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails';
const Purchase = () => {
     const [products, setProducts] = useState([]);
    console.log(products);
    const {id} = useParams()
    useEffect(() =>{
          const url = `http://localhost:5000/service/${id}`
          console.log("purchase id",url);
          fetch(url)
          .then(res => res.json())
          .then(data => setProducts(data))
    }, [])
    return (
        <div className=''>
            <div className="hero min-h-screen bg-base-200  ">
                <div className="hero-content flex-col lg:flex-row border-solid border-2 border-primary mt-16 rounded-md">
                    <img src={products.img} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                    <div className='card w-96 bg-base-100 p-11 shadow-xl'>
                        <h1 className="text-xl font-bold">{products.name}</h1>
                        <h1 className=" font-bold">Price: <span className='text-xl text-primary font-bold'>${products.price}</span> </h1>
                        <h1 className=" font-bold">Minimum Order Quantity: <span className='text-xl text-primary font-bold'> {products.minimumOrderQuantity} Ps</span> </h1>
                        <h1 className="font-bold">Available Quantity: <span className='text-xl text-primary font-bold'>{products.availableQuantity} Ps</span> </h1>

                        <p className="py-6">{products.description}</p>

                       
                      <Link to={`/productdetails/${products._id}`}>
                      <button className="btn btn-primary">Purchase</button>
                      </Link>
                       
                    </div>
                </div>
              

            </div>
        </div>
    );
};

export default Purchase;