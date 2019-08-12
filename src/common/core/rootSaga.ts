import { delay, put, takeLatest } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'

import { history } from './external'

import * as routePaths from './constants/routePaths'
import * as actions from './actions'

function* userLoginSaga(): SagaIterator {
  console.log('hello!')
  yield delay(1000)
  yield put(actions.userLogin.done({ result: { name: 'jan', surname: 'kowalski' } }))

  history.push(routePaths.HOME)
}

export default function* saga(): SagaIterator {
  yield takeLatest(actions.userLogin.started, userLoginSaga)
}
