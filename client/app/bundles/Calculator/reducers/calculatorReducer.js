import Immutable from 'immutable';

import { ADD_SMALL_BOTTLES, REMOVE_SMALL_BOTTLES, ADD_BIG_BOTTLES, REMOVE_BIG_BOTTLES  } from '../constants/calculatorConstants';

export const $$initialState = Immutable.fromJS({
  bottles:  { // this is the default state that would be used if one were not passed into the store
    small_bottles: 0,
    big_bottles: 0
  }
});

export default function calculatorReducer($$state = $$initialState, action) {
  const { type, bottles } = action;
  const small_bottles = $$state.getIn(['bottles','small_bottles']);
  const big_bottles = $$state.getIn(['bottles','big_bottles']);

  switch (type) {
    case ADD_SMALL_BOTTLES:
      return $$state.setIn(['bottles','small_bottles'], (small_bottles + bottles));
    case REMOVE_SMALL_BOTTLES:
      return $$state.setIn(['bottles','small_bottles'], (small_bottles - bottles));
    case ADD_BIG_BOTTLES:
      return $$state.setIn(['bottles','big_bottles'], (big_bottles + bottles));
    case REMOVE_BIG_BOTTLES:
      return $$state.setIn(['bottles','big_bottles'], (big_bottles - bottles));
    default:
      return $$state;
  }
}
