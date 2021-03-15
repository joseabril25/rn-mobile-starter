import { appTypes } from '../types';
const defaultState = {
  // Used for reinstallation
  session: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case appTypes:
      return {
        ...state,
        session: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default reducer;
