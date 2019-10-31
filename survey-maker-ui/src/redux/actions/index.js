import surveys from '../apis/surveys';
import history from '../../history';
import { FETCH_SURVEYS, CREATE_SURVEY, FETCH_SURVEY, EDIT_SURVEY, DELETE_SURVEY, CREATE_USER } from './types';

export const fetchSurveys = () => async dispatch => {
  const response = await surveys.get('/surveys');

  dispatch({
    type: FETCH_SURVEYS,
    payload: response.data
  });
};

export const createSurvey = (formValues) => async dispatch => {
  const response = await surveys.post('/surveys', { ...formValues });

  dispatch({
    type: CREATE_SURVEY,
    payload: response.data
  });

  history.push('/');
};

export const fetchSurvey = (id) => async dispatch => {
  const response = await surveys.get(`/surveys/${id}`);

  dispatch({
    type: FETCH_SURVEY,
    payload: response.data
  });
};

export const editSurvey = (id, formValues) => async dispatch => {
  const response = await surveys.patch(`/surveys/${id}`, { ...formValues });

  dispatch({
    type: EDIT_SURVEY,
    payload: response.data
  });

  history.push('/');
};

export const deleteSurvey = (id) => async dispatch => {
  await surveys.delete(`/surveys/${id}`);

  dispatch({
    type: DELETE_SURVEY
  });

  history.push('/')
};

export const createUser = (formValues) => async dispatch => {
  await surveys.post('/users', { ...formValues });

  dispatch({
    type: CREATE_USER
  });
};
