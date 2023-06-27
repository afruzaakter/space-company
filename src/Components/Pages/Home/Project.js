import React from 'react';
import slider1 from '../../../assets/images/project 4.png'
import slider2 from '../../../assets/images/project 5.png'

const Project = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-14 ml-16 p-10'>
            <div class="  bg-base-100 ">
          <figure className='w-96 ml-24'><img src={slider1} alt="Shoes" /></figure>
          <div class="card-body w-96 ml-20">
         
          <p >Brandomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, 

          </p>
          <p> you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to.</p>
      
        </div>
        </div>
            <div class="  bg-base-100 ">
              <div class="">
              <h2 class="text-3xl ">Work remotely online </h2>
              <h2 class="text-3xl mb-24"> from anywhere</h2>
            </div>
             <figure className=''><img src={slider2} alt="Shoes" /></figure>
          
          </div>
        </div>
    );
};

export default Project;