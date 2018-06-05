import calculatorReducer from '../reducers/calculatorReducer'
import { $$initialState as $$calculatorState } from './calculatorReducer';

export default {
  $$calculatorStore: calculatorReducer,
};

export const initialStates = {
  $$calculatorState,
};
