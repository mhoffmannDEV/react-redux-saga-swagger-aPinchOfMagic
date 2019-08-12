import createSagaMiddleware from 'redux-saga'
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction'
import {
  StoreEnhancer,
  applyMiddleware,
  compose,
  createStore,
} from 'redux'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

import { RootStoreState } from './types'


const sagaMiddleware = createSagaMiddleware()

const enhancers = compose(
  applyMiddleware(sagaMiddleware),
  devToolsEnhancer({}),
) as StoreEnhancer<RootStoreState | { dispatch: {} }>

const store = createStore<RootStoreState, any, any, any>(rootReducer, enhancers)

sagaMiddleware.run(rootSaga)


export default store
