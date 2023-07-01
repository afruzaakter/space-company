import React from 'react';
import image from '../../assets/images/logo-removebg-preview.png';
import facebook from '../../assets/images/facebook (1).png';
import google from '../../assets/images/google.png';
import gitHub from '../../assets/images/github.png';
import payment from '../../assets/images/payment-footer.png';
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 lg:bg-base-200 text-base-content">
        <div>
          <img className='w-28 h-28' src={image} alt="" />
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid-flow-col gap-4 md:place-self-center  md:justify-self-end">
          <a className='target-blank' href='https://www.facebook.com/spacedesignltd.com.bd'><img className='mb-3' src={facebook} alt="" /></a>
            
            <img className='mb-3' src={google} alt="" />
            <img className='mb-3' src={gitHub} alt="" />
           
 
          </div>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact: 01797407407 
          <p className='ml-14'>01638 147010</p>
         </a>
          <a className="link link-hover">Email: spacearchitectureltd@gmail.com</a>
          
        </div>
       
         <div>
         <span className="footer-title ">Payment</span>
         <img className='mt-10' src={payment} alt="" />
         </div>

      </footer>

     

    </div>
  );
};

export default Footer;