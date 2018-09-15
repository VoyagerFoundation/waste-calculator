/* eslint-disable import/prefer-default-export */

import { SET_CALC_ITEM, SET_WASTE_GROUP  } from '../constants/calculatorConstants';

export function setItemAmount(calc_item_key, new_amount){
  return {
    type: SET_CALC_ITEM,
    calc_item_key,
    new_amount
  };
}

export function selectWasteGroup(selected_waste_group){
  return {
    type: SET_WASTE_GROUP, 
    selected_waste_group
  }
}



