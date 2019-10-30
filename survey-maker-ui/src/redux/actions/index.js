import surveys from '../apis/surveys';
import history from '../../history';
import { FETCH_SURVEYS, CREATE_SURVEY, FETCH_SURVEY } from './types';

export const fetchSurveys = () => async dispatch => {
  const response = await surveys.get('/surveys');

  dispatch({
    type: FETCH_SURVEYS,
    payload: response.data
  });
};

export const createSurvey = (formValues) => async dispatch => {
  const response = await surveys.post('/surveys', {...formValues});

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
