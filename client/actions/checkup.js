import * as actionTypes from '../actionTypes/checkup';
import { post } from '../utils/api.js';

function checkupError(error) {
  return {
    type: actionTypes.REQUEST_CHECKUP_RESULT_ERROR,
    error,
  };
}

function checkupSucces(checkup) {
  return {
    type: actionTypes.REQUEST_CHECKUP_RESULT_SUCCESS,
    checkup,
  };
}

export function onSubmit(data) {
  return dispatch => {
    dispatch({
      type: actionTypes.REQUEST_CHECKUP_RESULT,
      data,
    });
    post('/api/checkup', data)
    .then(res => {
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      }
      throw new Error(res.statusText);
    })
    .then(json => {
      dispatch(checkupSucces(json));
    })
    .catch(err => {
      dispatch(checkupError(err.message));
    });
  };
}
