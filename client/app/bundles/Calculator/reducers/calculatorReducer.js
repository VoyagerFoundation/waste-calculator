import Immutable from 'immutable';

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

function calculateWaste(items_dict, selected_items_ids){

  var waste = { 
    total_monthly: 0,
    total_yearly: 0, 
    group: {},
  }

  var iterator = selected_items_ids.entries();

  for (const value of iterator) {
    
    var selected_item = value[1];
    var factor = 1;
    let element_key = selected_item.id;
    var item = items_dict.find(function(el){ 
      return el.get('id') == element_key; 
    });
    var default_calc_mode = item.get('default_calc_mode');
    var factor = ( 'weekly' == default_calc_mode ) ? 4 : 1;
    var weight = item.get('weight_gram');
    var item_weight_monthly = weight * selected_item.amount * factor;
    waste.total_monthly += item_weight_monthly
    
    var currnet_group_val = waste.group.hasOwnProperty(item.get('waste_group_name')) ? waste.group[item.get('waste_group_name')] : 0;
    waste.group[item.get('waste_group_name')] = item_weight_monthly + currnet_group_val;
  }
  waste.total_yearly = waste.total_monthly * 12;
  return waste;
}

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
