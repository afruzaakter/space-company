import React from 'react';
import useParts from '../../../hooks/useParts';
import Purchase from '../Purchase/Purchase';
import SingleParts from './SingleParts';

const Parts = () => {
    const [parts, setParts] = useParts();
    // console.log(parts);

    return (
        <div>

            <div className='text-center font-bold mt-10'>
                <p className='text-red-400 animate__rotateInUpLeft'>TOP SALE ON THIS WEEK</p>
                <h1 className='text-4xl text-primary font-bold animate__animated animate__zoomInDown'>
                    BEST SELLERS</h1>
            </div> 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 animate__animated animate__fadeInLeftBig'>
                {
                    parts.slice(0, 6).map(part => <SingleParts
                        part={part}
                    >

                    </SingleParts>)
                }
            </div>

           


        </div>
    );
};

export default Parts;