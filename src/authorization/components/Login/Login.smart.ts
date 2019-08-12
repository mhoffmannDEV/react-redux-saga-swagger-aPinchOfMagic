import { withHandlers } from 'recompose'

import { history, routePaths } from '../../external'

import Login from './Login.dumb'


export default withHandlers({
  handleLogin: () => () => history.push(routePaths.HOME)
})(Login)
