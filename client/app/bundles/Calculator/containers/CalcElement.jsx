import React, { PropTypes } from 'react';
import CalcElementWidget from '../components/CalcElementWidget';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as calculatorActionCreators from '../actions/calculatorActionCreators';

function select(state) {
  return {};
}

const CalcElement = (props) => {
  const { dispatch, item, amount } = props;
  const actions = bindActionCreators(calculatorActionCreators, dispatch);
  const { setItemAmount } = actions;

  return (
    <CalcElementWidget {...{ 
      setItemAmount, 
      item: item, 
      amount 
    }} />
  );
};

CalcElement.propTypes = {
  dispatch: PropTypes.func.isRequired,
  item: PropTypes.object
};

export default connect(select)(CalcElement);