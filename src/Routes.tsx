import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import AsyncLoad from './components/common/AsyncLoad';
import { ROOT_PATH, TICKER_PATH } from './constants/paths';
import withTracker from './hocs/GoogleAnalytics';

const AsyncTicker = AsyncLoad({
  loader: () => import('./pages/Ticker'),
});

const AsyncHomePage = AsyncLoad({
  loader: () => import('./pages/Home'),
});

export default () => {
  return (
    <Switch>
      <Route exact path={ROOT_PATH} component={withTracker(AsyncHomePage)} />
      <Route exact path={TICKER_PATH} component={withTracker(AsyncTicker)} />
    </Switch>
  );
};

export const SIGN_UP = "/signup";
export const SIGN_IN = "/signin";
export const LANDING = "/";
export const HOME = "/home";
export const ACCOUNT = "/account";
export const PASSWORD_FORGET = "/password_forget";