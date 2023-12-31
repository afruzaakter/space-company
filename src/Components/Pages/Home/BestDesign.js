import React from 'react';
import slide from '../../../assets/images/project 8.png'
import slide1 from '../../../assets/images/project img-1.jpg'
import slide2 from '../../../assets/images/project img 4.jpg'
import slide3 from '../../../assets/images/project 5.png'

const BestDesign = () => {
    return (
        <div className='p-10 '>
            <div class=" bg-base-200">
      <div class="grid lg:grid-cols-2 ">
      <div className='w-96 lg:ml-28 mt-10'>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     
      </div>
       <div className='grid lg:grid-cols-2 gap-6 mt-10'>
       
       <div className='lg:mb-6'>
       <img className='w-96 h-64' src={slide}/>
       </div>
       <div>
       <img className='w-96 h-64' src={slide1}/>
       </div>
       
     
       <div className='lg:mb-6'>
       <img className='w-96 h-64' src={slide2}/>
       </div>
       <div>
       <img className='w-96 h-64' src={slide3}/>
       </div>
      
       </div>
     
  </div>
  </div>
  </div>
    );
};

export default BestDesign;