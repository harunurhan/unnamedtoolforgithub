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

<<<<<<< HEAD
export function onSubmit(data) {
=======
export function checkupRequest(data) {
>>>>>>> d5a53951a92cb18e518772372753fddbc5f683b4
  return dispatch => {
    dispatch({
      type: actionTypes.REQUEST_CHECKUP_RESULT,
      data,
    });
    post('/api/checkup', data)
    .then(res => {
      if (res.status >= 200 && res.status < 300) {
<<<<<<< HEAD
        return res.json();
      }
      throw new Error(res.statusText);
    })
    .then(json => {
      dispatch(checkupSucces(json));
=======
        dispatch(checkupSucces(res.body.checkup));
      } else {
        throw new Error(res.statusText);
      }
>>>>>>> d5a53951a92cb18e518772372753fddbc5f683b4
    })
    .catch(err => {
      dispatch(checkupError(err.message));
    });
  };
}
