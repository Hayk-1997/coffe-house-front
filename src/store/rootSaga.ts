import { all } from 'redux-saga/effects';
import CoffeeUserAuth from './CoffeeHouse/auth/saga';

function * rootSaga () {
  yield all([CoffeeUserAuth()]);
}

export default rootSaga;
