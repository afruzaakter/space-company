import React from 'react';
import slide from '../../../assets/images/project 8.png'

const BestDesign = () => {
    return (
        <div className='p-10 '>
            <div class=" bg-base-200">
      <div class="grid grid-cols-2 ">
      <div className='w-96 ml-28 mt-10'>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     
      </div>
       <div className='grid grid-cols-2 gap-6 mt-10'>
       
       <div className='lg:mb-6'>
       <img src={slide}/>
       </div>
       <div>
       <img src={slide}/>
       </div>
       
     
       <div className='lg:mb-6'>
       <img src={slide}/>
       </div>
       <div>
       <img src={slide}/>
       </div>
      
       </div>
     
  </div>
  </div>
  </div>
    );
};

export default BestDesign;