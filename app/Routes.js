import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';

import Home from './containers/Home';

const routes = {
  path: '/',
  indexRoute: { component: Home },
  childRoutes: [
    { path: '*', component: Home },
  ],
};

const Routes = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory} routes={ routes } />
  </Provider>
);

export default Routes;
