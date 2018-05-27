import React from 'react'
import { Icon } from 'antd'

import './backstageTop.scss'

class BackstageTop extends React.Component {
  render () {
    return (
      <div className="backstage-top">
        <button className="menu-btn" onClick={this.props.toggleCollapsed}>
          <Icon type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </button>
      </div>
    )
  }
}

export default BackstageTop