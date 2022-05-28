import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    // const [products, setProducts] = useState([]);

  
        
       
    

    const onSubmit = (data) =>{
        console.log(data);


      
        const url = `http://localhost:5000/service`;
        console.log(url);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type':  'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            toast.success('Successfully Add product')
        })
      
    }
    return (
        <div className='flex justify-center items-center h-screen '>

        <div className="card w-96   login-continer">
            <div className="card-body">
                <h2 className="text-center text-primary text-2xl font-bold mb-5">Add Product</h2>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 p-3 border-2 border-primary rounded-md w-full' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2 w-full p-3 border-2 border-primary rounded-md' placeholder='Description' {...register("description")} />
                <input className='mb-2 w-full p-3 border-2 border-primary rounded-md' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2 w-full p-3 border-2 border-primary rounded-md' placeholder='Minimum Order Quantity' type="number" {...register("minimumOrderQuantity")} />
                <input className='mb-2 w-full Available Quantity p-3 border-2 border-primary rounded-md' placeholder='Available Quantity' type="number" {...register("availableQuantity")} />
                <input className='mb-2 w-full p-3 border-2 border-primary rounded-md' placeholder='Photo URL' type="url" {...register("img")} />
                <input className='w-full btn btn-primary' type="submit" value="Add Service" />
            </form>
                
               
            </div>
        </div>
    </div>
    );
};

export default AddProduct;