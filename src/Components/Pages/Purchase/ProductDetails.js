import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { toast} from 'react-toastify';

const ProductDetails = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
  
    const [user, loading] = useAuthState(auth);
    const onSubmit = data =>{
        // console.log(e);
       
    //    const phone = data.phone;
    //    const address = data.address;
    //    const quantity = data.quantity;
    //    const phone = data.phone;
    //  const purchase = { phone,address, quantity};
    
    //    console.log(data.phone);
    
   
        const purchase = {
            userName: user?.displayName,
            userEmail: user?.email,
            address: data.address,
            phone:data.phone,
           quantity: data.quantity
        }
        console.log(purchase);
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
                     value={user?.displayName || ' '}
                     
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
                     placeholder="Address"
                    //  value={user?.address}
                    name="address"
                    className="input  w-full max-w-xs login-container-input"
                    {...register("address",{
                        required:{
                            value: ' ',
                            message: "❌ Address is Required"
                        }
                   
                      
                      })}
                     />
                    <label className="label">
                    {errors.address?.type === 'required' && <span className="label-text-alt text-red-700">{errors.address.message}</span>}
                    
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <input 
                    type="tel"
                     placeholder="Phone Number"
                     name="phone"
                    className="input  w-full max-w-xs login-container-input"
                    {...register("phone",{
                        required:{
                            value: ' ',
                            message: "❌ Phone Number is Required"
                        },
                        
                        
                        
                      })}
                     />
                    <label className="label">
                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-700">{errors.phone.message}</span>}
                   
                        
                      
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <input 
                    type="number"
                     placeholder="Minimun Order 50ps"
                     name="quantity"
                    className="input  w-full max-w-xs login-container-input"
                    {...register("quantity",{
                        required:{
                            value: ' ',
                            message: "❌ Minimum order 11 px and Maximum order 100px"
                        },
                        max:{
                            value: 1000,
                            message: " Maximum order 100ps"
                        },
                       
                        min: {
                          value: 50,
                          message: '❌ Minimum order 11 px' 
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