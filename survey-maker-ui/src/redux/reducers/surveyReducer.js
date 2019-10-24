import { FETCH_SURVEYS, CREATE_SURVEY } from '../actions/types';

const INITIAL_STATE = {
  surveys: []
};

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SURVEYS:
      return { ...state, surveys: action.payload };
    case CREATE_SURVEY:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
