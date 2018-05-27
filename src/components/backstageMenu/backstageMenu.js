import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

import './backstageMenu.scss'

class BackstageMenu extends React.Component {
  
  render () {
    return (
        <Menu
          className="backstage-menu"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.props.collapsed}
        >
          <Menu.Item key="1">
            <Link to="/product">
              <Icon type="pie-chart" />
              <span>产品列表</span>
            </Link>
          </Menu.Item>
        </Menu>
    )
  }
}

export default BackstageMenu