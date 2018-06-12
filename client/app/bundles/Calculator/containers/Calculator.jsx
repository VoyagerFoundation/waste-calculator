import React, { PropTypes } from 'react';
import CalculatorWidget from '../components/CalculatorWidget';
import { connect } from 'react-redux';
import Immutable from 'immutable';

function select(state) {
  return { 
    $$item_types: state.$$calculatorStore.get('item_types'), 
    items: state.$$calculatorStore.get('items') , 
    $$screens: state.$$calculatorStore.get('screens'), 
    waste: state.$$calculatorStore.get('waste'), 
  };
}

const Calculator = (props) => {
  const { $$item_types, items, $$screens, waste } = props;

  return (
    <CalculatorWidget {...{
      items,
      item_types: $$item_types, 
      $$screens, 
      waste
    }} />
  );
};

Calculator.propTypes = {
  dispatch: PropTypes.func.isRequired, 
  $$item_types: PropTypes.instanceOf(Immutable.Map).isRequired,
  $$screens: PropTypes.instanceOf(Immutable.Map).isRequired
};

export default connect(select)(Calculator);