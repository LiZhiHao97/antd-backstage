import React from 'react'
import { Row, Col , Select, Input, Button, Icon } from 'antd'
import ProductList from "@/components/productList/productList" 

import './product.scss'

class Product extends React.Component {
  handleChange(value) {
    console.log(`selected ${value}`)
  }
  render () {
    const Option = Select.Option
    return (
      <div className="product">
        <div className="product-wrapper">
          <Row style={{lineHeight: '32px'}} gutter={40}> 
            <Col style={{display: 'flex'}} span={8}>
              <label style={{paddingRight: 8}} >搜索类型:</label>
              <Select
                showSearch
                placeholder="请选择"
                optionFilterProp="children"
                style={{flex: 1}}
                onChange={this.handleChange}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="jack">产品编号</Option>
                <Option value="lucy">产品类别</Option>
                <Option value="tom">产品名称</Option>
              </Select>
            </Col>
            <Col style={{display: 'flex'}} span={8}>
              <label style={{paddingRight: 8}} >内容:</label>
              <Input style={{flex: 1}} />
            </Col>
            <Col  span={8}>
              <Button type="primary" style={{marginRight: 10}}>查询</Button>
              <Button>重置</Button>
            </Col>
          </Row>
          <div className="create-wrapper">
            <Button type="primary">
              <Icon type="plus"></Icon>
              <span>新建</span>
            </Button>
          </div>
          <ProductList />
        </div>
      </div>
    )
  }
}

export default Product