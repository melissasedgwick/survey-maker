import surveys from '../apis/surveys';
import { FETCH_SURVEYS } from './types';

export const fetchSurveys = () => async dispatch => {
  const response = await surveys.get('/surveys');

  dispatch({
    type: FETCH_SURVEYS,
    payload: response.data
  });
};
