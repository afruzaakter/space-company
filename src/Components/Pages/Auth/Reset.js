import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';

const Reset = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [sendPasswordResetEmail,user, sending] = useSendPasswordResetEmail(
        auth
      );
      const navigate = useNavigate()
      if(user){
          navigate('/');
      }
      if(sending){
          return <Loading></Loading>
      }
    const onSubmit = e => {
        // console.log(data);
        sendPasswordResetEmail(e.email);
        toast('Please Check your email');
        
    }
    return (
        <div className='flex justify-center items-center h-screen '>

        <div className="card w-96  login-continer">
            <div className="card-body">
                <h2 className="text-center text-primary text-2xl font-bold ">Reset your password</h2>
                <p className='mb-5 '>Enter the email address associated with your account and well send you a link to reset your password</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                  
                <div className="form-control w-full max-w-xs">
                    <input 
                    type="email"
                     placeholder="Your Email"
                    className="input  w-full max-w-xs login-container-input"
                    {...register("email",{
                        required:{
                            value: true,
                            message: "❌ Email is Required"
                        },
                   
                        pattern: {
                          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                          message: '❌ Provide a valid Email' 
                        }
                      })}
                     />
                    <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                        
                      
                    </label>
                </div>
             
             
                <input className='btn w-full btn-primary text-white text-xl max-w-xs' type="submit" value='Continue' />  
                </form>
                <p>Return to <Link className='text-primary font-bold' to="/login">Login</Link> </p>
               

            </div>
        </div>
    </div>
    );
};

export default Reset;