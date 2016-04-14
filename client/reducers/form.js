import merge from 'lodash/merge';
import * as actionTypes from '../actionTypes/form';

const initialState = {
  values: {},
};

export default function form(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FORM_UPDATE_VALUE:
      return merge({}, state, {
        values: merge({}, state.values, {
          [action.name]: action.value,
        }),
      });
    case actionTypes.FORM_RESET:
      return initialState;
    default:
      return state;
  }
}
