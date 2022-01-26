import React from 'react';
import '../../scss/detailProduct.scss';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
            <TabPanel value={value} index={0}></TabPanel>
            <TabPanel value={value} index={1}></TabPanel>
            <TabPanel value={value} index={2}></TabPanel>
            <TabPanel value={value} index={3}></TabPanel>
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
              <div className='card-footer text-muted text-center'>
                <a href='https://stripe.com/' target='_blank'>
                  <i className='fab fa-stripe text-secondary'></i>
                </a>
                <i className='fab fa-cc-paypal fa-2x'></i>
                <i className='fab fa-cc-visa fa-2x'></i>
                <i className='fab fa-cc-mastercard fa-2x'></i>
                <i className='fab fa-cc-discover fa-2x'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
