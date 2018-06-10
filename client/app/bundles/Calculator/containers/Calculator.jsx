import React, { PropTypes } from 'react';
import CalculatorWidget from '../components/CalculatorWidget';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import * as calculatorActionCreators from '../actions/calculatorActionCreators';

function select(state) {
  return { 
    $$item_types: state.$$calculatorStore.get('item_types'), 
    items: state.$$calculatorStore.get('items') , 
    $$screens: state.$$calculatorStore.get('screens') 
  };
}

const Calculator = (props) => {
  const { dispatch, $$item_types, items, $$screens } = props;
  const actions = bindActionCreators(calculatorActionCreators, dispatch);

  return (
    <CalculatorWidget {...{
      items,
      item_types: $$item_types, 
      $$screens
    }} />
  );
};

Calculator.propTypes = {
  dispatch: PropTypes.func.isRequired, 
  $$item_types: PropTypes.instanceOf(Immutable.Map).isRequired,
  $$screens: PropTypes.instanceOf(Immutable.Map).isRequired
};

export default connect(select)(Calculator);