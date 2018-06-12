/* eslint-disable import/prefer-default-export */

import { SET_CALC_ITEM } from '../constants/calculatorConstants';

export function setItemAmount(calc_item_key, new_amount){
  return {
    type: SET_CALC_ITEM,
    calc_item_key,
    new_amount
  };
}



