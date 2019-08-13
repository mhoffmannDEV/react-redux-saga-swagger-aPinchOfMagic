import { combineReducers } from 'redux'
import { reducerWithInitialState } from 'typescript-fsa-reducers/dist'

import {
  RootStoreState,
  SessionStoreState,
} from './types'
import * as actions from './actions'

const SESSION_INITIAL_STATE: SessionStoreState = {
  name: '?',
  surname: '?',
}

export default combineReducers<RootStoreState>({
  session: reducerWithInitialState(SESSION_INITIAL_STATE)
    .case(actions.userLogin.done, (state, { result: { data } }) => ({ ...data })),
})
