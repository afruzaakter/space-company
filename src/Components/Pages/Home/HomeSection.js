import React from 'react';
import section2 from '../../../assets/images/image.png'

const HomeSection = () => {
    return (
        <div class="hero min-h-screen w-full lg:bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
        <div className=" ">
             <img className='' src={section2} alt="" />
          </div>
          <div class="text-center lg:text-left ">
            <h1 className='text-2xl w-96'>Office nuance that 
          </h1>
            <h1 className='text-2xl'>
            supports creativity</h1>
            <p className='lg:w-64'>Arkitecture studio provides a comprehensive architectural exterior and interior design service for residential and commercial properties. Our specialization is in Victorian, Colonial, Mughal, Classic ,Traditional and Contemporary concept of luxury and modern style home Exterior and Interior designing solutions.Our team of expert architects, interior designers and civil engineers are leaded by Architect Zainul abid and Architectural Consultant Muhammed Shafi v.Our constant goal is flawless service. Guided by your requests and routines, transform any property into a perfect living space. Above all, our designs are guided by your needs, your wishes and our expert interpretation of your lifestyle.</p>
          </div>
         
        </div>
      </div>
    );
};

export default HomeSection;