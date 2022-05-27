import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import { toast} from 'react-toastify';

const ProductDetails = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
   
  
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate()
   const [services, setServices] = useState([])
    // console.log(services);
    const {id} = useParams()
    useEffect(() =>{
          const url = `http://localhost:5000/service/${id}`
        //   console.log("purchase id",url);
          fetch(url)
          .then(res => res.json())
          .then(data => setServices(data))
    }, [])

  

    const onSubmit = data =>{
    const purchase = {
            Name: services.name,
            userEmail: user?.email,
            img: services.img,
            price:services.price,
           quantity: data.quantity,
           
        }
        // console.log(purchase);
        fetch('http://localhost:5000/purchase', {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(purchase)
    })
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        toast.success('Purchase is successfully')
        navigate('/dashboard');

    })
    
    }
    
   
    return (
        <div className='flex justify-center items-center h-screen '>

        <div className="card w-96  login-continer">
            <div className="card-body">
                <h2 className="text-center text-primary text-2xl font-bold mb-5">Purchase Your Product</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* //name field  */}
                  
                <div className="form-control w-full max-w-xs mb-3">
                    <input 
                    type="text"
                     value={services.name}
                     disabled
                    className="input  w-full max-w-xs login-container-input"
                
                     />
                    
                </div>
                {/* Email field  */}
                <div className="form-control w-full max-w-xs mb-3">
                    <input 
                    type="email"
                     disabled
                     value={user?.email || ' '}
                    className="input  w-full max-w-xs login-container-input"
                   
                     />
                    
                </div>
                
                {/* Address field  */}
                <div className="form-control w-full max-w-xs">
                    <input 
                    type="text"
                    value= {services.img}
                    //  value={user?.address}
                   
                    className="input  w-full max-w-xs login-container-input"
                    disabled
                     />
                    
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className='font-bold mb-3 mt-2' htmlFor="">Price</label>
                    <input 
                    type="tel"
                     placeholder="Phone Number"
                     value={services.price}
                    className="input mb-5  w-full max-w-xs login-container-input"
                    required

                     />
                   
                </div>
              
                <div className="form-control w-full max-w-xs">
                    <label className='mb-2 '>Please Order</label>
                    <input 
                    type="number"
                     placeholder="Min.Order 50ps & Max.Order 1000ps"
                     name="quantity"
                    className="input  w-full max-w-xs login-container-input"
                    {...register("quantity",{
                        required:{
                            value: ' ',
                            message: "❌ Minimum order 50 ps and Maximum order 1000ps"
                        },
                        max:{
                            value: 1000,
                            message: " Maximum order 1000ps"
                        },
                       
                        min: {
                          value: 50,
                          message: '❌ Minimum order 50 px' 
                        }
                      })}
                     />
                    <label className="label">
                    {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-700">{errors.quantity.message}</span>}
                    {errors.quantity?.type === 'max' && <span className="label-text-alt text-red-700">{errors.quantity.message}</span>}
                    {errors.quantity?.type === 'min' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                        
                      
                    </label>
                </div>
               
                <input className='btn w-full btn-primary text-white text-xl max-w-xs' type="submit" value='Order Now' />  
                </form>
                
                

            </div>
        </div>
    </div>
    );
};

export default ProductDetails;