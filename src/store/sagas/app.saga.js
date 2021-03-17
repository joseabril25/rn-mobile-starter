import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import { appTypes } from '../types';
import { requestAnalytics } from '../../api/app';


/**
 * @type AUT_LOGIN
 * @param {Object} payload { email, password }
 */
 function* getAnalytics() {

  const { token } = yield select(({ auth }) => ({
    token: auth.apw,
  }));

  try {
    yield all([
      put({ type: appTypes.APP_LOADING_ANALYTICS, payload: true }),
    ]);

    const { data: response, status } = yield call(requestAnalytics, token);
    const { success, data } = response;
    if (success) {
      const objectArray = Object.entries(data);
      const analyticsData = objectArray.map(([key, value]) => {
        return {title: key, data: value};
      })
      yield put({ type: appTypes.APP_SET_ANALYTICS, payload: analyticsData})
     
    }
  } catch (error) {

  } finally {
    yield put({ type: appTypes.APP_LOADING_ANALYTICS, payload: false });
  }
}

export default function* watcher() {
  yield takeLatest(appTypes.APP_HANDLE_ANALYTICS, getAnalytics);
}