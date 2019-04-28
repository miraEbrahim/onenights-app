import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut/SignOut';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session/Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.HOME_PAGE}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li>
      <Link to={ROUTES.ADMIN}>Admin</Link>
    </li>

    <li>
      <Link to={ROUTES.BLOG}>BLOG</Link>
    </li>
    <li>
      <Link to={ROUTES.LANDING_PAGE}>landing page</Link>
    </li>

    <li>
      <Link to={ROUTES.MAP_PLACES}>MAP PLACES </Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>

    <li>
      <Link to={ROUTES.BLOG}>BLOG</Link>
    </li>
    <li>
      <Link to={ROUTES.MAP_PLACES}>MAP PLACES </Link>
    </li>
    <li>
      <Link to={ROUTES.LANDING_PAGE}>landing page</Link>
    </li>
  </ul>
);

export default Navigation;
