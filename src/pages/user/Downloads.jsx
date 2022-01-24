import { Alert, Tooltip } from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";
import "../../scss/user.scss"

function Downloads() {
    return <div className="dashbaord">
        <div className="my-1 p-3 bg-white rounded box-shadow">
            <h4 className="pb-2 mb2">
                My Downloads
            </h4>
            <div id="transactions" className="collapse show">
                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col" width="90%">Item Name</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                        <tfoot>
                            <tr>
                                <th colspan="5">
                                    <Alert severity="warning" className="my-2">You have not purchased anything! Just browse in <Link to="/catalog">the catalog here!</Link> 🚀🙂</Alert>
                                </th>
                            </tr>
                        </tfoot>
                    </table>
                </div>


            </div>

        </div>

    </div >;
}

export default Downloads;
