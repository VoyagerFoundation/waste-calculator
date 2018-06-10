import React, { PropTypes } from 'react';
import  { Component } from 'react';
import CalcElement from '../containers/CalcElement';

export default class CalculatordWidget extends React.Component {
  
  renderElements(elements){ 
    const { items, item_types } = this.props;

    return _.map(elements.toArray(), element => {
      console.log(element);
      return(
        <CalcElement item={items.get(element)} item_type={item_types.get(element)}  />
      );
    });
  }

  render() {
    const { items, item_types, $$screens } = this.props;
    
    const weekly_elements = $$screens.getIn(['weekly','elements']);
    

    return (
      <div className="container">
        <h3>
          Plastic Calculator Weekly
        </h3>
        <hr />
        {this.renderElements(weekly_elements)}
      </div>
    );
  }
}
