import * as React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import { history } from 'generic/core'

import { store } from 'common/core'

import { App } from 'app'


render((
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
), document.getElementById('root'))
