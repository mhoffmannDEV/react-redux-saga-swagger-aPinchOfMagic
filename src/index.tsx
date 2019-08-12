import * as React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router-dom'

import { history } from 'generic/core'
import { App } from 'app'

render((
  <Router history={history}>
    <App />
  </Router>
), document.getElementById('root'))
