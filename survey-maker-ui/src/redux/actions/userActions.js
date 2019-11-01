import surveys from '../apis/surveys';
import history from '../../history';
import { SIGNIN_USER, SIGNOUT_USER, CREATE_USER } from './types';

export const createUser = (formValues) => async dispatch => {
  await surveys.post('/users', { ...formValues });

  dispatch({
    type: CREATE_USER
  });

  history.push('/');
};

export const signinUser = (formValues) => async dispatch => {
  const response = await surveys.post(`/users/signin`, { ...formValues });

  dispatch({
    type: SIGNIN_USER,
    payload: response.data
  });

  history.push('/');
};

export const signoutUser = () => {
  return {
    type: SIGNOUT_USER
  };
};
