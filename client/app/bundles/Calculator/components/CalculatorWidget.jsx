import React, { PropTypes } from 'react';
import  { Component } from 'react';
import CalcElement from '../containers/CalcElement';

export default class CalculatordWidget extends React.Component {
  
  renderElements(elements){ 
    const { items, item_types, $$screens } = this.props;
    const items_keys = Array.from( elements.keys() );
    
    return _.map(items_keys, element_key => {
      var element = elements.get(element_key);
      if('input' == element.type){
        return(
          <CalcElement item={items.get(element_key)} item_type={item_types.get(element_key)} key={element_key} />
        );
      }
      else {
        return(
          <CalcElement item={items.get(element_key)} item_type={item_types.get(element_key)} key={element_key} />
        );
      }
    });
  }

  render() {
    const { $$screens } = this.props;
    const weekly_elements = $$screens.getIn(['weekly','elements']);
    const monthly_elements = $$screens.getIn(['monthly','elements']);
    
    return (
      <div className="container">
        <h3>
          Plastic Calculator Weekly
        </h3>
        <hr />
        {this.renderElements(weekly_elements)}
        <h3>
          Plastic Calculator Monthly
        </h3>
        <hr />
        {this.renderElements(monthly_elements)}
      </div>
    );
  }
}
