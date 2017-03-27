import * as loginService from 'SERVICE/login';

export default {
  namespace: 'login',
  state: {
  },
  effects: {
    *login(action, { call, put, select }) {
      const account  = yield select(state => state.indexPage.account);
      if(account){
        return;
      }
      var accountData = new FormData();
      accountData.append('account', 'chenjingjun');
      accountData.append('password', '123abc');
      accountData.append('remember', false);

      const { data } = yield call(loginService.login, accountData);
      if(data){
        yield put({ type: 'getAccount'});
      }
    },
    *getAccount(action,{ call, put}) {
      const { data } = yield call(loginService.getAccount);
      yield put({ type: 'indexPage/save', payload: { account:data }});
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/login') {
          dispatch({ type: 'login'});
        }
      });
    },
  },
};
