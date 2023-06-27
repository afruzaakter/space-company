import React from 'react';


const Brands = () => {
    return (
        <div className='mt-6 p-10 lg:ml-20'>
            <div className='text-center font-bold mt-10'>
                <p className='text-red-400'>TOP QUALITY PARTNER</p>
                <h1 className='text-4xl text-primary font-bold'>User Expectation</h1>
            </div>

          <div className='grid grid-cols-4 gap-4'>
          <div class="card w-72 bg-base-100 shadow-xl">
            <div class="card-body">
            <h2 class="card-title">2500+</h2>
            <p>Completed Projects</p>
          </div>
  
          </div>
          <div class="card w-72 mt-14 bg-base-100 shadow-xl">
            <div class="card-body">
            <h2 class="card-title">7500+</h2>
            <p>Branch Offices</p>
          </div>
  
          </div>
          <div class="card mt-24 w-72 bg-base-100 shadow-xl">
            <div class="card-body">
            <h2 class="card-title">1200+</h2>
            <p>Best Products</p>
          </div>
  
          </div>
          <div class="card mt-32 w-72 bg-base-100 shadow-xl">
            <div class="card-body">
            <h2 class="card-title ">1500+</h2>
            <p>Happy Clients</p>
          </div>
  
          </div>
          </div>

        </div>
    );
};

export default Brands;