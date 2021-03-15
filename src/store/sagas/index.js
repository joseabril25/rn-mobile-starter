/* eslint-disable import/no-cycle */
import { all, fork } from 'redux-saga/effects';

// import app from './app.saga';
// import auth from './auth.saga';

export default function* rootSaga() {
  yield all([
    // fork(app),
    // fork(auth),
  ]);
}
