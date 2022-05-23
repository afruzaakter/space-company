import React from 'react';
import section1 from '../../../assets/images/exta-section1.jpg'
import section2 from '../../../assets/images/exta-section2.jpg'

const HomeSection = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left ">
             <img src={section1} alt="" />
          </div>
          <div class="text-center lg:text-left ">
             <img src={section2} alt="" />
          </div>
        </div>
      </div>
    );
};

export default HomeSection;