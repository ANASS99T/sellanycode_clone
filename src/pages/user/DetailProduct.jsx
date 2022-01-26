import React from 'react';
import '../../scss/detailProduct.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const licenses = ['Single license', 'Multiple license'];
  const [license, setLicense] = React.useState('Single license');

  const [currentImage, setCurrentImage] = React.useState(0);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);
  const images = [
    'https://www.sellanycode.com/system/assets/uploads/products/ViserLanceFreelancingMarketplacePlatform_sellanycode_screenshot_1643060413.png',
    'https://www.sellanycode.com/system/assets/uploads/products/ViserLanceFreelancingMarketplacePlatform_sellanycode_screenshot_1643060419.png',
    'https://www.sellanycode.com/system/assets/uploads/products/ViserLanceFreelancingMarketplacePlatform_sellanycode_screenshot_1643060437.png',
    'https://www.sellanycode.com/system/assets/uploads/products/ViserLanceFreelancingMarketplacePlatform_sellanycode_screenshot_1643060445.png',
  ];

  const openImageViewer = React.useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className='detailProduct'>
      <div className='jumbotron p-0 pt-5 bg-light border-bottom itempage'>
        <div className='container itempages'>
          <div className='col-md-12 px-0'>
            <div className='row p-15 title'>
              <div className='col-sm-1'>
                <img
                  className='pull-left thumb-lg m-r-md rounded mr-3'
                  src='https://www.sellanycode.com/system/assets/uploads/products/ViserLanceFreelancingMarketplacePlatform_sellanycode_icon_1643060385.png'
                  alt='ViserLance - Freelancing Marketplace Platform'
                  width='80'
                  height='80'
                />
              </div>
              <div className='col-sm-11'>
                <h2 className='text-dark'>
                  ViserLance - Freelancing Marketplace Platform
                </h2>
                <h6>ViserLance - Freelancing Marketplace Platform v1.1</h6>
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
                    src='https://www.sellanycode.com/system/assets/uploads/products/ViserLanceFreelancingMarketplacePlatform_sellanycode_featured_image_1643060391.jpg'
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
                      href='https://script.viserlab.com/viserlance/'
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
                      1 Likes
                    </button>
                    <a
                      name='addtowishlist'
                      href='https://www.sellanycode.com/user/'
                      type='submit'
                      className='btn btn-primary mr-2 rounded btn-view text-white  mx-1'
                      style={{ marginRight: '0px' }}
                    >
                      <i
                        className='fa fa-heart m-r-xs text-white'
                        style={{ marginRight: '9px' }}
                      ></i>
                      Add to Wishlist
                    </a>
                  </div>
                </div>
              </div>

              <div className='card mt-3 box-shadow'>
                <div className='card-header'>
                  <h4 className='screenshots-header'>Screenshots</h4>
                  <div className='store-links'> </div>
                </div>

                <div className='card-body '>
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
                  <p>
                    Viserlance, a professional Freelancing Marketplace Platform
                    that’s comes with Premium features to take your business on
                    a higher level. It is a complete premium item that comes
                    with all features with a combination of all types of the
                    digital marketplace. you able to run gigs-based websites,
                    Hiring based websites, download-based websites, and what you
                    need. We receive several requirements from our buyers, some
                    needs site like codecanyon, some needs Fiverr types and some
                    wants to start a site like Upwork. Our RND team prepares
                    this unique business model where you will have an “all in
                    one” system. It’s developed for those people who want to
                    start their Freelancing marketplace business website. With a
                    total global workforce of around 3.5 billion, there are
                    about 1.1 billion freelancers around the world. 57 million
                    freelancers were working from home. It’s a huge market and
                    new marketplace are growing day by day. Are you looking for
                    a complete Freelancing Marketplace system for your business,
                    then you are in the right place. No need to pay thousands of
                    dollars to hire developers to build your Marketplace
                    Website. Viserlance may assist you to handle unlimited
                    users, orders, services, categories, digital items,
                    freelancers, buyers, staff, able to accept payment via
                    cards, cryptos, and mobile money. the ready-to-go solution,
                    takes only a few minutes to set up your website with our
                    system. we also here to provide you best support,
                    installation, and customization if you need it. hurry up,
                    get your copy and start your marketplace website. We keep
                    level badges, Coupons, GDPR popup, Advertisement, and
                    featured service system on it for better performance and
                    acceptance.
                  </p>
                  <p>Demo Access: Frontend:</p>
                  <p>
                    <a
                      href='https://script.viserlab.com/viserlance/'
                      className='text-secondary'
                    >
                      https://script.viserlab.com/viserlance/
                    </a>
                  </p>
                  <p>Admin/Staff Access:</p>
                  <p>
                    <a
                      href='https://script.viserlab.com/viserlance/admin'
                      className='text-secondary'
                    >
                      https://script.viserlab.com/viserlance/admin
                    </a>
                  </p>
                  <p>Admin Login:</p>
                  <p>Username: admin</p>
                  <p>| Password: admin</p>
                </div>
              </div>

              <div className='card mt-3 box-shadow features-box'>
                <div className='card-header'>
                  <h4>Features</h4>
                </div>
                <div className='card-body featureslist carddescription '>
                  <h2 id='item-description__highlighted-features'>
                    Highlighted Features
                  </h2>
                  <p>
                    - Support modern browser and cross-browser compatibility.
                    <br /> - Strong and powerful admin interface.
                    <br /> - A clean and modern user interface.
                    <br /> - 20+ Payment Gateway and 250+ currencies setup.
                    <br /> - Functionality is Simple and all Dynamic Features.
                    <br /> - Easy Documentation, GDPR Policy.
                    <br /> - Regular updates facilities.
                    <br /> - Premium and quick support.
                    <br />
                    <br />
                  </p>
                  <h2 id='item-description__user-dashboard-features'>
                    User Dashboard Features
                  </h2>
                  <p>
                    - Premium User Dashboard.
                    <br /> - Manage Services.
                    <br /> - Create Service.
                    <br /> - Manage Software.
                    <br /> - Upload Software.
                    <br /> - Service Booking.
                    <br /> - Software Sales.
                    <br /> - Job List.
                    <br /> - Transaction Log.
                    <br /> - Withdraw Money.
                    <br /> - Withdraw History.
                    <br /> - Support Ticket.
                    <br /> - Profile Manage.
                    <br /> - 2FA Security.
                    <br /> - Blogs &amp; Extra Pages.
                    <br /> - Category &amp; Easy Search.
                    <br /> - Email Notification &amp; Verification.
                    <br /> - SMS Notification &amp; Verification.
                    <br /> - GDPR Policy.
                    <br /> - Livechat, Security Captcha Included.
                    <br /> - Comes with Multi language Features.
                    <br /> - Privacy &amp; TOS.
                    <br /> - And more….
                    <br />
                    <br />
                  </p>
                  <h2 id='item-description__admin-features'>Admin Features</h2>
                  <p>
                    - Manage Users.
                    <br /> - Manage Service Booking.
                    <br /> - Manage Sales Software.
                    <br /> - Manage Hire Employees.
                    <br /> - Manage Service.
                    <br /> - Manage Software.
                    <br /> - Manage Job.
                    <br /> - Manage Staff.
                    <br /> - Manage Advertises.
                    <br /> - Manage Rank.
                    <br /> - Setup Coupon.
                    <br /> - Manage Category.
                    <br /> - Manage Features.
                    <br /> - Manage Payment Gateways.
                    <br /> - Manage Deposits.
                    <br /> - Manage Withdrawals.
                    <br /> - Manage Support Ticket.
                    <br /> - Manage Report.
                    <br /> - Manage Subscribers.
                    <br /> - General Setting.
                    <br /> - Manage Logo &amp; Favicon.
                    <br /> - Manage Extensions.
                    <br /> - Manage Language.
                    <br /> - SEO Manager.
                    <br /> - Email Manager.
                    <br /> - SMS Manager.
                    <br /> - Manage GDPR Cookie.
                    <br /> - FRONTEND MANAGER.
                    <br /> - Manage Templates.
                    <br /> - Manage Section.
                    <br /> - Manage Blog Section.
                    <br /> - Manage Contact Us.
                    <br /> - Manage Footer Section.
                    <br /> - Manage Social Icons.
                    <br /> - Custom CSS.
                    <br /> - And More….
                    <br />
                    <br />
                  </p>
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
                        39
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
                  <i className='fa fa-check-circle text-success fa-fw'></i> 100%
                  Satisfaction guarantee
                  <br />
                  <i className='fa fa-check-circle text-success fa-fw'></i>
                  Payment option PayPal or Stripe
                  <br />
                  <i className='fa fa-check-circle text-success fa-fw'></i>
                  Download code <b>immediately</b> after purchase
                  <br />
                </div>
                <div className='row align-items-center justify-content-center'>
                  <div className='btn btn-primary w-75 my-3 '>Buy Now</div>
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
                      <td className='col-xs-5'>Category</td>
                      <td className='col-xs-7'>
                        <Link className='text-success' to='category/7'>
                          Scripts &amp; Code
                        </Link>
                        /
                        <Link className='text-success' to='/category/7/1'>
                          PHP Scripts
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>First Release</td>
                      <td>24 January 2022</td>
                    </tr>
                    <tr>
                      <td>Last updated</td>
                      <td>24 January 2022</td>
                    </tr>
                    <tr>
                      <td>Files included</td>
                      <td>.php, .html, .css, .sql, .cs, .c</td>
                    </tr>
                    <tr>
                      <td>Software version</td>
                      <td>PHP 7.0, PHP 7.1, PHP 7.2, PHP 7.3, PHP 7.4</td>
                    </tr>
                    <tr>
                      <td>File Size</td>
                      <td>35 MB</td>
                    </tr>
                    <tr>
                      <td>Frameworks</td>
                      <td>
                        <Link className='text-success' to='/category/7/1'>
                          PHP Scripts
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
                  style={{ width: '55px', height: '55px', overflow: 'hidden' }}
                  className='avatar m-2'
                  src={viserlab}
                />
                <div className='author-info'>
                  <Link to='/profile/921'>
                    <div className='author-name'> ViserLab</div>
                  </Link>
                  <div className='portfolio-link'>Independent Developer</div>
                </div>
                <Link to='/profile/921/'>
                  <button className='btnfollow btn btn-primary btn-lg btn-block font-bold my-3 btnflow'>
                    Follow
                  </button>
                </Link>
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
                    className='btn btn-primary btn-sm float-right font-weight-bold buttonprice'
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
                    className='btn btn-primary btn-sm float-right font-weight-bold buttonprice'
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
                    className='btn btn-primary btn-sm float-right font-weight-bold buttonprice'
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
                    className='btn btn-primary btn-sm float-right font-weight-bold buttonprice'
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
                    className='btn btn-primary btn-sm float-right font-weight-bold buttonprice'
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
                    className='btn btn-primary btn-sm float-right font-weight-bold buttonprice'
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
                    className='btn btn-primary btn-sm float-right font-weight-bold buttonprice'
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
                    className='btn btn-primary btn-sm float-right font-weight-bold buttonprice'
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
              Start Selling Your Code. Enjoy <strong>80% Revenue</strong> Share,{' '}
              <strong>Fast Payouts</strong> Without Restrictions!
            </h3>
            <Link to='/register' className="mt-2">
              <button className='btn btn-primary px-5 cta large extrawide tall'>
                START SELLING NOW
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetailProduct;
