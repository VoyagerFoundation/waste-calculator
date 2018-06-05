/* eslint-disable import/prefer-default-export */

import { ADD_SMALL_BOTTLES, REMOVE_SMALL_BOTTLES, ADD_BIG_BOTTLES, REMOVE_BIG_BOTTLES } from '../constants/calculatorConstants';

export function addSmallBottles(bottles){
  return {
    type: ADD_SMALL_BOTTLES,
    bottles
  };
}

export function removeSmallBottles(bottles){
  return {
    type: REMOVE_SMALL_BOTTLES,
    bottles
  };
}

export function addBigBottles(bottles){
  return {
    type: ADD_BIG_BOTTLES,
    bottles
  };
}

export function removeBigBottles(bottles){
  return {
    type: REMOVE_BIG_BOTTLES,
    bottles
  };
}
