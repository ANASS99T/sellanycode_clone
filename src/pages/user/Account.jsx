import React, { useState } from 'react';
import { useRouteMatch, Switch, Route, Link } from 'react-router-dom';
import '../../scss/user.scss';
import { Alert, Avatar, Tooltip } from '@mui/material';
import TransactionList from './TransactionList';

function Account() {
  function stringAvatar(name) {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <div className='account'>
      <div className='accordion' id='accordionExample'>
        <div className='my-1 p-3 bg-lightG rounded box-shadow'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingOne'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseOne'
                aria-expanded='false'
                aria-controls='collapseOne'
              >
                My Account
              </button>
            </h2>
            <div
              id='collapseOne'
              className='accordion-collapse collapse'
              aria-labelledby='headingOne'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <form action='' id='whithdraw'>
                  <div className='my-3'>
                    <div className='input-group'>
                      <span className='input-group-text' id='email-address'>
                        <i className='fas fa-envelope' aria-hidden='true'></i>
                      </span>
                      <input
                        type='email'
                        name='email'
                        className='form-control'
                        aria-label='Email Address'
                        placeholder='Enter your Email'
                        aria-describedby='email-address'
                        required
                      />
                    </div>
                  </div>
                  <div className='my-3'>
                    <div className='input-group'>
                      <span className='input-group-text' id='name'>
                        <i
                          className='far fa-address-card'
                          aria-hidden='true'
                        ></i>
                      </span>
                      <input
                        type='text'
                        name='name'
                        className='form-control'
                        aria-label='Name'
                        placeholder='Enter your Name'
                        aria-describedby='Name'
                        required
                      />
                    </div>
                  </div>
                  <div className='my-3'>
                    <div className='input-group'>
                      <span className='input-group-text' id='username'>
                        <i
                          className='fas fa-user-circle'
                          aria-hidden='true'
                        ></i>
                      </span>
                      <input
                        type='text'
                        name='username'
                        className='form-control'
                        aria-label='Name'
                        placeholder='Enter your Username'
                        aria-describedby='Username'
                        required
                      />
                    </div>
                  </div>
                  <div className='my-3'>
                    <div className='input-group'>
                      <span className='input-group-text' id='email-paypal'>
                        <i className='fab fa-paypal' aria-hidden='true'></i>
                      </span>
                      <input
                        type='email'
                        name='email-paypal'
                        className='form-control'
                        aria-label='Email Paypal'
                        placeholder='Enter your PayPal Email'
                        aria-describedby='email-address'
                      />
                    </div>
                  </div>
                  <hr />
                  <div className='d-flex w-100 align-items-center justify-content-end'>
                    <button className='btn btn-sm btn-primary' type='submit'>
                      Update Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='accordion' id='accordionExample2'>
        <div className='my-1 p-3 bg-lightG rounded box-shadow'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='heading2'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapse2'
                aria-expanded='false'
                aria-controls='collapse2'
              >
                Developer Details
              </button>
            </h2>
            <div
              id='collapse2'
              className='accordion-collapse collapse'
              aria-labelledby='heading2'
              data-bs-parent='#accordionExample2'
            >
              <div className='accordion-body'>
                <form action='' id='whithdraw'>
                  <div className='my-3'>
                    <label htmlFor='dev-type' className='form-label'>
                      Developer Type:
                    </label>
                    <select
                      id='dev-type'
                      className='form-select form-select-sm'
                      aria-label='.form-select-sm example'
                    >
                      <option value='independant developer' selected>
                        Independant Developer
                      </option>
                      <option value='developement agency'>
                        Developement Agency
                      </option>
                    </select>
                  </div>
                  <div className='my-3'>
                    <label className='form-label'>Operation Systems:</label>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='ios'
                      />
                      <label className='form-check-label' htmlFor='ios'>
                        iOS
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='android'
                      />
                      <label className='form-check-label' htmlFor='android'>
                        Android
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='unity'
                      />
                      <label className='form-check-label' htmlFor='unity'>
                        Unity
                      </label>
                    </div>
                  </div>
                  <div className='my-3'>
                    <label className='form-label'>Frameworks:</label>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='native-ios'
                      />
                      <label className='form-check-label' htmlFor='native-ios'>
                        Native iOS
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='native-android'
                      />
                      <label className='form-check-label' htmlFor='native-android'>
                        Native Android
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='cocos2d'
                      />
                      <label className='form-check-label' htmlFor='cocos2d'>
                        Cocos2d
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='unity'
                      />
                      <label className='form-check-label' htmlFor='unity'>
                        Unity
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='swift'
                      />
                      <label className='form-check-label' htmlFor='swift'>
                        Swift
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='xcode'
                      />
                      <label className='form-check-label' htmlFor='xcode'>
                        Xcode
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='php'
                      />
                      <label className='form-check-label' htmlFor='php'>
                        PHP
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='javascript'
                      />
                      <label className='form-check-label' htmlFor='javascript'>
                        JavaScript
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='c#'
                      />
                      <label className='form-check-label' htmlFor='c#'>
                        C#
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='c++'
                      />
                      <label className='form-check-label' htmlFor='c++'>
                        C++
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='java'
                      />
                      <label className='form-check-label' htmlFor='java'>
                        Java
                      </label>
                    </div>
                  </div>
                  <div className='my-3'>
                    <label htmlFor='dev-exp' className='form-label'>
                      Developing experience:
                    </label>
                    <select
                      id='dev-exp'
                      className='form-select form-select-sm'
                      aria-label='.form-select-sm example'
                    >
                      <option value='1-3y' selected>
                        1 - 3 Years
                      </option>
                      <option value='3-5y'>3 - 5 Years</option>
                      <option value='more 5'>More than 5 years</option>
                    </select>
                  </div>

                  <div className='my-3'>
                    <label className='form-label'>
                      Public contact for profile: (optional for freelance work)
                    </label>
                    <div className='input-group'>
                      <span className='input-group-text' id='email-address'>
                        <i className='fas fa-envelope' aria-hidden='true'></i>
                      </span>
                      <input
                        type='email'
                        name='email'
                        className='form-control'
                        aria-label='Email Address'
                        placeholder='Enter your Email'
                        aria-describedby='email-address'
                      />
                    </div>
                  </div>

                  <hr />
                  <div className='d-flex w-100 align-items-center justify-content-end'>
                    <button className='btn btn-sm btn-primary' type='submit'>
                      Update Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='accordion' id='accordionExample3'>
        <div className='my-1 p-3 bg-lightG rounded box-shadow'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='heading3'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapse3'
                aria-expanded='false'
                aria-controls='collapse3'
              >
                Change Password
              </button>
            </h2>
            <div
              id='collapse3'
              className='accordion-collapse collapse'
              aria-labelledby='heading3'
              data-bs-parent='#accordionExample3'
            >
              <div className='accordion-body'>
                <form action='' id='whithdraw'>
                  <div className='my-3'>
                    <div className='input-group'>
                      <span className='input-group-text' id='current-password'>
                        <i className='fas fa-key' aria-hidden='true'></i>
                      </span>
                      <input
                        type='password'
                        name='currentPassword'
                        className='form-control'
                        aria-label='Current Password'
                        placeholder='Current Password'
                        aria-describedby='current-password'
                        required
                      />
                    </div>
                  </div>
                  <div className='my-3'>
                    <div className='input-group'>
                      <span className='input-group-text' id='new-password'>
                        <i className='fas fa-key' aria-hidden='true'></i>
                      </span>
                      <input
                        type='password'
                        name='newPassword'
                        className='form-control'
                        aria-label='New Password'
                        placeholder='New Password'
                        aria-describedby='new-password'
                        required
                      />
                    </div>
                  </div>
                  <div className='my-3'>
                    <div className='input-group'>
                      <span className='input-group-text' id='confirm-password'>
                        <i className='fas fa-key' aria-hidden='true'></i>
                      </span>
                      <input
                        type='password'
                        name='confirmPassword'
                        className='form-control'
                        aria-label='confirm Password'
                        placeholder='Confirm Password'
                        aria-describedby='confirm-password'
                        required
                      />
                    </div>
                  </div>

                  <hr />
                  <div className='d-flex w-100 align-items-center justify-content-end'>
                    <button className='btn btn-sm btn-primary' type='submit'>
                      Change Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='accordion' id='accordionExample4'>
        <div className='my-1 p-3 bg-lightG rounded box-shadow'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='heading4'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapse4'
                aria-expanded='false'
                aria-controls='collapse4'
              >
                Profile Picture
              </button>
            </h2>
            <div
              id='collapse4'
              className='accordion-collapse collapse'
              aria-labelledby='heading4'
              data-bs-parent='#accordionExample4'
            >
              <div className='accordion-body'>
                <form action='' id='whithdraw'>
                  <Avatar
                    alt='Remy Sharp'
                    {...stringAvatar('Anass Obito')}
                    sx={{ width: 100, height: 100 }}
                  />
                  <p>
                    Please upload size 300x300 or 512x512 (.png or .jpg file)
                  </p>
                  <input type='file' name='avatar' id='avatar' />
                  <hr />
                  <div className='d-flex w-100 align-items-center justify-content-end'>
                    <button className='btn btn-sm btn-primary' type='submit'>
                      Change Profile Picture
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
