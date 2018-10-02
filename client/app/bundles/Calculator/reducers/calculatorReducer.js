import Immutable from 'immutable';
import { calculateWaste } from "./tools/calculateWaste";

import { SET_CALC_ITEM, SET_WASTE_GROUP  } from '../constants/calculatorConstants';

export const $$initialState = Immutable.fromJS({
  items:  { // stores items and their values
  },
  item_types:{ //store item_types for calculation
    default:{}
  },
  selected_waste_group: 'kitchen',
  waste:{ 
    total_monthly: 0,
    total_yearly: 0
  }, 
  groups:['food'],
  intervals:['weekly','monthly'], 
  display_items:{},
  selected_waste_group:'kitchen',
});

export default function calculatorReducer($$state = $$initialState, action) {
  const { calc_item_key , type, new_amount, selected_waste_group } = action;
  switch (type) {
    case SET_CALC_ITEM:    
        let $$newState = $$state.setIn(['items',calc_item_key ], { id: calc_item_key, amount: new_amount});
        var waste = calculateWaste($$newState.get('item_types'), $$newState.get('items'));
        return $$newState.set('waste', waste);
    case SET_WASTE_GROUP:
        return $$state.set('selected_waste_group', selected_waste_group);
    default:
      return $$state;
  }
}
