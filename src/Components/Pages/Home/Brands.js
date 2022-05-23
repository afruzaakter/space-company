import React from 'react';
import brand1 from '../../../assets/images/item-1.jpg'
import brand2 from '../../../assets/images/item-2.jpg'
import brand3 from '../../../assets/images/item-3.jpg'
import brand4 from '../../../assets/images/item-4.jpg'
import brand5 from '../../../assets/images/item-5.jpg'
import brand6 from '../../../assets/images/item-6.jpg'

const Brands = () => {
    return (
        <div>
            <div className='text-center font-bold mt-10'>
                <p className='text-red-400'>TOP QUALITY PARTNER</p>
                <h1 className='text-4xl text-primary font-bold'>SHOP BY BRANDS</h1>
            </div>

            <div class="carousel carousel-end   bg-neutral rounded-box">
                <div class="carousel-item">
                    <img src={brand1} class="w-18" alt='brand1' />
                </div>
                <div class="carousel-item">
                    <img src={brand2} class="w-18" alt='brand2'
                    />
                </div>
                <div class="carousel-item">
                    <img src={brand3} class="w-18" alt='brand2' />
                </div>
                <div class="carousel-item">
                    <img src={brand4} class="w-18" alt='brand2' />
                </div>
                <div class="carousel-item">
                    <img src={brand5} class="w-18" alt='brand2' />
                </div>
                <div class="carousel-item">
                    <img src={brand6} class="w-18" alt='brand2'/>
                </div>
                <div class="carousel-item">
                    <img src={brand1} class="w-18" alt='brand2' />
                </div>
            </div>

        </div>
    );
};

export default Brands;