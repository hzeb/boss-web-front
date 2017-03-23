import registerModel from 'UTIL/modelsManager';

export default function(app){
  return [{
    path: '/users',
    name: 'UsersPage',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        registerModel(app, require('../models/users'));
        cb(null, require('../views/Users'));
      });
    }
  }]
}
