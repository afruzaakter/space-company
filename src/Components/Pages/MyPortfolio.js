import React from 'react';
import photo from '../../assets/images/template (1).png';
import MyProject from './MyProject';

const MyPortfolio = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200  ">
                <div className="hero-content flex-col lg:flex-row border-solid border-2 border-primary mt-16 rounded-md">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='card w-96 bg-base-100 p-11 shadow-xl'>
                        <h1 className=" font-bold"><span className='text-2xl text-primary font-bold'>AFRUZA AKTER SONIA</span> </h1>
                        <h1 className=" font-bold"><span className='text-1xl text-primary font-bold'>afruzaaktersonia@gmail.com</span> </h1>
                        <p>My name is Afruza akter sonia. I belong to a middle-class family from the Tangail district of Elenga. Currently, I am pursuing my Bachelor's from the University of South Asia, Dhaka.
                         I am a very enthusiastic, determinent, & hardworking person and I like to work in a team which helps me to look at the same thing in a renewed way.

                            Thank you.</p>


                        <label for="my-modal-5" class="btn btn-primary modal-button">Education Qualification</label>


                        <input type="checkbox" id="my-modal-5" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box w-11/12 max-w-5xl">
                                <div class="overflow-x-auto">
                                    <table class="table w-full">

                                        <thead>
                                            <tr>
                                                <th>ACADEMIC QUALIFICATION:</th>
                                                <th>Name of Institute</th>
                                                <th>Group</th>
                                                <th>Result</th>
                                                <th>Year</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <th>B.Sc (Hon’s)</th>
                                                <td>University of South Asia</td>
                                                <td>Bachelor Science of Computer Engineering </td>
                                                <td>3.83 Out of 4.00 </td>
                                                <td>2021</td>
                                            </tr>

                                            <tr>
                                                <th>Diploma in Engineering</th>
                                                <td>Tangail Polytechnic Institute</td>
                                                <td>Computer Science</td>
                                                <td>3.17 Out of 4.00</td>
                                                <td>2016</td>
                                            </tr>
                                            <tr>
                                                <th>Secondary School Certificate (S.S.C) </th>
                                                <td>Ichapur Shere-Bangla High School</td>
                                                <td>Science</td>
                                                <td>4.50 Out of 5.00</td>
                                                <td>2011</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="modal-action">
                                    <label for="my-modal-5" class="btn">Ok</label>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
            <MyProject></MyProject>
        </div >
    );
};

export default MyPortfolio;