import * as loginService from 'SERVICE/login';

export default {
  namespace: 'index',
  state: {
    account: null
  },
  reducers: {
    save(state, { payload: { account } }) {
      return { ...state, account };
    },
  },
  effects: {
    *login(action, { call, put,select }) {
      const account  = yield select(state => state.index.account);
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
      yield put({ type: 'save', payload: { account:data }});
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
