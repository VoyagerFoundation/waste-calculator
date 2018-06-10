import React, { PropTypes } from 'react';
import  { Component } from 'react';
import CalcElement from '../containers/CalcElement';

export default class CalculatordWidget extends React.Component {

  render() {
    const { items, item_types } = this.props;

    if(!this.props.item_types)return(<div>Loading...</div>);

    return (
      <div className="container">
        <h3>
          Hello!
        </h3>
        <hr />
        <CalcElement item={items.get('small_bottle')} item_type={item_types.get('small_bottle')}  />
        <CalcElement item={items.get('big_bottle')} item_type={item_types.get('big_bottle')}  />
        <CalcElement item={items.get('coffee_cup')} item_type={item_types.get('coffee_cup')}  />
      </div>
    );
  }
}
