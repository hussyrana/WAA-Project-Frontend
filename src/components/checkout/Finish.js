import React from 'react';

const Finish = ({ finished, total }) => {
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
          <p>Total: $1500</p>
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
