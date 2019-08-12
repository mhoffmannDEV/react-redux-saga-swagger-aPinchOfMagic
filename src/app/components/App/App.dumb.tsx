import * as React from 'react'
import { Route } from 'react-router-dom'

import { Login, Layout, routePaths } from '../../external'


const App = () => (
  <>
    <Route component={Login} exact path={routePaths.LOGIN} />
    <Route component={Layout} path={routePaths.HOME} />
  </>
)


export default App
