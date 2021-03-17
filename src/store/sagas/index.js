/* eslint-disable import/no-cycle */
import { all, fork } from 'redux-saga/effects';

import auth from './auth.saga';
import app from './app.saga';

export default function* rootSaga() {
  yield all([
    fork(auth),
    fork(app),
  ]);
}
