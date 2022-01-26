import React from 'react';

function About() {
  return (
    <div className='upload'>
      <header
        className='bg-light text-dark text-left mb-3 mt-0 p-4 rounded-0 box-shadow'
        style={{ height: '125px' }}
      >
        <div className='overlay rounded-0 box-shadow'></div>
        <div className='container'>
          <h1 className='mb-1 font-weight-light'>
            Sell Your Code - Become a Seller!
          </h1>
          <div className='breadcrumbs'>
            <a href='https://www.sellanycode.com' style={{ color: '#6315b8' }}>
              SellAnyCode.com
            </a>
            <i
              className='fa fa-arrow-right text-success fa-fw'
              style={{ marginRight: '5px' }}
            ></i>
            Sell Your Code
            <i className='fa fa-check-circle text-success fa-fw'></i>
          </div>
        </div>
      </header>

      <div className='container'>
        <div className='row p-15'>
          test test 
        </div>
      </div>
    </div>
  );
}

export default About;
