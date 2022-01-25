import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouteMatch, Switch, Route, Link } from 'react-router-dom';
import ItemsMenu from './ItemsMenu';
const steps = ['add-product', 'Images & Assets', 'Files & Pricing'];

function AddProduct() {
  let { path, url } = useRouteMatch();
  const [active, setActive] = React.useState('add-product');
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const [selectedCat, setSelectedCat] = useState('');
  const [selectedSubCat, setSelectedSubCat] = useState('');

  const [categories, setCategories] = useState([
    {
      category: 'game templates',
      subcategories: ['untiy', 'cordova', 'construct 2', 'cocos2d', 'buildbox'],
    },
    {
      category: 'app templates',
      subcategories: [
        'xamrin',
        'unity',
        'titanuim',
        'react',
        'iOS',
        'ionic',
        'flutter',
        'corona',
        'cordova',
        'construct 2',
        'buildbox',
        'android',
      ],
    },
    {
      category: 'plugins',
      subcategories: [
        'X-Cart',
        'WordPress Plugins',
        'WeeCommerce Plugins',
        'PrestaShop Plugins',
        'osCommerce Plugins',
        'osClass Plugins',
        'nopCommer Plugins',
        'OpenCart Pluginss',
        'Megento Plugins',
        'Joomla Plugins',
        'Drupal Plugins',
        'CS-cart Plugins',
        'Other Plugins',
      ],
    },
    {
      category: 'Graphics',
      subcategories: [
        'User Interface',
        'Texture',
        'Product Mockups',
        'Print',
        'Logos',
        'Icons',
        'Game Assets',
      ],
    },
    {
      category: 'Themes',
      subcategories: [
        'WordPress Themes',
        'Woocommerce Themes',
        'Tumblr Themes',
        'Shopify Themes',
        'PrestaShop Themes',
        'osClass Themes',
        'OpenCart Themes',
        'nopCommerce Themes',
        'MyDB Themes',
        'Muse Themes',
        'Miscellaneous',
        'Magento Themes',
        'Joomla Themes',
        'HTML Themes',
        'Ghost Themes',
        'Drupal Themes',
      ],
    },
    {
      category: 'Scripts & code',
      subcategories: [
        'VB.NET',
        'Ruby',
        'Python',
        'PHP Scripts',
        'Miscellaneous',
        'JavaScript',
        'Java',
        'CSS',
        'C#',
        'C & C++',
      ],
    },
  ]);

  const [ops, setOps] = useState([
    'iOS 8.0.x',
    'iOS 9.2.x',
    'iOS 8.1.x',
    'iOS 9.0.x',
    'iOS 9.0.x',
    'iOS 9.3',
    'iOS 10',
    'iOS 11',
    'iOS 12',
    'iOS 13',
    'Android 4.1.x',
    'Android 4.2.x',
    'Android 4.3.x',
    'Android 4.4',
    'Android 5.0',
    'Android 6.0',
    'Android 7.0',
    'Android 8.0',
    'Android 9.0',
    'Android 10.0',
    'Unity 4.6.x',
    'Unity 5.0',
    'Unity 5.1',
    'Unity 5.2.x',
    'Unity 5.3',
    'Unity 5.4',
    'Unity 5.5',
    'Unity 5.6',
    'Unity 2017',
    'Unity 2018',
    'Unity 2019',
    'Unity 2020',
  ]);
  const [files, setFiles] = useState([
    'php',
    'js',
    'ascx',
    'h',
    'nib',
    'dex',
    'unityproj',
    'lua',
    'ai',
    'c',
    'rb',
    'html',
    'sql',
    'vb',
    'm',
    'swift',
    'db',
    'obj',
    'css',
    'swf',
    'flv',
    'cs',
    'pch',
    'dat',
    'java',
    'prefab',
    'less',
    'aspx',
    'csproj',
    'xib',
    'apk',
    'dll',
    'fbx',
    'xml',
    'epx',
    'asm',
    'build.setting',
    'cpp',
    'muse',
    'Layered.psd',
    'py',
  ]);

  const [htmlFram, setHtmlFram] = useState([
    'Bootstrap',
    'Bootstrap',
    'Foundation',
    'Less',
    'Semantic UI',
    'Skeleton',
    'YAML',
  ]);

  const [jsFram, setJsFram] = useState([
    'jQuery',
    'MooTools',
    'YUI',
    'EXT JS',
    'Backbone.js',
    'Node.js',
  ]);
  const [softV, setSoftV] = useState([
    'PHP 4.x',
    'PHP 5.2',
    'PHP 5.6',
    'PHP 7.3',
    '.NET 3.5',
    'PHP 5.x',
    'PHP 5.3',
    'PHP 7.0',
    'PHP 7.4',
    '.NET 4.0',
    'PHP 5.4',
    'PHP 7.1',
    '.NET 2.0',
    '.NET 4.5',
    'PHP 5.1',
    'PHP 5.5',
    'PHP 7.2',
    '.NET 3.0',
    '.NET 4.6',
  ]);
  const [softF, setSoftF] = useState([
    'Laravel',
    'Symphony',
    'Solar',
    'Solar',
    'CodeIgniter',
    'Kohana',
    'React',
    'Flex',
    'CakePHP',
    'Yii',
    'Angular',
    'Zend',
    'Lithium',
    'VueJS',
  ]);
  const [dbs, setDbs] = useState(['MySQL 4.x', 'MySQL 4.x']);
  const [suppCms, setSupCms] = useState([
    'Joomla 4.0.x',
    'Joomla 3.9.x',
    'Joomla 3.8.x',
    'Joomla 3.7.x',
    'Joomla 3.6.x',
    'Joomla 3.5.x',
    'Joomla 3.4.x',
    'Joomla 3.3.x',
    'Joomla 3.1.x',
    'Joomla 3.0.x',
    'Joomla 2.5.x',
    'WordPress 5.0',
    'WordPress 4.9',
    'WordPress 4.8',
    'WordPress 4.7',
    'WordPress 4.6',
    'WordPress 4.5',
    'WordPress 4.4',
    'WordPress 4.3',
    'WordPress 4.2',
    'WordPress 4.1',
    'WordPress 4.0',
    'WordPress 3.9',
    'WordPress 3.8',
    'Magento 2.0.x',
    'Magento 1.9.2.x',
    'Magento 2.0.x',
    'Magento 1.9.0.x',
    'Magento 1.8',
    'Magento 1.7',
    'Drupal 8.0',
    'Drupal 7.0',
    'OpenCart 2.3',
    'OpenCart 2.2',
    'OpenCart 2.0',
    'osCommerce 3.0.x',
    'OpenCart 1.5',
    'osCommerce 2.3.x',
    'PrestaShop 1.5',
    'PrestaShop 1.6',
    'PrestaShop 1.7',
    'nopCommerce 3.5',
    'nopCommerce 3.6',
    'nopCommerce 3.7',
    'Ghost 0.11',
    'Ghost 0.10',
    'Ghost 0.9',
    'Ghost 0.8',
    'Ghost 0.7',
    'WooCommerce 3.0',
    'WooCommerce 2.9',
    'WooCommerce 2.8',
    'WooCommerce 2.7',
    'WooCommerce 2.6',
    'WooCommerce 2.5',
    'Ghost 0.11',
    'Ghost 1.0',
    'Ghost 0.9',
    'MyBB 1.8.x',
    'MyBB 1.7.x',
  ]);

  return (
    <div className='addProduct'>
      <ItemsMenu url={url} active={active} setActive={setActive} />

      <div className='my-1 p-3 bg-white rounded box-shadow'>
        <Box sx={{ width: '100%' }} className='mt-2'>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton onClick={handleStep(index)}>{label}</StepButton>
              </Step>
            ))}
          </Stepper>
          <div>
            {allStepsCompleted() ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {/* <Typography sx={{ mt: 2, mb: 1 }}> */}
                {activeStep === 0 ? (
                  <div>
                    <div className='my-3'>
                      <label className='form-label'>
                        Name: <span style={{ color: 'red' }}>*</span>
                      </label>
                      <div className='input-group'>
                        <input
                          type='text'
                          name='name'
                          className='form-control'
                          aria-label='Name'
                          aria-describedby='name'
                          required
                        />
                      </div>
                    </div>
                    <div className='my-3'>
                      <label className='form-label'>
                        Short Description: (Max. 80 characters):{' '}
                        <span style={{ color: 'red' }}>*</span>
                      </label>
                      <div className='input-group'>
                        <input
                          type='text'
                          name='name'
                          className='form-control'
                          aria-label='Name'
                          aria-describedby='name'
                          required
                        />
                      </div>
                    </div>
                    <hr />

                    <div className='my-3'>
                      <label htmlFor='dev-type' className='form-label'>
                        Category: <span style={{ color: 'red' }}>*</span>
                      </label>
                      <select
                        id='dev-type'
                        className='form-select form-select-sm'
                        aria-label='.form-select-sm example'
                        defaultValue={selectedCat}
                        onChange={(e) => setSelectedCat(e.target.value)}
                      >
                        {categories.map((item, key) => (
                          <option key={key} value={item.category}>
                            {item.category}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className='my-3'>
                      <label htmlFor='dev-type' className='form-label'>
                        Subcategory: <span style={{ color: 'red' }}>*</span>
                      </label>
                      <select
                        id='dev-type'
                        className='form-select form-select-sm'
                        aria-label='.form-select-sm example'
                        defaultValue={selectedSubCat}
                        onChange={(e) => setSelectedSubCat(e.target.value)}
                      >
                        {categories.map((item) =>
                          item.category === selectedCat
                            ? item.subcategories.map((sub, index) => (
                                <option key={index} value={sub}>
                                  {sub}
                                </option>
                              ))
                            : null
                        )}
                      </select>
                    </div>
                    {selectedCat === 'game templates' ||
                    selectedCat === 'app templates' ? (
                      <div className='my-3'>
                        <label htmlFor='dev-type' className='form-label'>
                          Operating systems:{' '}
                          <span style={{ color: 'red' }}>*</span>
                        </label>
                        <div className='row'>
                          {ops.map((ext, index) => (
                            <div className='col-sm-12 col-md-3'>
                              <div className='form-check'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  value=''
                                  id={`os${index}`}
                                />
                                <label
                                  className='form-check-label'
                                  htmlFor={`os${index}`}
                                >
                                  .{ext}
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                    <div className='my-3'>
                      <label htmlFor='dev-type' className='form-label'>
                        Files included: <span style={{ color: 'red' }}>*</span>
                      </label>
                      <div className='row'>
                        {files.map((ext, index) => (
                          <div className='col-sm-12 col-md-3'>
                            <div className='form-check'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                value=''
                                id={`ext${index}`}
                              />
                              <label
                                className='form-check-label'
                                htmlFor={`ext${index}`}
                              >
                                .{ext}
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {selectedCat === 'Themes' ||
                    selectedCat === 'Scripts & code' ? (
                      <div className='my-3'>
                        <label htmlFor='dev-type' className='form-label'>
                          HTML/CSS Framework:
                          <span style={{ color: 'red' }}>*</span>
                        </label>
                        <div className='row'>
                          {htmlFram.map((fram, index) => (
                            <div className='col-sm-12 col-md-3'>
                              <div className='form-check'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  value=''
                                  id={`fram${index}`}
                                />
                                <label
                                  className='form-check-label'
                                  htmlFor={`fram${index}`}
                                >
                                  {fram}
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                    {selectedCat === 'Themes' ||
                    selectedCat === 'Scripts & code' ? (
                      <div className='my-3'>
                        <label htmlFor='dev-type' className='form-label'>
                          JavaScript Frameworks:
                          <span style={{ color: 'red' }}>*</span>
                        </label>
                        <div className='row'>
                          {jsFram.map((fram, index) => (
                            <div className='col-sm-12 col-md-3'>
                              <div className='form-check'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  value=''
                                  id={`jsfram${index}`}
                                />
                                <label
                                  className='form-check-label'
                                  htmlFor={`jsfram${index}`}
                                >
                                  {fram}
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                    {selectedCat === 'Scripts & code' ? (
                      <div className='my-3'>
                        <label htmlFor='dev-type' className='form-label'>
                          Software version:
                          <span style={{ color: 'red' }}>*</span>
                        </label>
                        <div className='row'>
                          {softV.map((fram, index) => (
                            <div className='col-sm-12 col-md-3'>
                              <div className='form-check'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  value=''
                                  id={`softv${index}`}
                                />
                                <label
                                  className='form-check-label'
                                  htmlFor={`softv${index}`}
                                >
                                  {fram}
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                    {selectedCat === 'Scripts & code' ? (
                      <div className='my-3'>
                        <label htmlFor='dev-type' className='form-label'>
                          Software framework:
                          <span style={{ color: 'red' }}>*</span>
                        </label>
                        <div className='row'>
                          {softF.map((fram, index) => (
                            <div className='col-sm-12 col-md-3'>
                              <div className='form-check'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  value=''
                                  id={`softf${index}`}
                                />
                                <label
                                  className='form-check-label'
                                  htmlFor={`softf${index}`}
                                >
                                  {fram}
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                    {selectedCat === 'Scripts & code' ? (
                      <div className='my-3'>
                        <label htmlFor='dev-type' className='form-label'>
                          Database:
                          <span style={{ color: 'red' }}>*</span>
                        </label>
                        <div className='row'>
                          {dbs.map((fram, index) => (
                            <div className='col-sm-12 col-md-3'>
                              <div className='form-check'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  value=''
                                  id={`db${index}`}
                                />
                                <label
                                  className='form-check-label'
                                  htmlFor={`db${index}`}
                                >
                                  {fram}
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                    {selectedCat === 'Themes' || selectedCat === 'plugins' ? (
                      <div className='my-3'>
                        <label htmlFor='dev-type' className='form-label'>
                          Supported CMS:
                          <span style={{ color: 'red' }}>*</span>
                        </label>
                        <div className='row'>
                          {suppCms.map((fram, index) => (
                            <div className='col-sm-12 col-md-3'>
                              <div className='form-check'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  value=''
                                  id={`cms${index}`}
                                />
                                <label
                                  className='form-check-label'
                                  htmlFor={`cms${index}`}
                                >
                                  {fram}
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : activeStep === 1 ? (
                  <>test 2</>
                ) : (
                  <>test 3</>
                )}
                {/* </Typography> */}
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Button
                    className='text-primary'
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button
                    onClick={handleNext}
                    sx={{ mr: 1 }}
                    className='text-primary'
                  >
                    Next
                  </Button>
                  {activeStep !== steps.length &&
                    (completed[activeStep] ? (
                      <Typography
                        variant='caption'
                        sx={{ display: 'inline-block' }}
                        className='text-primary'
                      >
                        Step {activeStep + 1} already completed
                      </Typography>
                    ) : (
                      <Button onClick={handleComplete} className='text-primary'>
                        {completedSteps() === totalSteps() - 1
                          ? 'Finish'
                          : 'Complete Step'}
                      </Button>
                    ))}
                </Box>
              </React.Fragment>
            )}
          </div>
        </Box>
      </div>
    </div>
  );
}

export default AddProduct;
