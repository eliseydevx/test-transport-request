import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import allReducers from './redusers/redusers';
// import { composeWithDevTools } from 'redux-devtools-extension';

const saga = createSagaMiddleware();

export const store = createStore(
  allReducers,
  compose(applyMiddleware(saga), compose())
);