import React from 'react';
import { Router } from 'dva/router';
import IndexPage from 'VIEW/IndexPage'
import users from 'ROUTE/users';
import registerModel from 'UTIL/modelsManager';

function RouterConfig({ history, app }) {
  const routes = [{
    path: '/',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        registerModel(app, require('../models/IndexPage'));
        cb(null, require('../views/IndexPage'));
        });
    },
    getIndexRoute(nextState, cb) {
      require.ensure([], function (require) {
        cb(null, { component: require('VIEW/home') });
      })
    },
    childRoutes: [
      {
        path: 'login',
        name: 'Login',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            registerModel(app, require('../models/login'));
            cb(null, require('../views/login'));
          });
        }
      },
      ...users(app)
    ]
  }];

  return <Router history = { history } routes = { routes }/>;
}

export default RouterConfig;
