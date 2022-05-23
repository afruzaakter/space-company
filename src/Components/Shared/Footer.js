import React from 'react';
import image from '../../assets/images/logo.png';
import facebook from '../../assets/images/facebook (1).png';
import google from '../../assets/images/google.png';
import gitHub from '../../assets/images/github.png';
import payment from '../../assets/images/payment-footer.png';
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid-flow-col gap-4 md:place-self-center  md:justify-self-end">
            <img className='mb-3' src={facebook} alt="" />
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
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
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