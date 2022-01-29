import { Tooltip } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import "../../scss/user.scss"
import userService from '../../services/User.service';

function Dashboard({ url }) {
    return <div className="dashbaord">
        <div className="my-1 p-3 bg-white rounded box-shadow">
            <h4 className="pb-2 mb2">
                Last Transactions
            </h4>
            <div id="transactions" className="collapse show">
                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Date</th>
                                <th scope="col">Details</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>

                <div className="row justify-content-md-center align-items-center">
                    <Link to={`${url}/transactions`} className="text-center" >
                        <button className="btn btn-sm  btn-primary">
                            View All Trancations
                        </button>
                    </Link>
                </div>
            </div>

        </div>

        <div className="mt-4 mb-1 p-3 bg-white rounded-box-shadow">
            <h4 className="pb-2 mb-2">
                Your Items for Sale
            </h4>

            <div id="transactions" className="collapse show">
                <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th width="87"></th>
                                <th width="190">Item Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Sales</th>
                                <th width="55">Views</th>
                                <th style={{ width: "88px" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr height="58px">
                                <td>
                                    <img className="card-img-top" style={{ width: "45px", borderRadius: "3px", position: "relative", left: "9px", verticalAlign: "middle" }} src="https://www.sellanycode.com/images/sellanycode-min.png" alt="" />
                                </td>
                                <td>

                                </td>
                                <td align="center" style={{ verticalAlign: "middle" }}>
                                    <Tooltip title="Free Item" placement="top">
                                        <span className="badge bg-primary text-white" >Free</span>
                                    </Tooltip>
                                </td>
                                <td align="center" style={{ verticalAlign: "middle" }}>
                                    <Tooltip title="New Item" placement="top">
                                        <span className="badge bg-primary text-white">New</span>
                                    </Tooltip>
                                </td>
                                <td>0</td>
                                <td>0</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <Tooltip title="View Item" placement="top">
                                            <Link to="/view/item">
                                                <button className="btn btn-success"><i className="fas text-white fa-search-plus"></i></button>
                                            </Link>
                                        </Tooltip>

                                        <Tooltip title="Edit Item" placement="top">
                                            <Link to="/edite/item">
                                                <button className="btn btn-primary"><i className="fas text-white fa-pencil-alt"></i></button>
                                            </Link>
                                        </Tooltip>
                                        <Tooltip title="Delete Item" placement="top">
                                            <Link to="/delete/item">
                                                <button className="btn btn-danger"><i className="fas text-white fa-trash-alt"></i></button>
                                            </Link>
                                        </Tooltip>

                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <Link to={`${url}/transactions`} className="text-center" >
                        <button className="btn btn-sm  btn-primary">
                            + Upload Code
                        </button>
                    </Link>
                    <Link to={`${url}/transactions`} className="text-center" >
                        <button className="btn btn-sm  btn-primary">
                            View All Trancations
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    </div >;
}

export default Dashboard;
