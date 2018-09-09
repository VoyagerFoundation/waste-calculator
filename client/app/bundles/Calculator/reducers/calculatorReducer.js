import Immutable from 'immutable';

import { SET_CALC_ITEM  } from '../constants/calculatorConstants';

export const $$initialState = Immutable.fromJS({
  items:  { // stores items and their values
  },
  item_types:{ //store item_types for calculation
    default:{}
  },
  waste:{ 
    total_monthly: 0,
    total_yearly: 0
  }, 
  groups:['food'],
  intervals:['weekly','monthly'], 
  display_items:{}
});


// function groupByInterval(items){
//   return _.keyBy(items,function(i) {
//     console.log('default_calc_mode');
//     console.log(i.default_calc_mode);
//     return i.default_calc_mode;
//   });
// }

// function groupByWasteGroup(items, groups){
//   return _.keyBy(items,function(i) {
//     return groups[i.waste_group_id];
//   });
// }

// export function groupItemsByGroupAndPeriod(items, groups_array){
//   if (!items || !groups_array) return;
  
//   var organisedItems = {}
//   debugger;

//   var group_by_id = _.keyBy(groups_array,function(gr){
//     return gr.get('id');
//   });

//   var items_by_groups = groupByWasteGroup(items, groups);

//   _.map(items_by_groups, group => {
//     var items_by_group_interval = groupByInterval(group);

//     organisedItems[group] = items_by_group_interval;
//   });

//   return organisedItems;
// }

// export function groupItemsByPeriodAndGroup(items, groups_array){
//   if (!items || !groups_array) return;
  
//   var organisedItems = {}
//   debugger;

//   var group_by_id = _.keyBy(groups_array,function(gr){
//     return gr.get('id');
//   });

//   var items_by_groups = groupByWasteGroup(items, groups);

//   _.map(items_by_groups, group => {
//     var items_by_group_interval = groupByInterval(group);

//     organisedItems[group] = items_by_group_interval;
//   });

//   return organisedItems;
// }


function calculateWaste(items_dict, selected_items_ids){

  var waste = { 
    total_monthly: 0,
    total_yearly: 0
  }

  var iterator = selected_items_ids.entries();

  for (const value of iterator) {
    
    var selected_item = value[1];
    var factor = 1;
    let element_key = selected_item.id;
    var item = items_dict.find(function(el){ return el.id = element_key; });
    var default_calc_mode = item.get('default_calc_mode');
    var factor = ( 'weekly' == default_calc_mode ) ? 4 : 1;
    var weight = item.get('weight_gram');
    
    waste.total_monthly += weight * selected_item.amount * factor;
  }
  waste.total_yearly = waste.total_monthly * 12;
  return waste;
}

export default function calculatorReducer($$state = $$initialState, action) {
  const { calc_item_key , type, new_amount } = action;

  switch (type) {
    case SET_CALC_ITEM:    
        let $$newState = $$state.setIn(['items',calc_item_key ], { id: calc_item_key, amount: new_amount});
        var waste = calculateWaste($$newState.get('item_types'), $$newState.get('items'));
        return $$newState.set('waste', waste);
    default:
      return $$state;
  }
}
