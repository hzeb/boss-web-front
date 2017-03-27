export default {
  namespace: 'indexPage',
  state: {
    navbars: [],
    account: null
  },
  reducers: {
    addTab(state, { payload: item }) {
      for(let navbar of state.navbars){
        if(item.key === navbar.key){
          return state;
        }
      }
      return { ...state, navbars:[ ...state.navbars, item ]}
    },
    save(state, { payload: { account } }) {
      return { ...state, account };
    }
  }
};
