import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

function BossNav({ location, theme, navbars }) {
  return (
    <Menu
      selectedKeys={ [location.pathname] }
      mode="horizontal"
      theme={ theme || "dark" }
    >
      {navbars.map(function(navbar) {
        return (
          <Menu.Item key={ navbar.key }>
            <Link to={ navbar.key }>{ navbar.item.props.name }</Link>
          </Menu.Item>
        );
      })}
      { /*<Menu.Item key="/">
        <Link to="/"><Icon type="home" />Home</Link>
      </Menu.Item>
      <Menu.Item key="/users">
        <Link to="/users"><Icon type="bars" />Users</Link>
      </Menu.Item>
      <Menu.Item key="/404">
        <Link to="/page-you-dont-know"><Icon type="frown-circle" />404</Link>
      </Menu.Item>
      <Menu.Item key="/antd">
        <a href="https://github.com/dvajs/dva">dva</a>
      </Menu.Item>
      <Menu.Item key="/login">
        <Link to="/login">Login</Link>
      </Menu.Item> */ }
    </Menu>
  );
}

export default BossNav;
