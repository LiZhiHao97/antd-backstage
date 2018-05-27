import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import store from './redux/stores'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Layout from './components/layout/layout'
import Product from './container/product/product'

import '@/assets/styles/normalize.scss'
import './index.scss'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Layout>
            <Route path="/product" component={Product} />
          </Layout>
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </Provider>
  , 
  document.getElementById('root'))
registerServiceWorker()
