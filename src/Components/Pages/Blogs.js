import React from 'react';

const Blogs = () => {
    return (
        <div className=' h-screen mx-auto justify-center items-center flex'>
            {/* <h1>This is blogs page</h1> */}

            <label for="my-modal-5" className="btn modal-button">open modal</label>


            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">

                    {/* collapse use -1 */}
                    <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            <h1 className='py-1'>Question-1:How will you improve the performance of a React Application?</h1>
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex="0" attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    {/* collapse use -1 */}
                    <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            <h1 className='py-1'>Question-1:How will you improve the performance of a React Application?</h1>
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex="0" attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    {/* collapse use -1 */}
                    <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            <h1 className='py-1'>Question-1:How will you improve the performance of a React Application?</h1>
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex="0" attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    {/* collapse use -1 */}
                    <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            <h1 className='py-1'>Question-1:How will you improve the performance of a React Application?</h1>
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex="0" attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    {/* collapse use -1 */}
                    <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            <h1 className='py-1'>Question-1:How will you improve the performance of a React Application?</h1>
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex="0" attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    {/* collapse use -1 */}
                    <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            <h1 className='py-1'>Question-1:How will you improve the performance of a React Application?</h1>
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex="0" attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div className="modal-action">
                        <label for="my-modal-5" className="btn">OK</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Blogs;