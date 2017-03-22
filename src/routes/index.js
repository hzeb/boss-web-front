import React from 'react';
import { Router } from 'dva/router';
import users from 'ROUTE/users';
import IndexPage from 'VIEW/IndexPage';
import request from 'UTIL/request';

function RouterConfig({ history, app }) {
  const routes = [{
    path: '/',
    component: IndexPage,
    getIndexRoute(nextState, cb) {
      require.ensure([], function (require) {
        cb(null, { component: require('../views/home') });
      })
    },
    onEnter: function (nextState, replaceState) {
      if(!nextState.isLogin){
        var code = nextState.location.query.code;
        if(code){
          request(`/eduboss/UserController/loginCallBackNew.do?code=${code}`).then(function(res){
            if(res.status == '200'){
              debugger;
              nextState.isLogin == true;
              replaceState(nextState);
            }
          });
        }else {
          window.location.href = 'https://logintest.xiaojiaoyu100.com/oauth2/boss?redirect_uri=http://localhost:9000/';
        }
      }
      console.log(nextState);
    },
    childRoutes: [
      ...users(app)
    ]
  }];

  return <Router history = { history }
  routes = { routes }
  />;
}

export default RouterConfig;
