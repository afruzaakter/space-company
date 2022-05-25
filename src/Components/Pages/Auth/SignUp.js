import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import '../../Style/Style.css';
import Google from '../../../assets/images/google.png';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import useToken from '../../../hooks/useToken';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
   
    // google authentication 
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    //email password authentication
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [token] = useToken(user || gUser );
      //update profile
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const navigate= useNavigate()
      
      //loading
      if(loading || gLoading || updating){
          return <Loading></Loading>
      }

      if(user || gUser ){
        //   console.log(user || gUser);
          navigate('/');
      }

    //   if(token ){
    //     //   console.log(user || gUser);
    //       navigate('/home');
    //   }

      let signUpError;
      
      if(error || gError || updateError){
        signUpError=<p className='text-red-500'> <small>{error?.message || gError?.message || updateError?.message}</small> </p>
    }
       
       const onSubmit = async (e) => {
       
       await createUserWithEmailAndPassword(e.email, e.password);
        await updateProfile({ displayName: e.name });
       
    }
    return (
        <div className='flex justify-center items-center mt-16 h-screen '>

        <div className="card w-96  login-continer">
            <div className="card-body">
                <h2 className="text-center text-primary text-2xl font-bold mb-5">Sign Up</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <input 
                    type="text"
                     placeholder="Your Name"
                    className="input input-bordered  w-full max-w-xs login-container-input"
                    {...register("name",{
                        required:{
                            value: true,
                            message: "❌ Name is Required"
                        }
                      })}
                     />
                    <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-700">{errors.name.message}</span>}
                          
                    </label>
                </div>
                  
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
                <div className="form-control w-full max-w-xs">
                    <input 
                    type="password"
                     placeholder="Password"
                    className="input  w-full max-w-xs login-container-input"
                    {...register("password",{
                        required:{
                            value: true,
                            message: "❌ Password is Required"
                        },
                    
                        minLength: {
                          value: 6,
                          message: '❌ Must be 6 characters or longer' 
                        }
                      })}
                     />
                    <label className="label">
                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-700">{errors.password.message}</span>}
                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        
                      
                    </label>
                </div>
                {signUpError}
                <input className='btn w-full btn-primary text-white text-xl max-w-xs' type="submit" value='Sign Up' />  
                </form>
                <p>Already have an account?<Link className='text-primary font-bold' to="/login">Login</Link> </p>
                <p>Forgot Password? <Link className='text-primary font-bold' to="/reset">Reset Password</Link> </p>
                <div className="divider"><h1 className='text-primary font-bold'>OR</h1></div>
                <button  onClick={() => signInWithGoogle()}
                className="btn btn-primary text-white "> 
                <img className='mr-4' src={Google} alt="google" />     
                 Continue with Google</button>

            </div>
        </div>
    </div>
    );
};

export default SignUp;