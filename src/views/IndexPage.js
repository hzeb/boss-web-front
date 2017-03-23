import { connect } from 'dva';
import styles from './IndexPage.css';
import BossNav from 'COMPONENT/MainLayout/BossNav';
import BossSider from 'COMPONENT/MainLayout/BossSider';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function IndexPage({ children, location }) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className={styles.header}>
        <div className={styles.title}>BOSS运营管理系统</div>
      </Header>
      <Layout style={{ flex: 1 }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <BossSider location={ location }></BossSider>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <BossNav location={ location } theme="white"></BossNav>
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

export default connect()(IndexPage);
