import '../scss/profile.scss';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import Moment from 'react-moment';
import productService from '../services/Product.service';
import userService from '../services/User.service';

export default function Profile() {

  const [product, setProduct] = useState(null);
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    userService
    .getUserById(id)
    .then((res) => {
      console.log(res.user);
      setUser(res.user);
      // setLoading(false);
    })
    .catch((err) => {
      // logout();
      console.log(err);
    });

    productService
        .getProductsByUser(id)
        .then((res) => {
          console.log(res);
          setProduct(res?.data.products);
        })
        .catch((err) => {});
     
  }, []);
  
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
                src={`http://127.0.0.1:3001/uploads/product/${user?.avatar}`}
                alt=''
                height='120'
                width='120'
                className='avatar'
              />
              <div className='author-title'>
                <div className='name'> {user?.fullName} </div>
                <div className='type'> {user?.devloperType}</div>
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
                Member since: <strong><Moment format='YYYY/MM/DD'>{user?.createdAt}</Moment></strong>
              </div>
              <div className='author-meta-row'>
                Expert in: <strong>{user?.frameworks}</strong>
              </div>
              <div className='author-meta-row'>
                Developing experience: <strong>{user?.devlopingExperience}</strong>
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
