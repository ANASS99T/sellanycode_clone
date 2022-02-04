import React from 'react';
import '../scss/profile.scss';
import viserlab from '../assets/img/viserlab.jpg';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className='profile'>
      <div
        className='bg-light text-dark text-left mb-3 mt-0 p-4 rounded-0 box-shadow'
        style={{ borderBottom: '1px solid #e5e5e5' }}
      >
        <div className='overlay rounded-0 box-shadow'></div>
        <div className='container'>
          <div className='author-info-row'>
            <div className='first-col'>
              <img
                src={viserlab}
                alt=''
                height='120'
                width='120'
                className='avatar'
              />
              <div className='author-title'>
                <div className='name'> ViserLab </div>
                <div className='type'> Independent Developer </div>
                <Link to='/register'>
                  <button className='btn btn-primary btn-lg btn-block font-bold mt-4'>
                    Contact this author
                  </button>
                </Link>
              </div>
            </div>
            <div className='second-col'>
              <div className='author-rating' style={{ display: 'none' }}>
                <span className='exact-rating'>1.0</span>
                <div className='rating' style={{ fontSize: '15px' }}>
                  ★★★★★
                </div>
                (Likes)
              </div>
              <div className='author-meta-row'>
                Member since: <strong>October 15, 2021</strong>
              </div>
              <div className='author-meta-row'>
                Expert in: <strong>iOS, Android, Unity</strong>
              </div>
              <div className='author-meta-row'>
                Developing experience: <strong>3-5 years</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container author-products'>
        <div className='wrapper mb-3 mt-3'>
          <span
            className='font-weight-bold h4 m-t-sm'
            style={{ fontSize: '27px', position: 'relative', left: '-6px' }}
          >
            Products
          </span>
        </div>
        <div className='row rowgames'>
          <div className='col-sm-3 mb-4'>
            <div className='card box-shadow h-100'>
              <Link to='/item/2738/viserlance-freelancing-marketplace-platform'>
                <div className='relativel'>
                  <button
                    type='button'
                    className='btn btn-primary btn-sm float-right font-weight-bold buttonprice text-white'
                  >
                    $9
                  </button>
                  <img
                    className='card-img-top'
                    src='https://www.sellanycode.com/system/assets/uploads/products/ViserLanceFreelancingMarketplacePlatform_sellanycode_featured_image_1643060391.jpg'
                    alt='ViserLance - Freelancing Marketplace Platform'
                  />
                </div>
                <div className='card-body text-center'>
                  <h5 className='card-title mb-3'>
                    ViserLance - Freelancing Marketplace Platform
                  </h5>
                </div>
              </Link>
            </div>
          </div>
          <div className='col-sm-3 mb-4'>
            <div className='card box-shadow h-100'>
              <Link to='/item/2738/viserlance-freelancing-marketplace-platform'>
                <div className='relativel'>
                  <button
                    type='button'
                    className='btn btn-primary btn-sm float-right font-weight-bold buttonprice text-white'
                  >
                    $9
                  </button>
                  <img
                    className='card-img-top'
                    src='https://www.sellanycode.com/system/assets/uploads/products/ViserLanceFreelancingMarketplacePlatform_sellanycode_featured_image_1643060391.jpg'
                    alt='ViserLance - Freelancing Marketplace Platform'
                  />
                </div>
                <div className='card-body text-center'>
                  <h5 className='card-title mb-3'>
                    ViserLance - Freelancing Marketplace Platform
                  </h5>
                </div>
              </Link>
            </div>
          </div>
          <div className='col-sm-3 mb-4'>
            <div className='card box-shadow h-100'>
              <Link to='/item/2738/viserlance-freelancing-marketplace-platform'>
                <div className='relativel'>
                  <button
                    type='button'
                    className='btn btn-primary btn-sm float-right font-weight-bold buttonprice text-white'
                  >
                    $9
                  </button>
                  <img
                    className='card-img-top'
                    src='https://www.sellanycode.com/system/assets/uploads/products/ViserLanceFreelancingMarketplacePlatform_sellanycode_featured_image_1643060391.jpg'
                    alt='ViserLance - Freelancing Marketplace Platform'
                  />
                </div>
                <div className='card-body text-center'>
                  <h5 className='card-title mb-3'>
                    ViserLance - Freelancing Marketplace Platform
                  </h5>
                </div>
              </Link>
            </div>
          </div>
          <div className='col-sm-3 mb-4'>
            <div className='card box-shadow h-100'>
              <Link to='/item/2738/viserlance-freelancing-marketplace-platform'>
                <div className='relativel'>
                  <button
                    type='button'
                    className='btn btn-primary btn-sm float-right font-weight-bold buttonprice text-white'
                  >
                    $9
                  </button>
                  <img
                    className='card-img-top'
                    src='https://www.sellanycode.com/system/assets/uploads/products/ViserLanceFreelancingMarketplacePlatform_sellanycode_featured_image_1643060391.jpg'
                    alt='ViserLance - Freelancing Marketplace Platform'
                  />
                </div>
                <div className='card-body text-center'>
                  <h5 className='card-title mb-3'>
                    ViserLance - Freelancing Marketplace Platform
                  </h5>
                </div>
              </Link>
            </div>
          </div>
          <div className='col-sm-3 mb-4'>
            <div className='card box-shadow h-100'>
              <Link to='/item/2738/viserlance-freelancing-marketplace-platform'>
                <div className='relativel'>
                  <button
                    type='button'
                    className='btn btn-primary btn-sm float-right font-weight-bold buttonprice text-white'
                  >
                    $9
                  </button>
                  <img
                    className='card-img-top'
                    src='https://www.sellanycode.com/system/assets/uploads/products/ViserLanceFreelancingMarketplacePlatform_sellanycode_featured_image_1643060391.jpg'
                    alt='ViserLance - Freelancing Marketplace Platform'
                  />
                </div>
                <div className='card-body text-center'>
                  <h5 className='card-title mb-3'>
                    ViserLance - Freelancing Marketplace Platform
                  </h5>
                </div>
              </Link>
            </div>
          </div>
          <div className='col-sm-3 mb-4'>
            <div className='card box-shadow h-100'>
              <Link to='/item/2738/viserlance-freelancing-marketplace-platform'>
                <div className='relativel'>
                  <button
                    type='button'
                    className='btn btn-primary btn-sm float-right font-weight-bold buttonprice text-white'
                  >
                    $9
                  </button>
                  <img
                    className='card-img-top'
                    src='https://www.sellanycode.com/system/assets/uploads/products/ViserLanceFreelancingMarketplacePlatform_sellanycode_featured_image_1643060391.jpg'
                    alt='ViserLance - Freelancing Marketplace Platform'
                  />
                </div>
                <div className='card-body text-center'>
                  <h5 className='card-title mb-3'>
                    ViserLance - Freelancing Marketplace Platform
                  </h5>
                </div>
              </Link>
            </div>
          </div>
          <div className='col-sm-3 mb-4'>
            <div className='card box-shadow h-100'>
              <Link to='/item/2738/viserlance-freelancing-marketplace-platform'>
                <div className='relativel'>
                  <button
                    type='button'
                    className='btn btn-primary btn-sm float-right font-weight-bold buttonprice text-white'
                  >
                    $9
                  </button>
                  <img
                    className='card-img-top'
                    src='https://www.sellanycode.com/system/assets/uploads/products/ViserLanceFreelancingMarketplacePlatform_sellanycode_featured_image_1643060391.jpg'
                    alt='ViserLance - Freelancing Marketplace Platform'
                  />
                </div>
                <div className='card-body text-center'>
                  <h5 className='card-title mb-3'>
                    ViserLance - Freelancing Marketplace Platform
                  </h5>
                </div>
              </Link>
            </div>
          </div>
          <div className='col-sm-3 mb-4'>
            <div className='card box-shadow h-100'>
              <Link to='/item/2738/viserlance-freelancing-marketplace-platform'>
                <div className='relativel'>
                  <button
                    type='button'
                    className='btn btn-primary btn-sm float-right font-weight-bold buttonprice text-white'
                  >
                    $9
                  </button>
                  <img
                    className='card-img-top'
                    src='https://www.sellanycode.com/system/assets/uploads/products/ViserLanceFreelancingMarketplacePlatform_sellanycode_featured_image_1643060391.jpg'
                    alt='ViserLance - Freelancing Marketplace Platform'
                  />
                </div>
                <div className='card-body text-center'>
                  <h5 className='card-title mb-3'>
                    ViserLance - Freelancing Marketplace Platform
                  </h5>
                </div>
              </Link>
            </div>
          </div>
          <div className='col-sm-3 mb-4'>
            <div className='card box-shadow h-100'>
              <Link to='/item/2738/viserlance-freelancing-marketplace-platform'>
                <div className='relativel'>
                  <button
                    type='button'
                    className='btn btn-primary btn-sm float-right font-weight-bold buttonprice text-white'
                  >
                    $9
                  </button>
                  <img
                    className='card-img-top'
                    src='https://www.sellanycode.com/system/assets/uploads/products/ViserLanceFreelancingMarketplacePlatform_sellanycode_featured_image_1643060391.jpg'
                    alt='ViserLance - Freelancing Marketplace Platform'
                  />
                </div>
                <div className='card-body text-center'>
                  <h5 className='card-title mb-3'>
                    ViserLance - Freelancing Marketplace Platform
                  </h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
