import React from 'react';
import slider1 from '../../../assets/images/banner.png'
import slider2 from '../../../assets/images/home banner.jpg'
import slider3 from '../../../assets/images/home banner 3.jpg'


const Banner = () => {
    return (
       <div className='mt-20'>
            <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slider1} alt='' className="w-full"/> 
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slider2} alt=''  className="w-full"/> 
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slider3} alt=''  className="w-full"/> 
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
            </div>
        </div>
       </div>
    );
};

export default Banner;