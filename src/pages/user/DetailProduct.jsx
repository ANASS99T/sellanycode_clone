import '../../scss/detailProduct.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import productService from '../../services/Product.service';
import Moment from 'react-moment';

import image100 from '../../assets/img/100-percent-satisfaction.svg';
import viserlab from '../../assets/img/viserlab.jpg';
import ImageViewer from 'react-simple-image-viewer';
import { Alert } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function DetailProduct() {
  const [value, setValue] = React.useState(0);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [images, setImages] = useState([]);

  const [inWishlist, setInWishlist] = useState(false);

  const addToWithlist = () => {
    const data = {
      user: localStorage.getItem('user'),
      product: !loading ? product?.id : '',
    };
    productService
      .addProductToWishlist(data)
      .then((res) => {
        console.log(res);
        checkWishlist();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkWishlist = () => {
    productService
      .isProductInWishlist({
        product: id,
        user: localStorage.getItem('user'),
      })
      .then((res) => {
        res.data?.inWishlist ? setInWishlist(true) : setInWishlist(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    productService
      .getProductById(id)
      .then((res) => {
        console.log(res);
        setProduct(res.data?.product);
        if (res.data?.product?.screenshot1 !== null) {
          setImages((oldArray) => [
            ...oldArray,
            'http://127.0.0.1:3001/uploads/product/' +
              res.data?.product?.screenshot1,
          ]);
        }
        if (res.data?.product?.screenshot2 !== null) {
          setImages((oldArray) => [
            ...oldArray,
            'http://127.0.0.1:3001/uploads/product/' +
              res.data?.product?.screenshot2,
          ]);
        }
        if (res.data?.product?.screenshot3 !== null) {
          setImages((oldArray) => [
            ...oldArray,
            'http://127.0.0.1:3001/uploads/product/' +
              res.data?.product?.screenshot3,
          ]);
        }
        if (res.data?.product?.screenshot4 !== null) {
          setImages((oldArray) => [
            ...oldArray,
            'http://127.0.0.1:3001/uploads/product/' +
              res.data?.product?.screenshot4,
          ]);
        }
        if (res.data?.product?.screenshot5 !== null) {
          setImages((oldArray) => [
            ...oldArray,
            'http://127.0.0.1:3001/uploads/product/' +
              res.data?.product?.screenshot5,
          ]);
        }
        if (res.data?.product?.screenshot6 !== null) {
          setImages((oldArray) => [
            ...oldArray,
            'http://127.0.0.1:3001/uploads/product/' +
              res.data?.product?.screenshot6,
          ]);
        }
        if (res.data?.product?.screenshot7 !== null) {
          setImages((oldArray) => [
            ...oldArray,
            'http://127.0.0.1:3001/uploads/product/' +
              res.data?.product?.screenshot7,
          ]);
        }
        if (res.data?.product?.screenshot8 !== null) {
          setImages((oldArray) => [
            ...oldArray,
            'http://127.0.0.1:3001/uploads/product/' +
              res.data?.product?.screenshot8,
          ]);
        }

        checkWishlist();
        setLoading(false);
      })
      .catch((err) => {
        // logout();
        console.log(err);
      });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const licenses = ['Single license', 'Multiple license'];
  const [license, setLicense] = React.useState('Single license');

  const [currentImage, setCurrentImage] = React.useState(0);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);
  // const images = [];

  const openImageViewer = React.useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const removeFromWishlist = () => {
    const data = {
      product: id,
      user: localStorage.getItem('user'),
    };

    productService
      .deleteFromWishlist(data)
      .then((res) => {
        checkWishlist();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  if (!loading)
    return (
      <div className='detailProduct'>
        <div className='jumbotron p-0 pt-5 bg-light border-bottom itempage'>
          <div className='container itempages'>
            <div className='col-md-12 px-0'>
              <div className='row p-15 title'>
                <div className='col-sm-1'>
                  <img
                    className='pull-left thumb-lg m-r-md rounded mr-3'
                    src={`http://127.0.0.1:3001/uploads/product/${product?.icon}`}
                    alt='ViserLance - Freelancing Marketplace Platform'
                    width='80'
                    height='80'
                  />
                </div>
                <div className='col-sm-11'>
                  <h2 className='text-dark'>{product?.name}</h2>
                  <h6>{product?.shortDescription}</h6>
                </div>
              </div>

              <Tabs
                value={value}
                onChange={handleChange}
                aria-label='basic tabs example'
                indicatorColor='secondary'
              >
                <Tab label='Item' {...a11yProps(0)} />
                <Tab label='Reviews' {...a11yProps(1)} />
                <Tab label='Support' {...a11yProps(2)} />
                <Tab label='Comments' {...a11yProps(3)} />
              </Tabs>
            </div>
          </div>
        </div>
        <div className='container itempages'>
          <div className='row p-15'>
            <div className='col-sm-8'>
              <TabPanel value={value} index={0}>
                <div className='card text-center box-shadow'>
                  <div className='card-body p-0'>
                    <img
                      className='card-img-top'
                      src={`http://127.0.0.1:3001/uploads/product/${product.preview}`}
                      alt='ViserLance - Freelancing Marketplace Platform'
                    />
                  </div>
                  <div className='card-footer text-muted'>
                    <div
                      className='btn-group'
                      role='group'
                      aria-label='Basic example'
                    >
                      <a
                        href={loading ? '..' : product.liveDemo}
                        className='btn btn-primary mr-2 rounded btn-view text-white mx-1'
                        style={{ width: '150px' }}
                      >
                        <i
                          className='fa fa-desktop m-r-xs text-white '
                          style={{ marginRight: '10px' }}
                        ></i>
                        Live Demo
                      </a>
                      <button
                        rel='nofollow'
                        className='btn btn-primary mr-2 rounded btn-view text-white mx-1'
                        id='VoteDiv'
                      >
                        <i
                          className='fa fa-thumbs-up fa-fw m-r-xs text-white '
                          aria-hidden='true'
                          style={{ marginRight: '5px' }}
                        ></i>
                        {product.likes} Likes
                      </button>
                      {inWishlist ? (
                        <button
                          // name='addtowishlist'
                          // href='https://www.sellanycode.com/user/'
                          // type='submit'
                          className='btn btn-primary mr-2 rounded btn-view text-white  mx-1'
                          style={{ marginRight: '0px' }}
                          onClick={removeFromWishlist}
                        >
                          <i
                            className='fa fa-heart m-r-xs text-white'
                            style={{ marginRight: '9px' }}
                          ></i>
                          Remove from Wishlist
                        </button>
                      ) : (
                        <button
                          // name='addtowishlist'
                          // href='https://www.sellanycode.com/user/'
                          // type='submit'
                          className='btn btn-primary mr-2 rounded btn-view text-white  mx-1'
                          style={{ marginRight: '0px' }}
                          onClick={addToWithlist}
                        >
                          <i class='far fa-heart m-r-xs text-white' style={{ marginRight: '9px' }}></i>
                          Add to Wishlist
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <div className='card mt-3 box-shadow'>
                  <div className='card-header'>
                    <h4 className='screenshots-header'>Screenshots</h4>
                    <div className='store-links'> </div>
                  </div>

                  <div className='card-body ' style={{ overflow: 'auto' }}>
                    <div className='d-flex align-items-center justify-content-center'>
                      {images.map((src, index) => (
                        <img
                          src={src}
                          key={index}
                          onClick={() => openImageViewer(index)}
                          className='img-thumbnail'
                          style={{
                            margin: '2px',
                            width: '150px',
                            height: '150px',
                          }}
                          alt=''
                        />
                      ))}
                    </div>

                    {isViewerOpen && (
                      <ImageViewer
                        src={images}
                        currentIndex={currentImage}
                        onClose={closeImageViewer}
                        disableScroll={false}
                        backgroundStyle={{
                          backgroundColor: 'rgba(0,0,0,0.9)',
                        }}
                        closeOnClickOutside={true}
                      />
                    )}
                  </div>
                </div>

                <div className='card mt-3 box-shadow'>
                  <div className='card-header'>
                    <h4>Item Description</h4>
                  </div>
                  <div className='card-body carddescription'>
                    <div
                      dangerouslySetInnerHTML={{ __html: product?.description }}
                    />
                  </div>
                </div>

                <div className='card mt-3 box-shadow features-box'>
                  <div className='card-header'>
                    <h4>Features</h4>
                  </div>
                  <div className='card-body featureslist carddescription '>
                    <div
                      dangerouslySetInnerHTML={{ __html: product?.features }}
                    />
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div className='card mt-1 box-shadow review-box'>
                  <div className='card-body'>
                    <Alert severity='warning'>
                      You have to purchase this item to leave a review!
                    </Alert>
                    <br />
                    <h4 className='text-center mb-4 font-weight-bold'>
                      All Reviews
                    </h4>
                    <div className='my-1 p-1 bg-light rounded box-shadow'>
                      <div className='card m-b-0'>
                        <ul className='list-group text-center list-group-flush scroll'></ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <div className='card mt-3 box-shadow'>
                  <div className='card-body'>
                    <div
                      className='clear m-t-md m-b-md text-md getFontAndColor'
                      style={{ marginBottom: '20px' }}
                    >
                      <b style={{ marginBottom: '-18px', display: 'block' }}>
                        What type of support is included?
                      </b>
                      <br />
                      <i className='fa fa-check-circle text-success fa-fw'></i>
                      Free support included
                      <br />
                      <i className='fa fa-check-circle text-success fa-fw'></i>
                      Future item updates
                      <br />
                      <i className='fa fa-check-circle text-success fa-fw'></i>
                      100% Satisfaction guarantee
                      <br />
                      <i className='fa fa-check-circle text-success fa-fw'></i>
                      Payment option PayPal or Stripe
                      <br />
                      <i className='fa fa-check-circle text-success fa-fw'></i>
                      Download code <b>immediately</b> after purchase
                      <br />
                      <i className='fa fa-check-circle text-success fa-fw'></i>
                      Without any isssue on
                      <b>100% and published by the developer</b> <br />
                      <i className='fa fa-check-circle text-success fa-fw'></i>
                      Quality <b>guarantee</b> for your satisfaction <br />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <div className='card mt-3 box-shadow'>
                  <div className='card-body'>
                    <h4 className='text-center mb-4 font-weight-bold'>
                      Ask Pre-order Question
                    </h4>
                    <form action='' id='question'>
                      <div className='input-group mb-3'>
                        <span className='input-group-text' id='basic-addon1'>
                          <i
                            className='fas fa-user-circle'
                            aria-hidden='true'
                          ></i>
                        </span>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='username'
                          aria-label='username'
                          name='username'
                          aria-describedby='basic-addon1'
                          value='Obito'
                          readOnly
                        />
                      </div>
                      <div className='input-group mb-3'>
                        <span className='input-group-text' id='basic-addon1'>
                          <i className='fas fa-envelope' aria-hidden='true'></i>
                        </span>
                        <input
                          type='email'
                          className='form-control'
                          placeholder='email'
                          aria-label='email'
                          name='email'
                          aria-describedby='basic-addon1'
                          value='anass.taher@gmail.com'
                          readOnly
                        />
                      </div>

                      <div className='mb-3'>
                        <h6>Questions</h6>

                        <textarea
                          name='message'
                          className='form-control'
                          id='exampleInputPassword1'
                          spellcheck='false'
                        ></textarea>
                      </div>
                      <button className='btn btn-primary'>Submit</button>
                    </form>
                    <h4 className='text-center mb-4 font-weight-bold'>
                      All Questions
                    </h4>
                    <Alert severity='warning'>No Questions!</Alert>
                  </div>
                </div>
              </TabPanel>
            </div>
            <div className='col-sm-4'>
              <div className='card box-shadow'>
                <div className='card-body'>
                  <div className='clearfix mb-4'>
                    <select
                      id='licensetype'
                      className='form-control'
                      defaultValue={license}
                      onChange={(e) => setLicense(e.target.value)}
                    >
                      {licenses.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <div className='text-center' id='pricing'>
                      <span className='m-l-xs price'>
                        <span className='h2 text-right-xs ' content='USD'>
                          $
                        </span>
                        <span
                          className='h1 text-right-xs font-bold final-price'
                          data-licence='regular'
                          content='9'
                        >
                          {license === 'Single license'
                            ? product?.priceSingle
                            : product?.priceMultiple}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className='clear m-t-md m-b-md text-md'>
                    <i className='fa fa-check-circle text-success fa-fw'></i>We
                    offer support
                    <br />
                    <i className='fa fa-check-circle text-success fa-fw'></i>
                    Future item updates
                    <br />
                    <i className='fa fa-check-circle text-success fa-fw'></i>{' '}
                    100% Satisfaction guarantee
                    <br />
                    <i className='fa fa-check-circle text-success fa-fw'></i>
                    Payment option PayPal or Stripe
                    <br />
                    <i className='fa fa-check-circle text-success fa-fw'></i>
                    Download code <b>immediately</b> after purchase
                    <br />
                  </div>
                  <div className='row align-items-center justify-content-center'>
                    <div className='btn btn-primary w-75 my-3 text-white'>
                      Buy Now
                    </div>
                  </div>
                </div>
                <div className='card-footer text-muted text-center d-flex align-items-center justify-content-center'>
                  <i
                    className='fab fa-stripe text-secondary mx-1 text-secondary'
                    style={{ fontSize: '50px' }}
                  ></i>

                  <i className='fab fa-cc-paypal fa-2x mx-1 text-secondary'></i>
                  <i className='fab fa-cc-visa fa-2x mx-1 text-secondary'></i>
                  <i className='fab fa-cc-mastercard fa-2x mx-1 text-secondary'></i>
                  <i className='fab fa-cc-discover fa-2x mx-1 text-secondary'></i>
                </div>
              </div>

              <div className='card mt-3 box-shadow'>
                <div className='card-header text-left'>
                  <h5> Information</h5>
                </div>
                <div className='table-responsive'>
                  <table className='table table-striped mb-0'>
                    <tbody>
                      <tr>
                        <td className='col-xs-5'>
                          {product?.category?.name + ' '}
                        </td>
                        <td className='col-xs-7'>
                          <Link className='text-success' to='category/7'>
                            Scripts &amp; Code
                          </Link>
                          /
                          <Link className='text-success' to='/category/7/1'>
                            {' ' + product?.subcategory?.name}
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>First Release</td>
                        <td>
                          <Moment format='YYYY/MM/DD'>
                            {product?.createdAt}
                          </Moment>
                        </td>
                      </tr>
                      <tr>
                        <td>Last updated</td>
                        <td>
                          <Moment format='YYYY/MM/DD'>
                            {product?.updatedAt}
                          </Moment>
                        </td>
                      </tr>
                      {product?.filesIncluded ? (
                        <tr>
                          <td>Files included</td>
                          <td>
                            {product?.filesIncluded.split(';').join(', ')}
                          </td>
                        </tr>
                      ) : null}
                      {product?.operatingSystems ? (
                        <tr>
                          <td>Operating Systems</td>
                          <td>
                            {product?.operatingSystems.split(';').join(', ')}
                          </td>
                        </tr>
                      ) : null}
                      {product?.supportedCms ? (
                        <tr>
                          <td>Supported CMS</td>
                          <td>{product?.supportedCms.split(';').join(', ')}</td>
                        </tr>
                      ) : null}
                      {product?.htmlFrameworks ? (
                        <tr>
                          <td>HTML/CSS Framework</td>
                          <td>
                            {product?.htmlFrameworks.split(';').join(', ')}
                          </td>
                        </tr>
                      ) : null}
                      {product?.jsFrameworks ? (
                        <tr>
                          <td>JavaScript Framework</td>
                          <td>{product?.jsFrameworks.split(';').join(', ')}</td>
                        </tr>
                      ) : null}
                      {product?.softwareVersions ? (
                        <tr>
                          <td>Software version</td>
                          <td>
                            {product?.softwareVersions.split(';').join(', ')}
                          </td>
                        </tr>
                      ) : null}
                      {product?.softwareFrameworks ? (
                        <tr>
                          <td>Software framework</td>
                          <td>
                            {product?.softwareFrameworks.split(';').join(', ')}
                          </td>
                        </tr>
                      ) : null}
                      {product?.database ? (
                        <tr>
                          <td>Database</td>
                          <td>{product?.database.split(';').join(', ')}</td>
                        </tr>
                      ) : null}

                      {/* <tr>
                      <td>File Size</td>
                      <td>35 MB</td>
                    </tr> */}
                      <tr>
                        <td>Frameworks</td>
                        <td>
                          <Link
                            className='text-primary'
                            to={'/category/' + product?.subcategory.id}
                          >
                            {product.subcategory.name}
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className='card mt-3 box-shadow'>
                <div className='guarantee-box'>
                  <img
                    className='guarantee-icon m-2'
                    width='52'
                    height='62'
                    alt=''
                    src={image100}
                  />
                  <div className='money-back-text'>
                    <strong>100% Guarantee For Item!</strong>
                    <br /> Money back guarantee policy applies.
                  </div>
                </div>
              </div>

              <div className='card mt-3 box-shadow'>
                <div className='guarantee-box avatar-box mt-2'>
                  <img
                    alt=''
                    height='55'
                    width='55'
                    style={{
                      width: '55px',
                      height: '55px',
                      overflow: 'hidden',
                    }}
                    className='avatar m-2'
                    src={viserlab}
                  />
                  <div className='author-info'>
                    <Link to={`/profile/${product?.user?.id}`}>
                      <div className='author-name'>
                        {' '}
                        {product?.user?.username}
                      </div>
                    </Link>
                    <div className='portfolio-link'>
                      {product?.user?.devloperType
                        ? product?.user?.devloperType
                        : ''}
                    </div>
                  </div>
                  {/* <Link to={`/profile/${product?.user?.id}`}>
                    <button className='btnfollow btn btn-primary btn-lg btn-block font-bold my-3 btnflow'>
                      Follow
                    </button>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container itempages mt-5'>
          <div className='wrapper mb-3 p-15'>
            <span className='font-weight-bold h4 m-t-sm'>Similar Items</span>
          </div>
          <div className='row p-15 similar-box'>
            <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
              <div className='card box-shadow h-100'>
                <Link to='/item/2200/advance-pdf-tool-app'>
                  <div className='relativel'>
                    <button
                      type='button'
                      className='btn btn-primary btn-sm float-right font-weight-bold buttonprice text-white'
                    >
                      $39
                    </button>
                    <img
                      className='card-img-top'
                      src='https://www.sellanycode.com/system/assets/uploads/products/AdvancePDFToolapp_sellanycode_featured_image_1639596255.png'
                      alt='Advance PDF Tool app'
                    />
                  </div>
                  <div className='card-body text-center'>
                    <h6 className='card-title mb-3'>Advance PDF Tool app</h6>
                  </div>
                </Link>
                <div className='card-footer' style={{ display: 'none' }}>
                  <Link to='/item/2200/advance-pdf-tool-app'> </Link>
                  <div className='clearfix'>
                    <Link to='/item/2200/advance-pdf-tool-app'> </Link>
                    <button className='btn btn-sm float-left pr-0'>
                      <i className='fa fa-eye' aria-hidden='true'></i> 51
                    </button>
                    <button className='btn btn-sm float-left'>
                      <i
                        className='fas fa-shopping-basket'
                        aria-hidden='true'
                      ></i>
                      0
                    </button>
                    <button
                      type='button'
                      className='btn btn-success btn-sm float-right font-weight-bold'
                    >
                      $39
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
              <div className='card box-shadow h-100'>
                <Link to='/item/2200/advance-pdf-tool-app'>
                  <div className='relativel'>
                    <button
                      type='button'
                      className='btn btn-primary btn-sm float-right font-weight-bold buttonprice text-white'
                    >
                      $39
                    </button>
                    <img
                      className='card-img-top'
                      src='https://www.sellanycode.com/system/assets/uploads/products/AdvancePDFToolapp_sellanycode_featured_image_1639596255.png'
                      alt='Advance PDF Tool app'
                    />
                  </div>
                  <div className='card-body text-center'>
                    <h6 className='card-title mb-3'>Advance PDF Tool app</h6>
                  </div>
                </Link>
                <div className='card-footer' style={{ display: 'none' }}>
                  <Link to='/item/2200/advance-pdf-tool-app'> </Link>
                  <div className='clearfix'>
                    <Link to='/item/2200/advance-pdf-tool-app'> </Link>
                    <button className='btn btn-sm float-left pr-0'>
                      <i className='fa fa-eye' aria-hidden='true'></i> 51
                    </button>
                    <button className='btn btn-sm float-left'>
                      <i
                        className='fas fa-shopping-basket'
                        aria-hidden='true'
                      ></i>
                      0
                    </button>
                    <button
                      type='button'
                      className='btn btn-success btn-sm float-right font-weight-bold'
                    >
                      $39
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
              <div className='card box-shadow h-100'>
                <Link to='/item/2200/advance-pdf-tool-app'>
                  <div className='relativel'>
                    <button
                      type='button'
                      className='btn btn-primary btn-sm float-right font-weight-bold buttonprice text-white'
                    >
                      $39
                    </button>
                    <img
                      className='card-img-top'
                      src='https://www.sellanycode.com/system/assets/uploads/products/AdvancePDFToolapp_sellanycode_featured_image_1639596255.png'
                      alt='Advance PDF Tool app'
                    />
                  </div>
                  <div className='card-body text-center'>
                    <h6 className='card-title mb-3'>Advance PDF Tool app</h6>
                  </div>
                </Link>
                <div className='card-footer' style={{ display: 'none' }}>
                  <Link to='/item/2200/advance-pdf-tool-app'> </Link>
                  <div className='clearfix'>
                    <Link to='/item/2200/advance-pdf-tool-app'> </Link>
                    <button className='btn btn-sm float-left pr-0'>
                      <i className='fa fa-eye' aria-hidden='true'></i> 51
                    </button>
                    <button className='btn btn-sm float-left'>
                      <i
                        className='fas fa-shopping-basket'
                        aria-hidden='true'
                      ></i>
                      0
                    </button>
                    <button
                      type='button'
                      className='btn btn-success btn-sm float-right font-weight-bold'
                    >
                      $39
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
              <div className='card box-shadow h-100'>
                <Link to='/item/2200/advance-pdf-tool-app'>
                  <div className='relativel'>
                    <button
                      type='button'
                      className='btn btn-primary btn-sm float-right font-weight-bold buttonprice text-white'
                    >
                      $39
                    </button>
                    <img
                      className='card-img-top'
                      src='https://www.sellanycode.com/system/assets/uploads/products/AdvancePDFToolapp_sellanycode_featured_image_1639596255.png'
                      alt='Advance PDF Tool app'
                    />
                  </div>
                  <div className='card-body text-center'>
                    <h6 className='card-title mb-3'>Advance PDF Tool app</h6>
                  </div>
                </Link>
                <div className='card-footer' style={{ display: 'none' }}>
                  <Link to='/item/2200/advance-pdf-tool-app'> </Link>
                  <div className='clearfix'>
                    <Link to='/item/2200/advance-pdf-tool-app'> </Link>
                    <button className='btn btn-sm float-left pr-0'>
                      <i className='fa fa-eye' aria-hidden='true'></i> 51
                    </button>
                    <button className='btn btn-sm float-left'>
                      <i
                        className='fas fa-shopping-basket'
                        aria-hidden='true'
                      ></i>
                      0
                    </button>
                    <button
                      type='button'
                      className='btn btn-success btn-sm float-right font-weight-bold'
                    >
                      $39
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
              <div className='card box-shadow h-100'>
                <Link to='/item/2200/advance-pdf-tool-app'>
                  <div className='relativel'>
                    <button
                      type='button'
                      className='btn btn-primary btn-sm float-right font-weight-bold buttonprice text-white'
                    >
                      $39
                    </button>
                    <img
                      className='card-img-top'
                      src='https://www.sellanycode.com/system/assets/uploads/products/AdvancePDFToolapp_sellanycode_featured_image_1639596255.png'
                      alt='Advance PDF Tool app'
                    />
                  </div>
                  <div className='card-body text-center'>
                    <h6 className='card-title mb-3'>Advance PDF Tool app</h6>
                  </div>
                </Link>
                <div className='card-footer' style={{ display: 'none' }}>
                  <Link to='/item/2200/advance-pdf-tool-app'> </Link>
                  <div className='clearfix'>
                    <Link to='/item/2200/advance-pdf-tool-app'> </Link>
                    <button className='btn btn-sm float-left pr-0'>
                      <i className='fa fa-eye' aria-hidden='true'></i> 51
                    </button>
                    <button className='btn btn-sm float-left'>
                      <i
                        className='fas fa-shopping-basket'
                        aria-hidden='true'
                      ></i>
                      0
                    </button>
                    <button
                      type='button'
                      className='btn btn-success btn-sm float-right font-weight-bold'
                    >
                      $39
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
              <div className='card box-shadow h-100'>
                <Link to='/item/2200/advance-pdf-tool-app'>
                  <div className='relativel'>
                    <button
                      type='button'
                      className='btn btn-primary btn-sm float-right font-weight-bold buttonprice text-white'
                    >
                      $39
                    </button>
                    <img
                      className='card-img-top'
                      src='https://www.sellanycode.com/system/assets/uploads/products/AdvancePDFToolapp_sellanycode_featured_image_1639596255.png'
                      alt='Advance PDF Tool app'
                    />
                  </div>
                  <div className='card-body text-center'>
                    <h6 className='card-title mb-3'>Advance PDF Tool app</h6>
                  </div>
                </Link>
                <div className='card-footer' style={{ display: 'none' }}>
                  <Link to='/item/2200/advance-pdf-tool-app'> </Link>
                  <div className='clearfix'>
                    <Link to='/item/2200/advance-pdf-tool-app'> </Link>
                    <button className='btn btn-sm float-left pr-0'>
                      <i className='fa fa-eye' aria-hidden='true'></i> 51
                    </button>
                    <button className='btn btn-sm float-left'>
                      <i
                        className='fas fa-shopping-basket'
                        aria-hidden='true'
                      ></i>
                      0
                    </button>
                    <button
                      type='button'
                      className='btn btn-success btn-sm float-right font-weight-bold'
                    >
                      $39
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
              <div className='card box-shadow h-100'>
                <Link to='/item/2200/advance-pdf-tool-app'>
                  <div className='relativel'>
                    <button
                      type='button'
                      className='btn btn-primary btn-sm float-right font-weight-bold buttonprice text-white'
                    >
                      $39
                    </button>
                    <img
                      className='card-img-top'
                      src='https://www.sellanycode.com/system/assets/uploads/products/AdvancePDFToolapp_sellanycode_featured_image_1639596255.png'
                      alt='Advance PDF Tool app'
                    />
                  </div>
                  <div className='card-body text-center'>
                    <h6 className='card-title mb-3'>Advance PDF Tool app</h6>
                  </div>
                </Link>
                <div className='card-footer' style={{ display: 'none' }}>
                  <Link to='/item/2200/advance-pdf-tool-app'> </Link>
                  <div className='clearfix'>
                    <Link to='/item/2200/advance-pdf-tool-app'> </Link>
                    <button className='btn btn-sm float-left pr-0'>
                      <i className='fa fa-eye' aria-hidden='true'></i> 51
                    </button>
                    <button className='btn btn-sm float-left'>
                      <i
                        className='fas fa-shopping-basket'
                        aria-hidden='true'
                      ></i>
                      0
                    </button>
                    <button
                      type='button'
                      className='btn btn-success btn-sm float-right font-weight-bold'
                    >
                      $39
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
              <div className='card box-shadow h-100'>
                <Link to='/item/2200/advance-pdf-tool-app'>
                  <div className='relativel'>
                    <button
                      type='button'
                      className='btn btn-primary btn-sm float-right font-weight-bold buttonprice text-white'
                    >
                      $39
                    </button>
                    <img
                      className='card-img-top'
                      src='https://www.sellanycode.com/system/assets/uploads/products/AdvancePDFToolapp_sellanycode_featured_image_1639596255.png'
                      alt='Advance PDF Tool app'
                    />
                  </div>
                  <div className='card-body text-center'>
                    <h6 className='card-title mb-3'>Advance PDF Tool app</h6>
                  </div>
                </Link>
                <div className='card-footer' style={{ display: 'none' }}>
                  <Link to='/item/2200/advance-pdf-tool-app'> </Link>
                  <div className='clearfix'>
                    <Link to='/item/2200/advance-pdf-tool-app'> </Link>
                    <button className='btn btn-sm float-left pr-0'>
                      <i className='fa fa-eye' aria-hidden='true'></i> 51
                    </button>
                    <button className='btn btn-sm float-left'>
                      <i
                        className='fas fa-shopping-basket'
                        aria-hidden='true'
                      ></i>
                      0
                    </button>
                    <button
                      type='button'
                      className='btn btn-success btn-sm float-right font-weight-bold'
                    >
                      $39
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          className='itemfooter'
          id='footer-cta'
          style={{
            border: 'none',
            marginTop: '30px',
            marginBottom: '20px',
            borderTop: '1px solid #e7e7e7',
            paddingTop: '2.5em',
          }}
        >
          <div className='container mt-4'>
            <div className='large-12 columns align-center gap-half mt-5 d-flex align-items-center justify-content-center flex-column'>
              <h3 className='gap-half mb-4 text-center'>
                Start Selling Your Code. Enjoy <strong>80% Revenue</strong>{' '}
                Share, <strong>Fast Payouts</strong> Without Restrictions!
              </h3>
              <Link to='/register' className='mt-2'>
                <button className='btn btn-primary px-5 cta large extrawide tall'>
                  START SELLING NOW
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  else return <div>Loading ...</div>;
}

export default DetailProduct;
