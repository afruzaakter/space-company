import React from 'react';
import slider1 from '../../../assets/images/project 1.png'
import slider2 from '../../../assets/images/project 2.png'
import slider3 from '../../../assets/images/project 3.png'
const UserExpection = () => {
    return (
        <div className='mt-16 mb-16 lg:ml-44 '>
            {/* <h1 className='text-4xl ml-40 mb-5 font-bold text-primary animate__animated animate__backInRight'>User Expectation</h1> */}
            <div className="lg:stats shadow gap-6  ml">

            <div class="card lg:w-96 bg-base-100 shadow-xl">
         
              <div class="card-body">
             <h2 class="card-title">Start Brainstorming</h2>
               <p>Belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
    
               </div>
               <figure><img src={slider1} alt="Shoes" /></figure>
           </div>
            <div class="card mt-14 lg:w-96 bg-base-100 shadow-xl">
         
              <div class="card-body">
             <h2 class="card-title">02</h2>
             <h2 class="card-title">Validation Of Ideas</h2>
               <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
    
               </div>
               <figure><img src={slider2} alt="Shoes" /></figure>
           </div>
            <div class="card w-96 mt-24 bg-base-100 shadow-xl">
         
              <div class="card-body">
             <h2 class="card-title">03</h2>
             <h2 class="card-title">Discuss With Team</h2>
               <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
    
               </div>
               <figure><img src={slider3} alt="Shoes" /></figure>
           </div>


            </div>
        </div>
    );
};

export default UserExpection;