import React from 'react';

const Blogs = () => {
    return (
        <div className=' h-screen mx-auto justify-center items-center flex'>
            {/* <h1>This is blogs page</h1> */}

            <label for="my-modal-5" class="btn modal-button">open modal</label>


            <input type="checkbox" id="my-modal-5" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box w-11/12 max-w-5xl"> 
                   
                {/* collapse use -1 */}
                    <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div class="collapse-title text-xl font-medium">
                        <h1 className='py-1'>Question-1:How will you improve the performance of a React Application?</h1>
                        </div>
                        <div class="collapse-content">
                            <p>tabindex="0" attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    {/* collapse use -1 */}
                    <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div class="collapse-title text-xl font-medium">
                        <h1 className='py-1'>Question-1:How will you improve the performance of a React Application?</h1>
                        </div>
                        <div class="collapse-content">
                            <p>tabindex="0" attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    {/* collapse use -1 */}
                    <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div class="collapse-title text-xl font-medium">
                        <h1 className='py-1'>Question-1:How will you improve the performance of a React Application?</h1>
                        </div>
                        <div class="collapse-content">
                            <p>tabindex="0" attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    {/* collapse use -1 */}
                    <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div class="collapse-title text-xl font-medium">
                        <h1 className='py-1'>Question-1:How will you improve the performance of a React Application?</h1>
                        </div>
                        <div class="collapse-content">
                            <p>tabindex="0" attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    {/* collapse use -1 */}
                    <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div class="collapse-title text-xl font-medium">
                        <h1 className='py-1'>Question-1:How will you improve the performance of a React Application?</h1>
                        </div>
                        <div class="collapse-content">
                            <p>tabindex="0" attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    {/* collapse use -1 */}
                    <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div class="collapse-title text-xl font-medium">
                        <h1 className='py-1'>Question-1:How will you improve the performance of a React Application?</h1>
                        </div>
                        <div class="collapse-content">
                            <p>tabindex="0" attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div class="modal-action">
                        <label for="my-modal-5" class="btn">OK</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Blogs;