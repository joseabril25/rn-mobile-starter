import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import { authTypes, appTypes } from '../types';

import {
  setCredentials,
  getCredentials,
  resetCredentials,
  setGenericPassword,
  getGenericPassword,
  resetGenericPassword,
} from '../../utils/keychain';


/**
 * @type AUT_LOGIN
 * @param {Object} payload { email, password }
 */
 function* authLogin({ payload }) {
  const { env } = yield select(({ app }) => ({
    env: app.env,
  }));

  const { email, password } = payload;

  const login = { email, password };

  try {
    yield all([
      put({ type: authTypes.AUT_LOGIN_LOADING, payload: true }),
      put({ type: authTypes.AUT_LOGIN_ERROR, payload: null }),
      put({ type: authTypes.AUT_SET_LOGGED, payload: false }),
    ]);

    const { data: response, status } = yield call(requestLogin, login);
    if (status < 400) {
      const { token, user } = response;

      yield all([
        // Stores email and password in keychain
        call(setGenericPassword, payload),
        // Stores sensitive data in keychain using key value
        call(setCredentials, 'token', token),
        call(setCredentials, 'user', user),
      ]);
      yield all([
        put({ type: authTypes.AUT_SET_USER, payload: user }),
        put({ type: authTypes.AUT_SET_APW, payload: token }),
      ]);
      // yield put({ type: authTypes.AUT_SET_ROLES, payload: roles });
      // Sets to true if logged in is successful
      yield put({ type: authTypes.AUT_SET_LOGGED, payload: true });
      yield put({ type: appTypes.APP_SET_SESSION, payload: true });
    } else {
      yield put({
        type: authTypes.AUT_LOGIN_ERROR,
        payload: handleError(500, 'Internal Server Error'),
      });
    }
  } catch (error) {
    yield put({ type: authTypes.AUT_LOGIN_ERROR, payload: handleError(error) });
  } finally {
    yield put({ type: authTypes.AUT_LOGIN_LOADING, payload: false });
  }
}

/**
 * @type AUT_CHECK
 */
 function* authCheck() {

  try {
    yield put({ type: authTypes.AUT_CHECK_LOADING, payload: true });

    const { status } = yield call(getGenericPassword);

    const { user, token } = yield all({
      user: call(getCredentials, 'user'),
      token: call(getCredentials, 'token'),
    });

    if (status && user && token) {
      yield all([
        put({ type: authTypes.AUT_SET_USER, payload: user }),
        put({ type: authTypes.AUT_SET_APW, payload: token }),

        put({ type: authTypes.AUT_SET_LOGGED, payload: true }),
      ]);
      // yield put({ type: authTypes.AUT_SET_ROLES, payload: roles });
    } else {
      yield* authLogout();
    }
  } catch (error) {
    yield put({ type: authTypes.AUT_CHECK_ERROR, payload: error });
    if (getEnv(env).ENVIRONMENT !== 'development') {
      Sentry.captureException(new Error(error));
      crashlytics().recordError(error);
    }
  } finally {
    yield put({ type: authTypes.AUT_CHECK_LOADING, payload: false });
  }
}

/**
 * @type AUT_LOGOUT
 */
 function* authLogout() {
  const { env } = yield select(({ app }) => ({
    env: app.env,
  }));

  try {
    // AUTH RESET
    yield all([
      // # Reset keychain user creds
      call(resetGenericPassword),
      // # Clear key store value
      call(resetCredentials, 'token'),
      call(resetCredentials, 'user'),
    ]);
    // yield call(resetCredentials, 'roles');

    yield all([
      put({ type: authTypes.AUT_SET_USER, payload: null }),
      put({ type: authTypes.AUT_SET_APW, payload: null }),
      put({ type: authTypes.AUT_SET_ROLES, payload: null }),

      // -- Back to Login Screen -- //
      put({ type: authTypes.AUT_SET_LOGGED, payload: false }),
    ]);
  } catch (error) {
    console.log(error);
  }
}

export default function* watcher() {
  yield takeLatest(authTypes.AUT_CHECK, authCheck);
  yield takeLatest(authTypes.AUT_LOGIN, authLogin);
  yield takeLatest(authTypes.AUT_LOGOUT, authLogout);
}