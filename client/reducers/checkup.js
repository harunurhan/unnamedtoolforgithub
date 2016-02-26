import merge from 'lodash/merge';
import * as actionTypes from '../actionTypes/checkup';

export default function checkup(state = {}, action) {
  switch (action.type) {
    case actionTypes.REQUEST_CHECKUP_RESULT:
      return merge({}, state, action.data);
    case actionTypes.REQUEST_CHECKUP_RESULT_SUCCESS:
      return merge({}, state, action.checkup);
    case actionTypes.REQUEST_CHECKUP_RESULT_ERROR:
      return merge({}, state, action.error);
    default:
      return state;
  }
}
