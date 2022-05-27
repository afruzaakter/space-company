import React from 'react';
import banner from '../../assets/images/blogbanner.jpg';
const Blogs = () => {
    return (
        <section>
            <div className='m-16 mt-28 mx-auto ml-28'>
                <div className="hero min-h-screen bg-base-200">
                    <div className="flex justify-around gap-5 items-start  flex-col lg:flex-row">
                        <img src="https://api.lorem.space/image/movie?w=360&h=590" className="max-w-sm rounded-lg shadow-2xl" alt=" " />
                        <div className=''>
                            <h1 className="text-5xl font-bold">Blogs Question and Answer</h1>
                            <div>
                                <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                                    <div className="collapse-title text-xl font-medium">
                                        Q-1:How will you improve the performance of a React Application?
                                    </div>
                                    <div className="collapse-content">
                                        <p>In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.

                                            In this guide, we will discuss five important ways to optimize the performance of a React application, including pre-optimization techniques. These include:





                                            <ul>
                                                <li> 1. Lazy loading images in React</li>
                                                <li>2.  Windowing or list virtualization in React</li>
                                                <li>3. Code-splitting in React using dynamic import()</li>
                                                <li>4. Code-splitting in React using dynamic import()</li>
                                                <li>5.   Keeping component state local where necessary</li>
                                                <li>6. Memoizing React components to prevent unnecessary re-renders
                                                </li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                                <div className="collapse-title text-xl font-medium">
                                    Q-2:What are the different ways to manage a state in a React application?
                                </div>
                                <div className="collapse-content">
                                    <p>There are four main types of state you need to properly manage in your React apps:
                                       </p>
                                        <ul>
                                            <li>1. Local State</li>
                                            <li>2. Global State</li>
                                            <li>3. Server State</li>
                                            <li>4. URL State</li>
                                        </ul>
                                </div>
                            </div>
                            <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                                <div className="collapse-title text-xl font-medium">
                                    Q-3:How does prototypical inheritance work?
                                </div>
                                <div className="collapse-content">
                                    <p>Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. All JavaScript objects inherit properties and methods from a prototype: Date objects inherit from Date.</p>
                                </div>
                            </div>
                            <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                                <div className="collapse-title text-xl font-medium">
                                    Q-4:What is a unit test? Why should write unit tests?
                                </div>
                                <div className="collapse-content">
                                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                                </div>
                            </div>
                            <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                                <div className="collapse-title text-xl font-medium">
                                    Q-5:You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                                </div>
                                <div className="collapse-content">
                                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                                </div>
                            </div>
                            <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                                <div className="collapse-title text-xl font-medium">
                                    Q-6:Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                                </div>
                                <div className="collapse-content">
                                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;