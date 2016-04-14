import merge from 'lodash/merge';
import * as actionTypes from '../actionTypes/checkup';

const initalState = {
  warnings: [],
};

export default function checkup(state = initalState, action) {
  switch (action.type) {
    // TODO: remove (REQUEST_CHECK_RESULT) case if it is completely unnecessary (seems so)
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
