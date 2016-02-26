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

export function checkupRequest(data) {
  return dispatch => {
    dispatch({
      type: actionTypes.REQUEST_CHECKUP_RESULT,
      data,
    });
    post('/api/checkup', data)
    .then(res => {
      if (res.status >= 200 && res.status < 300) {
        dispatch(checkupSucces(res.body.checkup));
      } else {
        throw new Error(res.statusText);
      }
    })
    .catch(err => {
      dispatch(checkupError(err.message));
    });
  };
}
