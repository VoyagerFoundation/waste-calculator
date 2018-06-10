/* eslint-disable import/prefer-default-export */

import { ADD_CALC_ITEM, REMOVE_CALC_ITEM, SET_CALC_ITEM } from '../constants/calculatorConstants';

// export function setCalcItemTypes(item_types){
//   return {
//     type: INIT_CALC_ITEM_TYPES,
//     item_types
//   }
// }

export function addCalcItem(calc_item_key, delta){
  return {
    type: ADD_CALC_ITEM,
    calc_item_key, 
    delta
  };
}

export function removeCalcItem(calc_item_key, delta){
  return {
    type: REMOVE_CALC_ITEM,
    calc_item_key,
    delta
  };
}

export function setItemAmount(calc_item_key, new_amount){
  return {
    type: SET_CALC_ITEM,
    calc_item_key,
    new_amount
  };
}



