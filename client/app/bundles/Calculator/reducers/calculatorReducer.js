import Immutable from 'immutable';

import { ADD_CALC_ITEM, REMOVE_CALC_ITEM, SET_CALC_ITEM  } from '../constants/calculatorConstants';

export const $$initialState = Immutable.fromJS({
  items:  { // stores items and their values
  },
  item_types:{ //store item_types for calculation
    default:{
    }
  }
});

export default function calculatorReducer($$state = $$initialState, action) {
  const { calc_item_key, delta, type, new_amount } = action;
  const amount = $$state.getIn(['items', calc_item_key, 'amount']);

  switch (type) {
    case REMOVE_CALC_ITEM:
      if((amount - delta) <= 0){
        return $$state.setIn(['items',calc_item_key, 'amount'], 0);
      }
      return $$state.setIn(['items',calc_item_key, 'amount'], (amount - delta));
    case ADD_CALC_ITEM:
      return $$state.setIn(['items',calc_item_key, 'amount'], (amount + delta));
    case SET_CALC_ITEM:
      return $$state.setIn(['items',calc_item_key, 'amount'], new_amount);
    default:
      return $$state;
  }
}
