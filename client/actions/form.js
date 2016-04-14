import * as actionTypes from '../actionTypes/form';

export function update(name, value) {
  return dispatch => dispatch({
    type: actionTypes.FORM_UPDATE_VALUE,
    name,
    value,
  });
}

export function reset() {
  return dispatch => dispatch({
    type: actionTypes.FORM_RESET,
  });
}
