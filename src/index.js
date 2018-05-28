import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import store from './redux/stores'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import AuthRoute from './components/authRoute/authRoute'
import Login from './container/login/login'
import Layout from './components/layout/layout'
import Product from './container/product/product'

import '@/assets/styles/normalize.scss'
import './index.scss'
import './config'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <AuthRoute />
        <Switch>
          <Route path="/login" component={Login} />
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
