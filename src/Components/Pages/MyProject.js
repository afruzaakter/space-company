import React from 'react';
import bg from '../../assets/images/mic.png'
import bg1 from '../../assets/images/project-1.jpg';
import bg2 from '../../assets/images/-project-2.jpg';
const MyProject = () => {
    return (
        <div>
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