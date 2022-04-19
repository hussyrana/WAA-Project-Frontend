import React from 'react';
import { useSelector } from 'react-redux';

const Finish = ({ finished, total }) => {
 const {totalPrice} = useSelector(state=>state.cart)
  {
    if (true) {
      return (
        <div
          className='container'
          style={{
            paddingTop: '50px',
            textAlign: 'center',
          }}
        >
          <h2>You have succesfully finished payment!</h2>
          <p>Total: ${totalPrice}</p>
        </div>
      );
    } else {
      return (
        <div
          className='container'
          style={{
            paddingTop: '50px',
            textAlign: 'center',
          }}
        >
          <h2>Finish payment</h2>
        </div>
      );
    }
  }
};

export default Finish;
