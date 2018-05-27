import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import store from './redux/stores'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import '@/assets/styles/normalize.scss'
import './index.scss'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <h1>My App</h1>
    </BrowserRouter>
  </Provider>
  , 
  document.getElementById('root'))
registerServiceWorker()
