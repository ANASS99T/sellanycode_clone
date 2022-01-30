import { Avatar } from '@mui/material';
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../scss/user.scss';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import UserMenu from './UserMenu';
import Dashboard from './Dashboard';
import Downloads from './Downloads';
import Items from './Items';
import AprovedItems from './AprovedItems';
import WaitingItems from './WaitingItems';
import RejectedItems from './RejectedItems';
import AddProduct from './AddProduct';
import Transactions from './Transactions';
import Earns from './Earns';
import NewWithdraw from './NewWithdraw';
import WithdrawPast from './WithdrawPast';
import Faq from './Faq';
import Wishlist from './Wishlist';
import Account from './Account';
import Support from './Support';
import userService from '../../services/User.service';
import Moment from 'react-moment';
import AuthService from '../../services/Auth';
import { LoginContext } from '../../LoginContext';
export default function User() {
  const [user, setUser] = useState(null);
  const { toggleLogin } = useContext(LoginContext);
  const [loading, setLoading] = useState(true);
  const logout = () => {
    AuthService.logout()
      .then((res) => {
        // console.log(res);
        toggleLogin();
        window.location.reload();
      })
      .catch((err) => {
        console.error(err.response.data?.error);
      });
  };

  useEffect(() => {
    const userId = localStorage.getItem('user');
    userService
      .getUserById(userId)
      .then((res) => {
        // console.log(res.user);
        setUser(res.user);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let { path, url } = useRouteMatch();
  const [active, setActive] = useState('');
  function stringAvatar(name) {
    // console.log(name);
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
  return (
    <div className='user-dashboard'>
      <div className='container'>
        <div className='row my-3'>
          <div className='col-sm-12 col-md-6 col-lg-3'>
            <div className='btn btn-primary  w-100 d-flex align-items-center justify-content-around'>
              <div className='title'>Credit</div>
              <div className='number'>
                $ {parseFloat((user?.income + user?.withdraw).toFixed(2))}
              </div>
              <div className='logo'>
                <i className='far fa-money-bill-alt'></i>
              </div>
            </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-3'>
            <div className='btn btn-primary  w-100 d-flex align-items-center justify-content-around'>
              <div className='title text-capitalize'>My Wishlist</div>
              <div className='number'>4</div>
              <div className='logo'>
                <i className='fas fa-heart'></i>
              </div>
            </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-3'>
            <div className='btn btn-primary  w-100 d-flex align-items-center justify-content-around'>
              <div className='title'>My purchases</div>
              <div className='number'>0</div>
              <div className='logo'>
                <i className='fas fa-cloud-download-alt'></i>
              </div>
            </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-3'>
            <div className='btn btn-primary  w-100 d-flex align-items-center justify-content-around'>
              <div className='title'>My Sales</div>
              <div className='number'>0</div>
              <div className='logo'>
                <i className='fas fa-shopping-basket'></i>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-4'>
            <div className='my-1 p-3 bg-white rounded box-shadow'>
              <aside className='user-info-wrapper'>
                <div className='user-info'>
                  <div className='user-avatar'>
                    <Link to='/user'>
                      {
                        user?.avatar ? (
                          <Avatar
                            alt='Remy Sharp'
                            src={
                              'http://localhost:3001/uploads/avatar/' +
                              user?.avatar
                            }
                            sx={{ width: 100, height: 100 }}
                          />
                        ) : (
                          /*user?.fullName ? ( */
                          <Avatar
                            alt='Remy Sharp'
                            {...stringAvatar('Anass Obito')}
                            sx={{ width: 100, height: 100 }}
                          />
                        )
                        /*) : null*/
                      }
                    </Link>
                  </div>
                  <div className='user-data'>
                    <h6 className='mb-1'>Hi, {user?.fullName}</h6>
                    <span className='text-muted'>
                      Joined:
                      <strong>
                        <Moment format='YYYY/MM/DD'>{user?.createdAt}</Moment>
                      </strong>
                    </span>
                  </div>
                </div>
                <div className='user-cover'>
                  <Link to={path + '/my-account'} className='float-end m-2'>
                    <button className='btn btn-sm btn-primary '>
                      Edit Account
                    </button>
                  </Link>
                </div>
              </aside>
              <UserMenu url={url} active={active} setActive={setActive} />
            </div>
          </div>
          {loading ? (
            null
          ) : (
            <div className='col-sm-8'>
              <Switch>
                <Route exact path={path} component={Dashboard} />
                <Route exact path={path + '/dashboard'} component={Dashboard} />
                <Route exact path={path + '/download'} component={Downloads} />
                <Route exact path={path + '/myitems'} component={Items} />
                <Route
                  exact
                  path={path + '/my-products'}
                  component={AprovedItems}
                />
                <Route
                  exact
                  path={path + '/my-waiting-products'}
                  component={WaitingItems}
                />
                <Route
                  exact
                  path={path + '/my-rejected-products'}
                  component={RejectedItems}
                />
                <Route
                  exact
                  path={path + '/add-product'}
                  component={AddProduct}
                />
                <Route
                  exact
                  path={path + '/transactions'}
                  component={Transactions}
                />
                <Route exact path={path + '/my-earns'} component={Earns} />
                <Route
                  exact
                  path={path + '/withdraw-money'}
                  component={NewWithdraw}
                />
                <Route
                  exact
                  path={path + '/withdraw-past'}
                  component={WithdrawPast}
                />
                <Route exact path={path + '/faq'} component={Faq} />
                <Route exact path={path + '/wishlist'} component={Wishlist} />
                <Route
                  exact
                  path={path + '/payments'}
                  component={NewWithdraw}
                />
                <Route
                  exact
                  path={path + '/my-account'}
                  render={() => <Account user={user} />}
                />
                <Route exact path={path + '/support'} component={Support} />
              </Switch>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
