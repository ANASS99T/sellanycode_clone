import React from 'react';
import './App.scss';
// import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/costum.scss"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navigation from './component/Navigation';
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Home from './pages/Home';
import User from './pages/user/User';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPasswrod from './pages/ResetPassword';
import ResetPasswrodConfirm from './pages/ResetPasswordConfirm';
import AppGmBiblio from './pages/BiblioAppGames';
import ScrCodeBiblio from './pages/BiblioScrCod';
import Upload from './pages/Upload';
import DetailProduct from './pages/user/DetailProduct';
import Footer from './component/Footer';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DeveloperTermsConditions from './pages/TermsConditions';
import BuyerTermsConditions from './pages/BuyerTermsConditions';
import ThemesBiblio from './pages/Themes';
import PluginsBiblio from './pages/Plugins';
import GamesBiblio from './pages/Games';
import GraphicBiblio from './pages/Graphics';

import SellBuyIos from './pages/SellBuyIos';
import SellBuyAndroid from './pages/SellBuyAndroid';
import SellWork from './pages/SellWork';

import Profile from './pages/Profile';
import BuildAnApp from './pages/BuildAnApp';
import Dmca from './pages/Dmca';
import Gurantee from './pages/Gurantee';

const LoginContainer = () => (
  <div>
    <Route path='/login' render={() =>
      sessionStorage.getItem("token") ? <Home /> : <Login />
    } />
    <Route path='/register' render={() =>
      sessionStorage.getItem("token") ? <Home /> : <Register />
    } />
    <Route path='/resetpassword' render={() =>
      sessionStorage.getItem("token") ? <Home /> : <ResetPasswrod />
    } />
    <Route path='/resetpasswordconfirm' render={() =>
      sessionStorage.getItem("token") ? <Home /> : <ResetPasswrodConfirm />
    } />
    <Route exact path="/" render={() => <Redirect to="/login" />} />
  </div>
)

const DefaultContainer = () => (
  <div>
    <Navigation />
    <Route exact path='/' component={Home} />
    <Route path='/user' render={() =>
      sessionStorage.getItem("token") ? <User /> : <User />
    } />
    
     {/* Galeries Navigation */}
    <Route path='/apgmbiblio' component={AppGmBiblio} />
    <Route path='/scriptcode' component={ScrCodeBiblio} />
    <Route path='/themes' component={ThemesBiblio} />
    <Route path='/plugins' component={PluginsBiblio} />
    <Route path='/themes' component={ThemesBiblio} />
    <Route path='/gametemplates' component={GamesBiblio} />
    <Route path='/graphics' component={GraphicBiblio} />


    <Route path='/sell-your-code' component={Upload} />
    <Route path='/item/:id' component={DetailProduct} />
    <Route path='/about' component={About} />
    <Route path='/profile/:id' component={Profile} />
    <Route path='/privacy-policy' component={PrivacyPolicy} />
    <Route path='/developer-terms-conditions' component={DeveloperTermsConditions} />
    <Route path='/buyer-terms-conditions' component={BuyerTermsConditions} />

    <Route path='/build-an-app' component={BuildAnApp} />
    <Route path='/sell-buy-ios-apps' component={SellBuyIos} />
    <Route path='/sell-buy-android-apps' component={SellBuyAndroid} />
    <Route path='/sell-your-work' component={SellWork} />
    <Route path='/dmca' component={Dmca} />
    <Route path='/money-back-guarantee' component={Gurantee} />
    <Footer />
  </div>
)


function App() {
  return (
    <Router>

      <div className="App">
        <Switch>
          <Route exact path="/(login)" component={LoginContainer} />
          <Route exact path="/(register)" component={LoginContainer} />
          <Route exact path="/(resetpassword)" component={LoginContainer} />
          <Route exact path="/(resetpasswordconfirm)" component={LoginContainer} />
          <Route component={DefaultContainer} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
