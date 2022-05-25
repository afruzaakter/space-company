import React from 'react';

const OrderTable = ({order}) => {
    console.log(order);
    // const {email} = order;
    return (
        <div>
            
            <tr>
                            <th>1</th>
                            {/* <td>{email}</td> */}
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
        </div>
    );
};

export default OrderTable;