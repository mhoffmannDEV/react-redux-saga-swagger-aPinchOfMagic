import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { actions } from '../../external'

import Login from './Login.dumb'


const ExtendedLogin = compose<any, any>(
  connect(undefined, (dispatch: Dispatch) => ({
    navigateToHome: () => dispatch(actions.userLogin.started({}))
  })),
  withHandlers({
    handleLogin: ({ navigateToHome }) => () => navigateToHome(),
  }),
)(Login)


export default ExtendedLogin
