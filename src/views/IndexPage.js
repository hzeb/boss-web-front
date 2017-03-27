import { connect } from 'dva';
import styles from './IndexPage.css';
import BossNav from 'COMPONENT/MainLayout/BossNav';
import BossSider from 'COMPONENT/MainLayout/BossSider';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { routerRedux } from 'dva/router';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function IndexPage({ dispatch, children, location, navbars }) {
  function addTab(item, key, keyPath){
    dispatch({
      type: 'indexPage/addTab',
      payload: item
    });
    dispatch(routerRedux.push(item.key));
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className={styles.header}>
        <div className={styles.title}>BOSS运营管理系统</div>
      </Header>
      <Layout style={{ flex: 1 }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <BossSider location={ location } addTab={ addTab }></BossSider>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <BossNav location={ location } theme="white" navbars={ navbars }></BossNav>
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

IndexPage.propTypes = {
};

function mapStateToProps(state) {
  const { navbars } = state.indexPage;
  return {
    navbars
  };
}

export default connect(mapStateToProps)(IndexPage);
