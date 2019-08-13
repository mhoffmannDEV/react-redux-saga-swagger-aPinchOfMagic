import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'

import { history } from './external'

import * as routePaths from './constants/routePaths'
import * as actions from './actions'

function* userLoginSaga(): SagaIterator {
  yield delay(1000)

  let result

  yield call(() => fetch('/api/example')
    .then((response) => response.json())
    .then(({ data }) => {
      result = { data }
    }))

    yield put(actions.userLogin.done({ result }))

    history.push(routePaths.HOME)
}

export default function* saga(): SagaIterator {
  yield takeLatest(actions.userLogin.started, userLoginSaga)
}
