import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
const { SubMenu } = Menu;
function BossSider({ location, addTab }) {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%' }}
      selectedKeys={[location.pathname]}
      theme="white"
      onClick={ addTab }
      >
     <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
        <Menu.Item key="/" name="Home">Home</Menu.Item>
        <Menu.Item key="/users" name="Users">Users</Menu.Item>
        <Menu.Item key="/404" name="404">404</Menu.Item>
        <Menu.Item key="/login" name="Login">Login</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
        <Menu.Item key="5">option5</Menu.Item>
        <Menu.Item key="6">option6</Menu.Item>
        <Menu.Item key="7">option7</Menu.Item>
        <Menu.Item key="8">option8</Menu.Item>
      </SubMenu>
      <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
        <Menu.Item key="9">option9</Menu.Item>
        <Menu.Item key="10">option10</Menu.Item>
        <Menu.Item key="11">option11</Menu.Item>
        <Menu.Item key="12">option12</Menu.Item>
      </SubMenu>
    </Menu>
  );
}

BossSider.propTypes = {
  addTab: React.PropTypes.func.isRequired
};

export default BossSider;
