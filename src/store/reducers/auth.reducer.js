import { authTypes } from '../types';

const defaultState = {
  isChecking: true,
  checkError: null,

  isLoggedIn: false,
  isLoginLoading: false,
  loginError: null,

  isOnboarding: false,

  user: null,
  apw: null,
  roles: null,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    // Auth Check
    case authTypes.AUT_CHECK_LOADING: {
      return {
        ...state,
        isChecking: action.payload,
      };
    }
    case authTypes.AUT_CHECK_ERROR: {
      return {
        ...state,
        checkError: action.payload,
      };
    }

    // Login
    case authTypes.AUT_LOGIN_LOADING: {
      return {
        ...state,
        isLoginLoading: action.payload,
      };
    }
    case authTypes.AUT_LOGIN_ERROR: {
      return {
        ...state,
        loginError: action.payload,
      };
    }

    // Setters
    case authTypes.AUT_SET_LOGGED: {
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    }
    case authTypes.AUT_SET_ONBOARDING: {
      return {
        ...state,
        isOnboarding: action.payload,
      };
    }
    case authTypes.AUT_SET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case authTypes.AUT_SET_APW: {
      return {
        ...state,
        apw: action.payload,
      };
    }
    case authTypes.AUT_SET_ROLES: {
      return {
        ...state,
        roles: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
