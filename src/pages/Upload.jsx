import React from 'react';
import screen from '../assets/img/sellanycode-screen.png';
function Upload() {
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
          <div
            className='col-sm-12'
            style={{ padding: '0px', marginBottom: '50px' }}
          >
            <div className='card mt-3 box-shadow'>
              <div
                className='card-body'
                style={{
                  fontSize: '31px',
                  textAlign: 'center',
                  lineHeight: '47px',
                }}
              >
                Start making money by selling your Scripts, Themes, App Source
                Codes and Games to the thousands of buyers on SellAnyCode.com!
                🚀🙂
              </div>

              <div className='bg-white'>
                <div className='container'>
                  <div className='row m-t-xl m-b-xxl'>
                    <div className='col-sm-5'>
                      <img src={screen} alt='screen' className='w-100' />
                    </div>
                    <div
                      className='col-sm-7 text-lg'
                      style={{ lineHeight: '32px' }}
                    >
                      <h3 className='text-dark font-bold m-b-lg'>
                        Start selling in just a few steps - Just 5 minutes!
                      </h3>
                      <div className='text-dark'>
                        <strong>1.</strong> Sign up for free on SellAnyCode.com!
                        <br />
                        <strong>2.</strong> Upload your item up to 1.5GB with
                        256-bit encryption
                        <br />
                        <strong>3.</strong> Our team will review your item,
                        approval takes 24 hours from the submission
                        <br />
                        <strong>4.</strong> Once your item has been approved it
                        will appear on SellAnyCode.com
                        <br />
                        <strong>5.</strong> Have your earnings transferred to
                        you by Paypal or Wire Transfer immediately
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
