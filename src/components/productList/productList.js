import React from 'react'
import { Table, Divider } from 'antd'

import './productList.scss'

class ProductList extends React.Component {
  render () {
    return  <Table dataSource={dataSource} columns={columns} />
  }
}

const dataSource = [
  {
    key: '1',
    id: '1',
    name: '测试',
    type: '测试'
  },

  {
    key: '2',
    id: '2',
    name: '测试',
    type: '测试'
  }

  ,

  {
    key: '3',
    id: '3',
    name: '测试',
    type: '测试'
  }

  ,

  {
    key: '4',
    id: '4',
    name: '测试',
    type: '测试'
  }

  ,

  {
    key: '5',
    id: '5',
    name: '测试',
    type: '测试'
  }
]

const columns = [
  {
    title: '产品编号',
    dataIndex: 'id',
    key: 'id',
  }, 

  {
    title: '产品名称',
    dataIndex: 'name',
    key: 'name',
  },


  {
    title: '产品类型',
    dataIndex: 'type',
    key: 'type',
  },

  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <a style={{color: '#1890ff'}} href="#javascript">详情</a>
          <Divider type="vertical" />
        <a style={{color: '#e45158'}} href="#javascript">删除</a>
      </span>
    ),
  }
]

export default ProductList