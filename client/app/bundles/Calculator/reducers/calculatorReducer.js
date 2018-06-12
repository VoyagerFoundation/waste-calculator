import Immutable from 'immutable';

import { SET_CALC_ITEM  } from '../constants/calculatorConstants';

export const $$initialState = Immutable.fromJS({
  items:  { // stores items and their values
  },
  item_types:{ //store item_types for calculation
    default:{
    }
  },
  waste:{ 
    total_monthly: 0,
    total_yearly: 0
  }
});

function calculateWaste(item_types, items, screens){

  var waste = { 
    total_monthly: 0,
    total_yearly: 0
  }

  items.forEach(element => {
    var monthly_factor = 1;
    let element_key = element.get('key');

    if(!screens.getIn(['weekly',element_key])){
      monthly_factor = screens.getIn(['weekly','factor']);
    }

    let type = item_types.get(element_key);
    waste.total_monthly += element.get('amount') * monthly_factor * type.get('weight');
  });

  waste.total_yearly = waste.total_monthly * 12;

  return waste;
}

export default function calculatorReducer($$state = $$initialState, action) {
  const { calc_item_key , type, new_amount } = action;

  switch (type) {
    case SET_CALC_ITEM:
        let $$newState = $$state.setIn(['items',calc_item_key, 'amount'], new_amount);
        var waste = calculateWaste($$newState.get('item_types'), $$newState.get('items'), $$newState.get('screens'));
        return $$newState.set('waste', waste);;
    default:
      return $$state;
  }
}
