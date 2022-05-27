import React from 'react';
import useParts from '../../../hooks/useParts';
import ShowAllProduct from './ShowAllProduct';

const AllProduct = () => {
    const [parts, setParts] = useParts([])
    console.log(parts);
    return (
        <div>
            <h1>All Product</h1>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    parts?.map(part => <ShowAllProduct
                    key={part._id}
                    part= {part}
                    ></ShowAllProduct>)
                }
            </div>
          
        </div>
    );
};

export default AllProduct;