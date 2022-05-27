import React from 'react';
import bg from '../../assets/images/mic.png'
import bg1 from '../../assets/images/project-1.jpg';
import bg2 from '../../assets/images/-project-2.jpg';
const MyProject = () => {
    return (
        <div>

            <h1 className='text-3xl text-primary font-bold text-center'>Skills Of Technologies </h1>
            {/* <div className='text-center'> */}
                
                
            <div class="carousel carousel-end mt-5 mb-5  bg-primary rounded-box">
                <div class="carousel-item flex  flex-col text-white  ml-28 p-6">
                <h1 className='text-6xl' ><i class="fab fa-html5"></i> </h1>
                <p className='text-xl'>HTML</p>
                </div>
                <div class="carousel-item flex  flex-col text-white  ml-5 p-6">
                <h1 className='text-6xl' ><i class="fab fa-css3-alt"></i> </h1>
                <p className='text-xl'>CSS</p>
                </div>
                <div class="carousel-item flex  flex-col text-white  ml-5 p-6">
                <h1 className='text-6xl' ><i class="fab fa-bootstrap"></i> </h1>
                <p className='text-xl'>Bootstrap</p>
                </div>
                <div class="carousel-item flex  flex-col text-white  ml-5 p-6">
                <h1 className='text-6xl' ><i class="fab fa-html5"></i> </h1>
                <p className='text-xl'>Tailwindcss</p>
                </div>
                <div class="carousel-item flex  flex-col text-white  ml-5 p-6">
                <h1 className='text-6xl' ><i class="fab fa-js"></i> </h1>
                <p className='text-xl'>JavaScript</p>
                </div>
                <div class="carousel-item flex  flex-col text-white  ml-5 p-6">
                <h1 className='text-6xl' ><i class="fab fa-react"></i> </h1>
                <p className='text-xl'>React</p>
                </div>
                <div class="carousel-item flex  flex-col text-white  ml-5 p-6">
                <h1 className='text-6xl' ><i class="fab fa-node-js"></i> </h1>
                <p className='text-xl'>Node.js</p>
                </div>
                <div class="carousel-item flex  flex-col text-white  ml-5 p-6">
                <h1 className='text-6xl' ><i class="fab fa-html5"></i> </h1>
                <p className='text-xl'>Mongodb</p>
                </div>
               
            {/* </div> */}
            </div>

            <h1 className='text-3xl text-primary font-bold text-center'>My Project</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={bg} alt="Shoes"
                        
                        class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                    <div class="card-actions">
                        <a href="https://afruzaakter.github.io/Second-Assignment-influencer-gear/index.html" class="btn btn-primary" target='_blank' >Live Link</a>
                            
                        </div>
                       
                       
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={bg1} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                       
                    <div class="card-actions">
                        <a href=" https://afruzaakter.github.io/First-assignment-html-and-css/index.html" class="btn btn-primary" target='_blank' >Live Link</a>
                            
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={bg2} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        
                    <div class="card-actions">
                        <a href="https://afruzaakter.github.io/Nasim-project/index.html" class="btn btn-primary" target='_blank' >Live Link</a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProject;