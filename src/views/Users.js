import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import UsersComponent from 'COMPONENT/Users/Users';

function Users({ location }) {
  return (
    <div className={styles.normal}>
      <UsersComponent />
    </div>
  );
}

export default connect()(Users);
