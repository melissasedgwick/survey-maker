import { SIGNIN_USER, SIGNOUT_USER } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNIN_USER:
      return { ...state, userId: action.payload.id, isSignedIn: true };
    case SIGNOUT_USER:
      return { ...state, userId: null, isSignedIn: false };
    default:
      return state;
  }
};
