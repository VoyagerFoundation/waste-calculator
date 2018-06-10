import React, { PropTypes } from 'react';
import  { Component } from 'react';
import CalcElement from '../containers/CalcElement';

export default class CalculatordWidget extends React.Component {

  render() {

    if(!this.props.item_types)return(<div>Loading...</div>);
    const item = this.props.items.get('small_bottle');
    const item_type = this.props.item_types.get('small_bottle');

    return (
      <div className="container">
        <h3>
          Hello!
        </h3>
        <hr />
        <CalcElement item={item} item_type={item_type}  />
      </div>
    );
  }
}
