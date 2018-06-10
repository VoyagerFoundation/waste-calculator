import React, { PropTypes } from 'react';
import CalcElementWidget from '../components/CalcElementWidget';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import * as calculatorActionCreators from '../actions/calculatorActionCreators';

function select(state) {
  return {};
}

const CalcElement = (props) => {
  const { dispatch, item, item_type } = props;
  const actions = bindActionCreators(calculatorActionCreators, dispatch);
  const { setItemAmount } = actions;
  return (
    <CalcElementWidget {...{ 
      setItemAmount, 
      item: item, 
      item_type: item_type
    }} />
  );
};

CalcElement.propTypes = {
  dispatch: PropTypes.func.isRequired,
  item_type: PropTypes.instanceOf(Immutable.Map).isRequired
};

export default connect(select)(CalcElement);