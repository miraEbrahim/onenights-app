import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

import SignUpPage from '../SignUp/SignUp';
import SignInPage from '../SignIn/SignIn';
import PasswordForgetPage from '../PasswordForget/PasswordForget';
import HomePage from '../Home/HomePage';
import AccountPage from '../Account/Account';
import AdminPage from '../Admin/Admin';

import MapPlaces from '../Map/MapPlaces';
import LandingPage from '../LandingPage/LandingPage';
import Blog from '../Blog/Blog';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session/Session';

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME_PAGE} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route path={ROUTES.LANDING_PAGE} component={LandingPage} />
      <Route path={ROUTES.BLOG} component={Blog} />
      <Route path={ROUTES.MAP_PLACES} component={MapPlaces} />
    </div>
  </Router>
);

export default withAuthentication(App);
