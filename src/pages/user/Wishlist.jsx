import React, { useState } from 'react';
import { useRouteMatch, Switch, Route, Link } from 'react-router-dom';
import '../../scss/user.scss';
import { Alert, Tooltip } from '@mui/material';
import TransactionList from './TransactionList';

function Wishlist() {
  return (
    <div className='wishlist'>
      <div className='my-1 p-3 bg-white rounded box-shadow'>
        <div id='transactions' className='collapse show mt-2'>
          <div className='table-responsive'>
            <table className='table table-striped table-bordered table-hover'>
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th width='100'>Price</th>
                  <th width='100'>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr height='58px'>
                  <td>Kareem Taxi App - Cab Booking Solution + admin panel</td>
                  <td align='center' style={{ verticalAlign: 'middle' }}>
                    <span
                      className='badge badge-success'
                      style={{ fontSize: '85%' }}
                    >
                      $30.00
                    </span>
                  </td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <Tooltip title='View Item' placement='top'>
                        <Link to='/view/item'>
                          <button className='btn btn-sm btn-warning'>
                            <i className='fas fa-search-plus'></i>
                          </button>
                        </Link>
                      </Tooltip>
                      <Tooltip title='Delete Item' placement='top'>
                        <Link to='/delete/item'>
                          <button className='btn btn-sm btn-danger'>
                            <i className='fas fa-trash-alt'></i>
                          </button>
                        </Link>
                      </Tooltip>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
